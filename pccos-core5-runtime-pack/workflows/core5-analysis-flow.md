# Core 5 Analysis Flow

## เป้าหมาย

วิเคราะห์ Context Foundation - 05ALL12 ให้ครบก่อนเริ่ม Scope Lock หรือ Implementation

## ลำดับการทำงาน

```text
1. Doctrine & Policy Runtime
   → โหลดกฎแม่ / policy / safety / approval rules

2. Intake Runtime
   → อ่านและจำแนก README, context, manifest, raw chat, prompt, file tree

3. Project Genome Engine
   → สร้าง DNA ของโปรเจกต์ เช่น projectName, candidates, stack, readiness, risk

4. Reality Scan Engine
   → ตรวจไฟล์จริง เทียบ manifest และตรวจความพร้อม

5. Missing Intelligence Engine
   → จัดลำดับสิ่งที่ขาด และเสนอ NEXT_BATCH_PLAN
```

## กฎสำคัญ

- ห้ามล็อก Project Type ก่อน Reality Scan
- ห้ามเริ่มแก้ไฟล์ก่อน Missing Intelligence สรุป
- ถ้า confidence ต่ำ ต้องถามผู้ใช้
- ถ้างานเสี่ยงสูง ต้องเข้าสู่ Human Approval
- Output สุดท้ายของ flow นี้คือ `NEXT_BATCH_PLAN.md`
