# Reality Scan Engine

Code: CORE5-04

## บทบาท

ตรวจสถานะจริงของไฟล์และ runtime

## หน้าที่

ตรวจว่าไฟล์มีจริงไหม ว่างไหม manifest ตรงกับ disk ไหม มีไฟล์สำคัญครบไหม และพร้อมรันแค่ไหน

## Inputs

- file tree
- arena-project.json
- package.json
- PROJECT_GENOME.md
- project-genome.json

## Outputs

- REALITY_SCAN.md
- reality-scan.json
- file-health-report.json

## Functions

- scan_file_tree
- compare_manifest_to_disk
- detect_empty_or_placeholder_files
- detect_runtime_readiness
- emit_reality_scan

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
