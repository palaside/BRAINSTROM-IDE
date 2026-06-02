# Missing Intelligence Engine

Code: CORE5-05

## บทบาท

จัดลำดับสิ่งที่ขาดและแผนเติมงาน

## หน้าที่

แปลง missing files / missing capabilities ให้เป็น backlog ตาม priority เช่น P0 blocker, P1 core, P2 quality, P3 production, P4 future

## Inputs

- REALITY_SCAN.md
- reality-scan.json
- project-genome.json
- project-type-candidates.md
- PROJECT_STANDARD.md

## Outputs

- MISSING_INTELLIGENCE.md
- missing-intelligence.json
- NEXT_BATCH_PLAN.md

## Functions

- classify_missing_items
- map_missing_to_capabilities
- assign_priority
- propose_next_batch
- emit_missing_intelligence

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
