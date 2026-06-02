# Doctrine & Policy Runtime

Code: CORE5-01

## บทบาท

กฎแม่ของระบบและนโยบายความปลอดภัย

## หน้าที่

กำหนดหลักคิด กติกา ข้อห้าม และลำดับการทำงานของ AI ก่อนเข้าสู่การอ่าน วิเคราะห์ หรือแก้ไฟล์

## Inputs

- USER.md
- AGENTS.md
- START_HERE_TH.md
- context.md
- agent.md

## Outputs

- DOCTRINE_REPORT.md
- policy-runtime.json
- approval-rules.json

## Functions

- load_core_rules
- resolve_policy_conflicts
- classify_risk_policy
- produce_runtime_guardrails

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
