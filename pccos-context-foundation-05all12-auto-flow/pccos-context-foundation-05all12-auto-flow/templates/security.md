# Security Policy

Project Name: Context Foundation - 05ALL12

Included Flow:
- 05012 = Context Foundation Base
- 05112 = Project Name Resolver
- 05212 = Project Type Candidate Pack
- 05312 = Context File Selection Pack
- 05412 = Auto Detect Source Reader
- 05512 = Context Pack Manifest Builder

Final Project Type: pending-analysis

Project Type Candidates:
- website
- webapp
- spa
- electron
- python-cli
- documentation-system


## Security Rules
- ห้าม commit secret
- ห้าม hardcode token
- ห้าม delete file โดยไม่ถาม
- ห้าม destructive git
- ห้าม production deploy โดยไม่อนุมัติ
- ถ้ามี auth/database/security ต้องขออนุมัติก่อนแก้
