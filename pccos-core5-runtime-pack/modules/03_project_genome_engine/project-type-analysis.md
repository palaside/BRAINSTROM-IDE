# Project Type Analysis

Based on the **Project Genome** and the intake classification, the following six candidate project types have been evaluated:

| Candidate Type | Confidence | Rationale |
|---|---|---|
| **Web Application** | 0.35 | The presence of UI‑related documentation (e.g., design guidelines) and discussion of front‑end frameworks suggests a web‑centric product. |
| **Command‑Line Tool** | 0.20 | Several context files reference automation scripts and tooling, indicating a possible CLI utility. |
| **Library / SDK** | 0.15 | The mention of reusable components and API definitions points toward a library that could be consumed by other projects. |
| **Data Pipeline** | 0.12 | References to data ingestion and processing workflows imply a pipeline‑style architecture. |
| **Machine‑Learning Model** | 0.10 | Some files discuss model training and evaluation, hinting at an ML component. |
| **Service / API** | 0.08 | Minimal but present references to service endpoints suggest a backend API service. |

**Decision**: No final project type is locked. The `projectTypeMode` remains **candidate‑only** and `finalProjectType` is **pending‑analysis**. The user must review these candidates and approve the final type before proceeding to implementation phases.
