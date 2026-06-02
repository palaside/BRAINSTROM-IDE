# Missing Intelligence Engine Flow

## Input Stage

อ่านข้อมูลจาก:

- REALITY_SCAN.md
- reality-scan.json
- project-genome.json
- project-type-candidates.md
- PROJECT_STANDARD.md

## Processing Stage

ทำงานตาม function:

1. classify_missing_items
1. map_missing_to_capabilities
1. assign_priority
1. propose_next_batch
1. emit_missing_intelligence

## Output Stage

สร้างไฟล์:

- MISSING_INTELLIGENCE.md
- missing-intelligence.json
- NEXT_BATCH_PLAN.md

## ส่งต่อไปยัง

Scope Lock Engine / Next Batch Plan
