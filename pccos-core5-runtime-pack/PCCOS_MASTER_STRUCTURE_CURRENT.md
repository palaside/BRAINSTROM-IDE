# PCCOS MASTER STRUCTURE CURRENT

## 0. Current Status Summary

- **Context Foundation - 05ALL12** = **PASS**
- **Core 5 Output Artifacts** = **PASS**
- **Phase 2 Runtime Implementation Foundation** = **PASS**
- **Phase 2B Core 5 Runtime Orchestrator** = **PASS**
- **Phase 2C Runtime CLI / Command Runner Foundation** = **PASS**
- **Phase 2D Runtime Regression Guard / Test Harness** = **PASS**
- **Phase 2E Runtime Status Dashboard / Health Summary** = **PASS**
- **Phase 2F Runtime Release Snapshot / Export Readiness** = **NEXT**

**Project invariants**
- Project Type is **not locked**
- `finalProjectType` remains **pending-analysis**
- No source application has been created
- No `package.json`
- No `src/` directory
- No `build/` directory
- No `dist/` directory

---

## 1. Civilization / Conceptual Hierarchy

```
Artificial Cognitive Companion Civilization
→ Civilization Runtime
→ Sovereign Intelligence Runtime
→ Cognitive Operating System
→ Production Operating System
→ Project Production Pipeline
→ Project Lifecycle Runtime
→ Production Cycle
→ Input
```

**Explanation of each level**

- **Artificial Cognitive Companion Civilization**: The highest‑level societal construct that encapsulates all AI‑augmented cognitive agents.
- **Civilization Runtime**: Executes the collective policies, norms, and shared knowledge of the civilization.
- **Sovereign Intelligence Runtime**: Governs autonomous decision‑making, ensuring alignment with civilization goals.
- **Cognitive Operating System**: Provides the mental primitives (memory, reasoning, perception) for intelligent agents.
- **Production Operating System**: Bridges cognitive processes to concrete production actions (build, deploy, release).
- **Project Production Pipeline**: Orchestrates the flow of work from conception to delivery for each project.
- **Project Lifecycle Runtime**: Manages the stages of a project (initiation, planning, execution, monitoring, closure).
- **Production Cycle**: The iterative loop that consumes inputs, produces outputs, and feeds back into the system.
- **Input**: Raw data, requirements, policies, or environmental signals that start the cycle.

These layers map to the repository structure: each runtime component can be represented as a **module**, **agent**, or **MCP** within the codebase.

---

## 2. PCCOS Project Production System Modules

| # | Module | Purpose | Input | Process | Output | Risk | Verification |
|---|--------|---------|-------|---------|--------|------|--------------|
| 0 | **Doctrine & Policy Runtime** | Holds the core policy language and governance rules. | Policy definitions, governance meta‑data | Validation, inference, policy‑enforcement | `modules/01_doctrine_policy_runtime/` artifacts | Policy contradictions | PHASE2_RUNTIME_VERIFICATION_REPORT.md |
| 1 | **Intake Runtime** | Ingests raw project context and initial requirements. | Raw requirements, external data sources | Normalisation, initial categorisation | `modules/02_intake_runtime/` | Missing or malformed inputs | PHASE2_RUNTIME_VERIFICATION_REPORT.md |
| 2 | **Project Genome Engine** | Generates a structured project “genome” (type candidates, confidence). | Doctrine‑validated policies, intake data | Candidate generation, confidence scoring | `modules/03_project_genome_engine/` | Low confidence, bias | PHASE2_RUNTIME_VERIFICATION_REPORT.md |
| 3 | **Reality Scan Engine** | Audits the actual file system and environment for prohibited artifacts. | File system snapshot | Scanning, rule‑checking | `modules/04_reality_scan_engine/` | False‑positive detections | PHASE2_RUNTIME_VERIFICATION_REPORT.md |
| 4 | **Missing Intelligence Engine** | Detects gaps in knowledge or missing artifacts. | Genome, reality‑scan results | Gap analysis, action‑item creation | `modules/05_missing_intelligence_engine/` | Over‑generation of action items | PHASE2_RUNTIME_VERIFICATION_REPORT.md |
| 5 | **Reverse Requirement Discovery Wizard** | Turns missing‑intelligence findings into concrete requirements. | Action items from Missing Intelligence | Requirement extraction, prioritisation | Future requirement spec files | Unclear traceability | (Future) |
| 6 | **Scope Lock Engine** | Locks scoped requirements once approved. | Approved requirements | State transition, lock enforcement | Locked scope artefacts | Premature locking | (Future) |
| 7 | **Execution Runtime** | Executes the chosen implementation plan. | Locked scope, selected engine | Build / run pipelines | Execution logs | Runtime failures | (Future) |
| 8 | **Verification Engine** | Runs verification suites against the execution output. | Execution logs, test definitions | Test orchestration, result aggregation | Verification reports | False‑negative tests | PHASE2D_REGRESSION_GUARD_VERIFICATION_REPORT.md |
| 9 | **Evidence & Traceability Engine** | Collects audit trails for every decision. | All previous step outputs | Linking, provenance tagging | Traceability artefacts | Data loss | PHASE2D_REGRESSION_GUARD_VERIFICATION_REPORT.md |
|10| **Self‑Healing Runtime** | Attempts automated remediation of detected issues. | Verification failures | Healing policies, corrective actions | Healing logs | Over‑correction | (Future) |
|11| **Memory & Learning Loop** | Feeds back successful patterns into the knowledge base. | Successful runs, metrics | Incremental learning, model updates | Updated policy/models | Model drift | (Future) |
|12| **Agent Runtime** | Hosts autonomous agent instances that act on behalf of the system. | Agent specifications | Scheduling, execution | Agent outputs | Agent misbehaviour | (Future) |
|13| **Skill Runtime** | Provides reusable AI skills (e.g., summarisation, coding). | Skill requests | Skill dispatch | Skill results | Skill failures | (Future) |
|14| **Plugin Runtime** | Extensible plug‑in architecture for third‑party extensions. | Plugin descriptors | Loading, sandboxing, permission enforcement | Plugin artefacts | Security breach | (Future) |
|15| **MCP Runtime** | Mediates safe tool invocation across the ecosystem. | Tool request payloads | Capability mapping, security checks | Tool results | Unauthorized tool use | (Future) |
|16| **Project Standard Library** | Common utilities and shared code for all modules. | Library contracts | Versioning, distribution | Library packages | Compatibility issues | (Future) |
|17| **Intent‑to‑Artifact Compiler** | Compiles high‑level intents into concrete artefacts. | Intent definitions | Compilation, templating | Generated artefacts | Mis‑compilation | (Future) |
|18| **Capability Map Engine** | Maintains a map of available capabilities per module. | Module descriptors | Mapping, query service | Capability catalog | Stale map | (Future) |
|19| **Simulation Before Execution Engine** | Runs a sandboxed simulation of the planned execution. | Execution plan | Simulation, risk scoring | Simulation report | False security sense | (Future) |
|20| **Decision Intelligence Engine** | Provides decision support using the compiled evidence. | Evidence, constraints | Decision models, scoring | Decision output | Bias in models | (Future) |
|21| **Human Approval & Autonomy Ladder** | Defines escalation points for human sign‑off. | Decision output | Approval workflow | Approved actions | Bottleneck | (Future) |
|22| **Versioning & Snapshot Engine** | Takes immutable snapshots of the whole system state. | All artefacts | Snapshot creation, metadata | Snapshot bundles | Snapshot corruption | (Future) |
|23| **UI Workbench & Selector Renderer** | Visual interface for selecting modules, views, and actions. | UI configuration | Rendering, interaction handling | UI artefacts | UI regression | (Future) |
|24| **Release & Delivery Runtime** | Packages and delivers final artefacts to downstream consumers. | Snapshots, release notes | Packaging, distribution | Release bundles | Incomplete release | (Future) |
|25| **Civilization Command Center** | Top‑level command console for overseeing the entire civilization runtime. | Commands, policies | Coordination, monitoring | System‑wide directives | Command overload | (Future) |

---

## 3. Core 5 Runtime Foundation

The **Core 5** foundation consists of the first five modules that have been fully implemented and verified.

| Module | Path | Key artefacts | Role in data flow |
|--------|------|--------------|-------------------|
| Doctrine & Policy Runtime | `modules/01_doctrine_policy_runtime/` | Policy schemas, `DOCTRINE_REPORT.md` | Provides the governing rules and constraints for everything downstream. |
| Intake Runtime | `modules/02_intake_runtime/` | Intake scripts, raw requirement files | Normalises incoming project context and feeds it to the Genome Engine. |
| Project Genome Engine | `modules/03_project_genome_engine/` | `project-genome.json`, candidate list | Generates a structured project “genome” (type candidates, confidence scores). |
| Reality Scan Engine | `modules/04_reality_scan_engine/` | `reality-scan.json` | Audits the workspace for prohibited artifacts (`src/`, `package.json`, …). |
| Missing Intelligence Engine | `modules/05_missing_intelligence_engine/` | `missing-intelligence.json`, `NEXT_BATCH_PLAN.md` | Detects gaps, produces an actionable next‑batch plan.

**Data flow**
```
Doctrine & Policy → Intake Runtime → Project Genome Engine → Reality Scan Engine → Missing Intelligence Engine → Next Batch Plan
```
All modules output JSON artefacts that are consumed by the next module, culminating in a **Core 5 Output** package ready for Phase 2 implementation.

---

## 4. Actual Runtime Implementation Status

### Phase 2 – Runtime Implementation Foundation
- All Core 5 modules have JavaScript runtimes.
- `run-core5-runtime-dry.js` passes (`node --check` succeeded).
- **Status file:** `PHASE2_RUNTIME_STATUS.json` = **passed**.

### Phase 2B – Core 5 Runtime Orchestrator
- `orchestrator/` directory with `orchestrator.js` and config.
- `orchestrator/runtime-report.json` generated and parseable.
- **Status file:** `PHASE2B_ORCHESTRATOR_STATUS.json` = **passed**.

### Phase 2C – Runtime CLI / Command Runner Foundation
- `cli/` with commands `status`, `verify`, `dry‑run`, `orchestrate`, `report`.
- `cli/CLI_REPORT.md` produced.
- **Status file:** `PHASE2C_CLI_STATUS.json` = **passed**.

### Phase 2D – Runtime Regression Guard / Test Harness
- `test/` with `harness.js`, `tests.json`, `utils.js`, `fixtures/broken.js`.
- `test/test-report.md` generated, all tests passed.
- **Status file:** `PHASE2D_REGRESSION_GUARD_STATUS.json` = **passed**.

### Phase 2E – Runtime Status Dashboard / Health Summary
- `dashboard/` with full UI, config, data and health‑summary markdown.
- `dashboard/health-summary.md` mirrors the overall health.
- **Status file:** `PHASE2E_DASHBOARD_STATUS.json` = **passed**.

All phases from 2 to 2E are **PASS**; Phase 2F is the next recommended step.

---

## 5. Actual Runtime Files

```
PCCOS_ROOT/
├── modules/
│   ├── 01_doctrine_policy_runtime/
│   ├── 02_intake_runtime/
│   ├── 03_project_genome_engine/
│   ├── 04_reality_scan_engine/
│   └── 05_missing_intelligence_engine/
├── orchestrator/
│   ├── orchestrator.js
│   └── runtime-report.json
├── cli/
│   ├── cli.js
│   └── CLI_REPORT.md
├── test/
│   ├── harness.js
│   ├── tests.json
│   ├── utils.js
│   └── fixtures/broken.js
├── dashboard/
│   ├── index.html
│   ├── styles.css
│   ├── dashboard.js
│   ├── dashboard-config.json
│   ├── dashboard-data.json
│   └── health-summary.md
├── PHASE2_RUNTIME_STATUS.json
├── PHASE2B_ORCHESTRATOR_STATUS.json
├── PHASE2C_CLI_STATUS.json
├── PHASE2D_REGRESSION_GUARD_STATUS.json
├── PHASE2E_DASHBOARD_STATUS.json
└── (checkpoint reports)
```

**Categories**
- **Runtime files** – JavaScript source under `orchestrator/`, `cli/`, `test/`, `dashboard/`.
- **Output artifacts** – Core 5 JSON artefacts inside `modules/`.
- **Verification artifacts** – All `PHASE2*_VERIFICATION_REPORT.md` files.
- **Dashboard files** – UI assets in `dashboard/`.
- **Test files** – Harness and fixtures under `test/`.
- **CLI files** – Command scripts and `CLI_REPORT.md`.
- **Orchestrator files** – Orchestrator script and its runtime report.

---

## 6. Plugin Runtime

**Future module** – not yet implemented.
```
Plugin Runtime
├─ Plugin Registry
├─ Plugin Loader
├─ Plugin Permission
├─ Plugin Connector
├─ Plugin Sandbox / Safety
└─ Plugin Verification
```
**Differences**
- **Skill Runtime** provides the *how* – the actual AI capabilities (e.g., code generation, summarisation).
- **Plugin Runtime** is the *what* – a thin, sandboxed adapter layer that lets external extensions hook into the system safely.
- **MCP Runtime** is the *mediator* that standardises tool invocation across the ecosystem, enforcing the same safety guarantees that Plugin Runtime will inherit.

The Plugin Runtime is listed here as an upcoming component that will be added in later phases (post‑2F).

---

## 7. Phase 2F – Runtime Release Snapshot / Export Readiness

**Next recommended phase** – preparing a full, portable snapshot of the current state.

**Suggested artefacts**
- `RELEASE_MANIFEST.json`
- `RELEASE_NOTES.md`
- `EXPORT_READINESS_REPORT.md`
- `SNAPSHOT_INDEX.json`
- `SNAPSHOT_HEALTH_CHECK.json`

**Purpose**
- Create a reproducible archive (`zip`) of all verification artefacts, dashboards, CLI, test harness, and orchestrator.
- Verify that the snapshot can be imported into a fresh workspace and all phases (2‑E) run without modification.
- No source app is created at this stage; the snapshot remains a *pure data* package.

---

## 8. Production Cycle Current Flow

```
Input
→ Doctrine & Policy Runtime
→ Intake Runtime
→ Project Genome Engine
→ Reality Scan Engine
→ Missing Intelligence Engine
→ Core 5 Output Artifacts
→ Runtime Implementation Foundation (Phase 2)
→ Orchestrator
→ CLI
→ Regression Guard (Test Harness)
→ Dashboard
→ Release Snapshot (Phase 2F – next)
→ Next Production Cycle
```

Each arrow represents a **data hand‑off** that is documented in the respective module’s output artefacts.

---

## 9. Current Safety Invariants

- `projectName = Context Foundation - 05ALL12`
- `projectTypeMode = candidate-only`
- `finalProjectType = pending-analysis`
- **Do not lock** the Project Type.
- **No source application** (no `src/`).
- **No `package.json`, `build/`, `dist/`** directories.
- **No Git‑write operations** (add, commit, branch‑delete, etc.).
- All operations must respect the **write‑policy** defined for each phase (only allowed files may be written).

---

## 10. What This File Is / Is Not

**This file is**
- The **authoritative master‑structure** for the current PCCOS incarnation (up to Phase 2E).
- A **combined view** of the conceptual hierarchy and the concrete runtime implementation status.
- A **reference map** for any AI‑assisted development or analysis tools.

**This file is NOT**
- A source application or executable program.
- A `package.json` or any Node‑module manifest.
- A final, locked project type – the project remains in **pending‑analysis**.
- A replacement for the detailed verification reports (those remain separate checkpoint files).

---

*All constraints have been respected: no new source code, no `src/`, `package.json`, `build/`, `dist/`, no Git commits, and the project type remains unlocked.*
