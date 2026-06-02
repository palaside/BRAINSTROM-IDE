# Reality Scan Engine Flow

## Input Stage

อ่านข้อมูลจาก:

- file tree
- arena-project.json
- package.json
- PROJECT_GENOME.md
- project-genome.json

## Processing Stage

ทำงานตาม function:

1. scan_file_tree
1. compare_manifest_to_disk
1. detect_empty_or_placeholder_files
1. detect_runtime_readiness
1. emit_reality_scan

## Output Stage

สร้างไฟล์:

- REALITY_SCAN.md
- reality-scan.json
- file-health-report.json

## ส่งต่อไปยัง

Missing Intelligence Engine
