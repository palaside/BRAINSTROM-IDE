# Intake Runtime

Code: CORE5-02

## บทบาท

ด่านรับและจำแนกข้อมูลเข้า

## หน้าที่

รับ README.md, arena-project.json, ZIP, Folder, Raw Chat, Prompt แล้วแยกเป็น idea, requirement, decision, code, evidence

## Inputs

- README.md
- context.md
- agent.md
- arena-project.json
- package.json
- raw-chat.txt
- prompt.md
- folder tree

## Outputs

- INTAKE_REPORT.md
- classified-input.json
- source-map.json
- raw-input-index.json

## Functions

- detect_source_type
- extract_project_signals
- classify_content_units
- build_source_map
- emit_intake_report

## ทำงานเมื่อไหร่

โมดูลนี้ทำงานใน Core 5 Analysis Flow ก่อนเข้าสู่ Scope Lock หรือ Implementation

## Risk

- ข้อมูล input ไม่ครบ
- วิเคราะห์ผิดเพราะ source ปนหลายโปรเจกต์
- ใช้ข้อมูลจาก README โดยไม่ตรวจไฟล์จริง
- สรุปเร็วเกินไปก่อนครบ flow

## Verification

- ตรวจว่า input มีครบตามขั้นต่ำ
- ตรวจว่า output JSON parse ได้
- ตรวจว่า output markdown อธิบายผลชัดเจน
- ตรวจว่า next module ใช้ output ต่อได้
