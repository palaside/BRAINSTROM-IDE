# Intake Runtime Flow

## Input Stage

อ่านข้อมูลจาก:

- README.md
- context.md
- agent.md
- arena-project.json
- package.json
- raw-chat.txt
- prompt.md
- folder tree

## Processing Stage

ทำงานตาม function:

1. detect_source_type
1. extract_project_signals
1. classify_content_units
1. build_source_map
1. emit_intake_report

## Output Stage

สร้างไฟล์:

- INTAKE_REPORT.md
- classified-input.json
- source-map.json
- raw-input-index.json

## ส่งต่อไปยัง

Project Genome Engine
