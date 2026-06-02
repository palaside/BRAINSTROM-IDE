# Project Genome Engine

Code: CORE5-03

## บทบาท

สร้าง DNA ของโปรเจกต์

## หน้าที่

สรุปชื่อ ประเภท candidate, stack, readiness, risk, next action และตัวตนของโปรเจกต์จากข้อมูลที่ Intake ส่งมา

## Inputs

- classified-input.json
- source-map.json
- README.md
- context.md
- package.json
- arena-project.json

## Outputs

- PROJECT_GENOME.md
- project-genome.json
- project-type-analysis.md

## Functions

- infer_project_identity
- infer_stack_signals
- score_project_type_candidates
- summarize_readiness
- recommend_next_action

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
