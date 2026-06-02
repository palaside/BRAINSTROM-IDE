# PCCOS_DESIGN_TOKENS_v1

## Base Theme

Preset: Vega

Purpose:

กำหนด Design DNA ของ PCCOS Body ให้มีเอกลักษณ์เฉพาะ ไม่ใช่ Vega ดิบจาก shadcn/ui

Direction:

Startup Sharpness + Developer Command Center + Purple Accent

---

## Core Design Principles

PCCOS UI ต้องยึดหลัก:

* Information First
* Tool First
* Dense but Readable
* Functional Beauty
* Fast and Sharp
* Calm but Powerful
* Professional
* Consistent

---

## Color Direction

Primary Accent:

Purple

Color Mood:

* Dark-first
* Neutral background
* High contrast text
* Purple accent for important actions
* Green for running / success
* Yellow for warning
* Red for critical
* Blue for waiting / information

Color Rule:

สีต้องช่วยให้เข้าใจสถานะของระบบ ไม่ใช่ใช้เพื่อความสวยอย่างเดียว

---

## Typography

Primary Font:

Inter

Technical Font:

JetBrains Mono

Rules:

* เนื้อหาทั่วไปใช้ Inter
* ข้อมูลเชิงเทคนิคใช้ JetBrains Mono
* หลีกเลี่ยงการใช้หลายฟอนต์เกินความจำเป็น
* ความสำคัญของข้อมูลต้องมาจาก Hierarchy ไม่ใช่ขนาดตัวอักษรที่ใหญ่เกินไป

---

## Layout Philosophy

Dashboard First

ทุกหน้าต้องสามารถกลับมาที่ Dashboard ได้ภายใน 1 Click

Sidebar First

การนำทางหลักอยู่ที่ Sidebar

Content Second

เนื้อหาหลักอยู่ตรงกลาง

Utility Third

การตั้งค่าและเครื่องมือรองอยู่ด้านข้าง

---

## Component Style

Cards

* Compact
* Readable
* Information Dense
* ไม่ใช้พื้นที่เกินจำเป็น

Buttons

* ชัดเจน
* ขนาดพอดี
* ไม่ตกแต่งเกินความจำเป็น

Tables

* รองรับข้อมูลจำนวนมาก
* อ่านง่าย
* เรียงลำดับได้

Badges

* ใช้บอกสถานะเท่านั้น
* ห้ามใช้ตกแต่ง

Dialogs

* เปิดเฉพาะเมื่อจำเป็น
* ไม่ใช้ Popup รัวๆ

---

## Runtime Status Colors

Running

Green

Warning

Yellow

Error

Red

Info

Blue

Disabled

Gray

---

## Sidebar Rules

Sidebar คือศูนย์กลางของ PCCOS

เมนูหลัก:

* Dashboard
* Projects
* Memory
* Knowledge
* Skills
* Packs
* Runtime
* Audit
* Settings

ห้ามเกิน 10 เมนูหลัก

---

## Dashboard Rules

Dashboard ต้องตอบคำถามได้ทันทีว่า:

* ระบบทำงานหรือไม่
* Runtime อยู่สถานะใด
* Skill ใดเปิดใช้งาน
* Pack ใดพร้อมใช้งาน
* Agent ใดกำลังทำงาน
* มี Warning หรือไม่

ภายใน 5 วินาทีแรก

---

## Motion Rules

อนุญาต:

* Hover
* Fade
* Slide
* Expand

ห้าม:

* Animation รัว
* Motion ที่ไม่ช่วย UX
* Loading Effect ที่ยาวเกินจำเป็น

---

## Accessibility Rules

* Keyboard Friendly
* High Contrast
* Responsive
* รองรับ Dark Mode

---

## Anti Patterns

ห้าม:

* Card ล้นจอ
* Hero Section ใหญ่เกินไป
* Gradient มั่ว
* Glassmorphism มั่ว
* Dashboard ยัดข้อมูล
* Animation เยอะเกินไป
* UI ที่ดูเหมือน Template AI ทั่วไป

---

## PCCOS Identity

PCCOS ไม่ใช่ Marketing Website

PCCOS ไม่ใช่ Landing Page

PCCOS คือ

* Command Center
* Runtime Console
* Knowledge Operating System
* Personal Cognitive Civilization

---

## Verification Checklist

ทุกหน้าต้องผ่าน:

* Information First
* Tool First
* Readability
* Consistency
* Runtime Visibility
* Responsive
* Accessibility
* PCCOS Design Compliance

หากไม่ผ่านข้อใดข้อหนึ่ง ต้องแก้ก่อน Merge
