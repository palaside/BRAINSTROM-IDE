// dashboard/dashboard.js
"use strict";

// Utility to fetch JSON (or text) from a relative path
function fetchJSON(path) {
  return fetch(path).then(r => {
    if (!r.ok) throw new Error(`Failed to load ${path}`);
    return r.json();
  });
}
function fetchText(path) {
  return fetch(path).then(r => {
    if (!r.ok) throw new Error(`Failed to load ${path}`);
    return r.text();
  });
}

async function loadDataSources(config) {
  const data = {};
  for (const src of config.dataSources) {
    try {
      if (src.endsWith('.json')) {
        data[src] = await fetchJSON(src);
      } else if (src.endsWith('.md')) {
        data[src] = await fetchText(src);
      } else {
        data[src] = await fetchText(src);
      }
    } catch (e) {
      console.warn(e.message);
      data[src] = null;
    }
  }
  return data;
}

function createCard(title, status, extraHtml = "") {
  const card = document.createElement('div');
  card.className = 'card';
  const h2 = document.createElement('h2');
  h2.textContent = title;
  const span = document.createElement('span');
  span.textContent = status;
  span.className = status === 'passed' ? 'status-pass' : 'status-fail';
  h2.appendChild(document.createTextNode(' – '));
  h2.appendChild(span);
  card.appendChild(h2);
  if (extraHtml) {
    const div = document.createElement('div');
    div.innerHTML = extraHtml;
    card.appendChild(div);
  }
  return card;
}

function renderDashboard(data) {
  const content = document.getElementById('content');
  const overall = document.getElementById('overall-health');
  const generated = document.getElementById('generated-at');
  const now = new Date().toLocaleString();
  generated.textContent = now;

  // Determine overall health (all phases passed)
  const phases = ['PHASE2_RUNTIME_STATUS.json', 'PHASE2B_ORCHESTRATOR_STATUS.json', 'PHASE2C_CLI_STATUS.json', 'PHASE2D_REGRESSION_GUARD_STATUS.json'];
  const allPass = phases.every(p => data[p] && data[p].status === 'passed');
  overall.textContent = allPass ? '✅ All phases passed' : '⚠️ Issues detected';

  // Phase cards
  phases.forEach(p => {
    const file = p;
    const d = data[file];
    if (d) {
      const status = d.status || 'unknown';
      const card = createCard(p.replace('.json', ''), status);
      content.appendChild(card);
    }
  });

  // Invariant card (projectName, mode, final type)
  const runtime = data['PHASE2_RUNTIME_STATUS.json'];
  if (runtime) {
    const html = `<ul>
      <li>projectName: ${runtime.projectName}</li>
      <li>projectTypeMode: ${runtime.projectTypeMode}</li>
      <li>finalProjectType: ${runtime.finalProjectType}</li>
    </ul>`;
    const card = createCard('Project Invariants', 'info', html);
    content.appendChild(card);
  }

  // Prohibited artifacts status (use runtime summary flags)
  if (runtime) {
    const missing = runtime.missingArtifacts;
    const html = `<ul>
      <li>src: ${missing.src ? '❌' : '✅'}</li>
      <li>package.json: ${missing.packageJson ? '❌' : '✅'}</li>
      <li>build: ${missing.build ? '❌' : '✅'}</li>
      <li>dist: ${missing.dist ? '❌' : '✅'}</li>
    </ul>`;
    const card = createCard('Prohibited Artifacts', 'info', html);
    content.appendChild(card);
  }

  // Available commands
  const commands = [
    'node cli/cli.js status',
    'node cli/cli.js verify',
    'node cli/cli.js dry-run',
    'node cli/cli.js orchestrate',
    'node cli/cli.js report',
    'node test/harness.js'
  ];
  const cmdHtml = '<ul>' + commands.map(c => `<li><code>${c}</code></li>`).join('') + '</ul>';
  content.appendChild(createCard('Available Commands', 'info', cmdHtml));

  // Latest verification evidence
  const reports = ['test/test-report.md', 'cli/CLI_REPORT.md'];
  const reportsHtml = '<ul>' + reports.map(r => `<li><a href="${r}" target="_blank">${r}</a></li>`).join('') + '</ul>';
  content.appendChild(createCard('Verification Evidence', 'info', reportsHtml));
}

// Main entry
(async function() {
  try {
    const config = await fetchJSON('dashboard-config.json');
    const data = await loadDataSources(config);
    // Optionally write combined data to dashboard-data.json via Node (not possible in browser). Here we just render.
    renderDashboard(data);
  } catch (e) {
    console.error('Dashboard init error:', e);
  }
})();
