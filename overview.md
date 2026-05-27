# ABAP Conf 2026 — Presentation Overview (DRAFT)

## Context
- **Presenter**: PM for SAP integration at Microsoft, former ABAP developer
- **Repo**: `github.com/hobru/zmcpabap` (private)
- **Goal**: Working prototype as blueprint for production-ready MCP Server on ABAP

---

## The Journey

### 1. Hard-coded Flows
- Copilot Studio ↔ SAP integration, single dedicated scenario
- Worked well, excited many customers, several real implementations
- [Blog: SAP + Teams Integration with Copilot Studio](https://techcommunity.microsoft.com/blog/sapapplications/sap--teams-integration-with-copilot-studio-and-generative-ai/4213260)

### 2. GPT-powered OData
- GPT could generate OData payloads dynamically
- Later: find the right OData service AND select correct entity set
- Much more flexible than hard-coded flows
- [YouTube: Demo](https://www.youtube.com/watch?v=zt62mhPr_k0)
- Prior to this: used SAP OData Connector — [YouTube playlist](https://www.youtube.com/watch?v=mez5qIZmrfM&list=PLvqyDwoCkBXYHECuHw2pKN2DrWjyn3q5f)

### 3. MCP + OData Bridge
- MCP simplified integration further
- Alice created the OData-to-MCP Bridge: [odata_mcp_go](https://github.com/oisee/odata_mcp_go)
- Could now connect to OData services via MCP

### 4. VSP — The Game-changer
- Alice also developed VSP: [Vibing Steampunk](https://github.com/oisee/vibing-steampunk)
- When customers wanted a specific scenario but no matching OData service existed → use GitHub Copilot to generate the OData service via VSP → connect via MCP Bridge to Copilot Studio
- It worked!

### 5. Azure APIM
- MCP Bridge was great but needed enterprise readiness
- Azure API Management team created a similar concept to expose MCP Servers from existing APIs
- Aligned with Alice on this approach
- Worked even better

### 6. MCP in ABAP — The Idea
- Not everything has an OData service
- Inspired by VSP → started thinking about native MCP in ABAP
- Wrote one-pagers, then specs for engineering — but they were busy
- Ideas didn't land well on paper alone

### 7. First Prototype with VSP
- Started developing with VS Code + VSP
- Got a first working prototype, but it was clumsy

### 8. Squad + Copilot CLI + Claude
- Discovered [Squad](https://github.com/bradygaster/squad) — "what about having my own team?"
- Switched to GitHub Copilot CLI + Squad
- Put all specs and one-pagers in the repo as input
- Added team members for security and ABAP development
- Let Claude run (switched from GPT to Claude)
- Took a long time — but results were really good

### 9. Marian's MCP Servers
- Added Marian's MCP servers over the following days
- Results improved even further

### 10. Local Dev with abapGit
- Lars suggested developing outside the SAP system
- abapGit replicated everything locally
- Could develop and understand code locally, publish to SAP in intervals

### 11. Sharing & Feedback Loop
- Shared project with colleagues — always highlighting: vibe-coded, not enterprise-ready
- Got feedback, bugs, feature requests
- Addressed them using Squad + Claude

---

## What the Repo Shows

The `zmcpabap` repo contains ~90 files with surprisingly mature architecture for a vibe-coded project:

- **Proper interfaces** (`zif_mcp_*`) — clean separation of concerns
- **Tool Wizard** (`zmcp_tool_wizard`) — guided BAPI registration
- **Tool Cockpit** (`zmcp_tool_cockpit`) — admin/management UI
- **Three wrapper types**: FM/BAPI, OData, Table
- **Security layer**: auth checker, auth provider interface, authorization object (`zmcp_srv`), CORS origins
- **Audit logging** (`zcl_mcp_audit`)
- **Test classes** for 6 key components
- **Custom exception class** (`zcx_mcp_error`)
- **ajson** open-source dependency reuse
- **Setup/demo tooling**: ICF setup program, demo data loader, description updater
- All commits on a single day → confirms local dev + bulk abapGit push

---

## Architecture

```
Copilot Studio → Azure APIM (auth/gateway) → ABAP MCP Server (tools/logic)
```

- APIM handles authentication and enterprise gateway concerns
- ABAP MCP Server focuses on functionality
- Separation of concerns: ABAP does MCP, APIM does auth/security

---

## Key Insights

### Iterative Spec ↔ Code Loop
The true game changer: not writing a pure spec, but iterating — write something → see results → identify issues → enhance spec → create next version. Spec and code co-evolve.

### Domain Knowledge + AI
Past ABAP experience (not an active developer anymore) was sufficient to guide Claude. You don't need to write the code — you need to understand and steer it.

### One-person Agile
AI enables solo agile sprints. No coordination overhead. Rapid iteration cycles that previously required a full team.

### Model Evolution
Progressively upgraded: GPT → Claude Opus 4.5 → 4.6 → 4.7. Also used GPT 5.5 as an external review agent — multi-model strategy (one builds, another reviews).

### Vibe-coding ≠ Bad Architecture
Claude produced proper separation of concerns, interfaces, test classes, and error handling — structured output despite unstructured process.

### How I Became an ABAP Developer Again
By coding with the correct guard rails you can dramatically increase your production. AI + domain knowledge + proper tooling made it possible to be productive in ABAP again — without being a daily practitioner.

---

## What's Next

### ARC-1 MCP Server
- From Marian and team — very interesting
- Open question: impact of new API Policy

### SAP Official MCP Server
- Announced at Sapphire — works with VS Code and Eclipse
- Not tested in detail yet, but promising

### Microsoft SAP Development
- Microsoft is a large SAP customer with years of SAP development
- Already modernized: Azure DevOps, consolidated tools, streamlined release process
- Constantly improving the development process — AI-assisted development is the next evolution

---

## Goal
Have more than a spec — a **working prototype** so that someone can take a look and turn this vibe-coded project into a real, production-ready solution.
