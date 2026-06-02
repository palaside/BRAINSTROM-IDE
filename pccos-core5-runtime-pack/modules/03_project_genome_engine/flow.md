# Project Genome Engine Flow

## Input Stage

อ่านข้อมูลจาก:

- classified-input.json
- source-map.json
- README.md
- context.md
- package.json
- arena-project.json

## Processing Stage

ทำงานตาม function:

1. infer_project_identity
1. infer_stack_signals
1. score_project_type_candidates
1. summarize_readiness
1. recommend_next_action

## Output Stage

สร้างไฟล์:

- PROJECT_GENOME.md
- project-genome.json
- project-type-analysis.md

## ส่งต่อไปยัง

Reality Scan Engine
