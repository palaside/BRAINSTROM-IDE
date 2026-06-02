# Doctrine & Policy Runtime Flow

## Input Stage

อ่านข้อมูลจาก:

- USER.md
- AGENTS.md
- START_HERE_TH.md
- context.md
- agent.md

## Processing Stage

ทำงานตาม function:

1. load_core_rules
1. resolve_policy_conflicts
1. classify_risk_policy
1. produce_runtime_guardrails

## Output Stage

สร้างไฟล์:

- DOCTRINE_REPORT.md
- policy-runtime.json
- approval-rules.json

## ส่งต่อไปยัง

Intake Runtime
