*# TMP-1407*



*# AI Agent Template*



*---*



*# Metadata*



*| Field | Value |*

*|--------|-------|*

*| Document ID | TMP-1407 |*

*| Domain | Templates |*

*| Title | AI Agent Template |*

*| Project | Francisco Sánchez Portfolio |*

*| Document Type | AI Agent Engineering Template |*

*| Status | Approved |*

*| Version | 1.0.0 |*

*| Owner | Francisco Javier Sánchez Mariscal |*

*| Role | Software Engineer |*

*| Approver | Project Owner |*

*| Last Updated | YYYY-MM-DD |*



*---*



*# 1. Purpose*



*This document defines the official AI Agent Template used throughout the Francisco Sánchez Portfolio AI-First engineering ecosystem.*



*The template standardizes the specification, governance, behavior, lifecycle, responsibilities, and operational contracts of every AI Agent operating within the ecosystem.*



*Every production AI Agent shall be documented using this template before operational deployment.*



*---*



*# 2. Objectives*



*The AI Agent Template aims to:*



*- Standardize AI Agent design.*

*- Improve agent consistency.*

*- Enable predictable behavior.*

*- Preserve governance.*

*- Improve collaboration.*

*- Support scalability.*

*- Facilitate maintenance.*

*- Enable multi-agent orchestration.*



*---*



*# 3. AI Agent Philosophy*



*An AI Agent is an autonomous engineering component.*



*Like any software component, every AI Agent requires:*



*- Defined responsibilities.*

*- Explicit boundaries.*

*- Version control.*

*- Documentation.*

*- Validation.*

*- Governance.*



*Agents shall never rely on undocumented behavior.*



*---*



*# 4. When to Create an AI Agent*



*An AI Agent shall be created whenever:*



*- A recurring engineering activity can be automated.*

*- Specialized expertise is required.*

*- Long-term AI collaboration is expected.*

*- Workflow orchestration is necessary.*

*- Multi-agent collaboration provides measurable value.*



*Simple one-time prompts do not justify creating an AI Agent.*



*---*



*# 5. Standard Structure*



*Every AI Agent specification shall include:*



*```*

*Metadata*

*Mission*

*Objectives*

*Scope*

*Responsibilities*

*Capabilities*

*Inputs*

*Outputs*

*Dependencies*

*Operational Workflow*

*Decision Rules*

*Memory Strategy*

*Context Strategy*

*Collaboration Rules*

*Constraints*

*Quality Gates*

*Failure Handling*

*Lifecycle*

*Performance Metrics*

*AI Operational Contract*

*References*

*Revision History*

*Approval*

*```*



*---*



*# 6. Metadata*



*Minimum metadata shall include:*



*| Field | Description |*

*|--------|-------------|*

*| Agent ID | Unique identifier |*

*| Agent Name | Official name |*

*| Category | Engineering domain |*

*| Version | Semantic Version |*

*| Status | Draft / Approved / Deprecated |*

*| Owner | Responsible engineer |*

*| Supported Models | Compatible AI platforms |*



*Metadata ensures governance and traceability.*



*---*



*# 7. Mission*



*Describe the primary purpose of the Agent.*



*The mission shall answer:*



*Why does this Agent exist?*



*The mission shall remain stable across versions whenever possible.*



*---*



*# 8. Objectives*



*Describe measurable engineering goals.*



*Objectives should include:*



*- Operational outcomes.*

*- Engineering value.*

*- Business value.*

*- Collaboration goals.*



*Objectives shall be measurable whenever possible.*



*---*



*# 9. Scope*



*Clearly define:*



*Included responsibilities.*



*Excluded responsibilities.*



*System boundaries.*



*Supported workflows.*



*Interaction limits.*



*Scope prevents responsibility overlap.*



*---*



*# 10. Responsibilities*



*Describe everything the Agent is expected to perform.*



*Responsibilities should be explicit.*



*Each responsibility shall be independently understandable.*



*---*



*# 11. Capabilities*



*Document what the Agent is capable of doing.*



*Examples include:*



*- Code generation.*

*- Documentation.*

*- Reviews.*

*- Testing.*

*- Architecture analysis.*

*- Repository navigation.*

*- Prompt generation.*

*- Workflow orchestration.*



*Capabilities shall remain technology independent whenever possible.*



*---*



*# 12. Inputs*



*Specify accepted inputs.*



*Examples:*



*- Markdown.*

*- Source code.*

*- JSON.*

*- ADRs.*

*- Feature Specifications.*

*- Issues.*

*- Pull Requests.*

*- User instructions.*



*Input expectations shall remain explicit.*



*---*



*# 13. Outputs*



*Document expected deliverables.*



*Examples:*



*- Documentation.*

*- Source code.*

*- Reports.*

*- Reviews.*

*- Architecture recommendations.*

*- Checklists.*

*- Validation summaries.*



*Outputs shall remain deterministic.*



*---*



*# 14. Dependencies*



*Describe dependencies including:*



*- Other AI Agents.*

*- Documentation.*

*- Engineering Standards.*

*- External APIs.*

*- Repository structure.*

*- Tooling.*



*Dependencies shall remain explicit.*



*---*



*# 15. Operational Workflow*



*Describe the Agent execution sequence.*



*Typical workflow:*



*1. Acquire context.*

*2. Validate inputs.*

*3. Analyze requirements.*

*4. Execute responsibilities.*

*5. Validate outputs.*

*6. Produce final deliverable.*



*Operational behavior shall remain predictable.*



*---*



*# 16. Decision Rules*



*Document how the Agent prioritizes decisions.*



*Examples include:*



*- Governance before speed.*

*- Security before convenience.*

*- Architecture before implementation.*

*- Documentation before automation.*



*Decision rules shall resolve ambiguity.*



*---*



*# 17. Memory Strategy*



*Describe:*



*- Persistent memory.*

*- Session memory.*

*- Context retention.*

*- Knowledge reuse.*

*- Long-term references.*



*Memory behavior shall remain documented.*



*---*



*# 18. Context Strategy*



*Specify:*



*- Required documentation.*

*- Context acquisition order.*

*- Context validation.*

*- Missing context behavior.*

*- Context refresh policy.*



*The Agent shall never assume undocumented context.*



*---*



*# 19. Collaboration Rules*



*Describe interactions with:*



*- Human engineers.*

*- Other AI Agents.*

*- Repository automation.*

*- CI/CD systems.*



*Collaboration boundaries shall remain explicit.*



*---*



*# 20. Constraints*



*Document operational limitations.*



*Examples:*



*- Protected branches.*

*- Security restrictions.*

*- Approval requirements.*

*- Repository permissions.*

*- Scope limitations.*



*Constraints override autonomous behavior.*



*---*



*# 21. Quality Gates*



*Every Agent shall validate:*



*- Governance compliance.*

*- Documentation consistency.*

*- Architectural alignment.*

*- Requirement completeness.*

*- Output quality.*



*Outputs shall satisfy all Quality Gates before completion.*



*---*



*# 22. Failure Handling*



*Describe behavior when execution fails.*



*Examples:*



*- Missing documentation.*

*- Invalid inputs.*

*- Repository inconsistencies.*

*- Unsupported technologies.*

*- Ambiguous requirements.*



*Failure responses shall remain deterministic.*



*---*



*# 23. Lifecycle*



*Document lifecycle stages.*



*Typical stages include:*



*Draft*



*Approved*



*Operational*



*Maintenance*



*Deprecated*



*Archived*



*Lifecycle shall follow governance policies.*



*---*



*# 24. Performance Metrics*



*Recommended metrics include:*



*- Task completion rate.*

*- Validation accuracy.*

*- Review quality.*

*- Documentation completeness.*

*- Engineering consistency.*

*- Average execution time.*

*- Human intervention frequency.*



*Metrics enable continuous improvement.*



*---*



*# 25. AI Operational Contract*



*## Responsibilities*



*Every AI Agent shall:*



*- Execute only within approved scope.*

*- Follow engineering governance.*

*- Preserve architectural consistency.*

*- Respect repository standards.*

*- Report execution limitations.*



*---*



*## Authorized Actions*



*Agents may:*



*- Generate artifacts.*

*- Review engineering assets.*

*- Recommend improvements.*

*- Validate compliance.*

*- Collaborate with approved Agents.*



*---*



*## Restricted Actions*



*Agents shall not:*



*- Operate outside documented scope.*

*- Ignore governance.*

*- Approve protected operations autonomously.*

*- Invent undocumented requirements.*

*- Modify production repositories without authorization.*



*---*



*## Success Criteria*



*The AI Agent is successful when:*



*- Responsibilities are consistently fulfilled.*

*- Outputs satisfy engineering standards.*

*- Collaboration remains predictable.*

*- Human supervision decreases without sacrificing quality.*

*- Governance compliance remains at 100%.*



*---*



*## Failure Conditions*



*The AI Agent fails when:*



*- Scope boundaries are violated.*

*- Outputs become inconsistent.*

*- Documentation is ignored.*

*- Governance is bypassed.*

*- Human intervention becomes continuously necessary due to preventable errors.*



*---*



*## Escalation*



*Critical decisions affecting production architecture, governance, security, or repository integrity shall always be escalated to the Project Owner.*



*---*



*# 26. Governance*



*The AI Agent Template governs the engineering specification of every AI Agent operating within the AI-First engineering ecosystem.*



*Every production Agent shall be documented using this template before deployment.*



*Future orchestration frameworks, autonomous systems, engineering assistants, and multi-agent platforms shall remain compatible with the principles established herein.*



*---*



*# References*



*- AIG-1000 AI Engineering Foundation*

*- AIG-1002 AI Collaboration Model*

*- AIG-1003 AI Decision Framework*

*- AIG-1004 AI Context Management*

*- AIG-1005 AI Memory Strategy*

*- AGT-1200 AI Agents Foundation*

*- AGT-1202 Agent Lifecycle*

*- AGT-1206 Agent Responsibilities Matrix*

*- AGT-1207 Agent Collaboration Workflow*

*- TMP-1400 Template Foundation*

*- TMP-1401 Document Template*

*- TMP-1406 AI Prompt Template*



*---*



*# Related Documents*



*## Previous*



*- TMP-1406 AI Prompt Template*



*## Next*



*- TMP-1408 Workflow Template*



*## Related*



*- AI Agents*

*- Prompt Engineering*

*- AI Governance*

*- Multi-Agent Systems*



*---*



*# Revision History*



*| Version | Date | Author | Description |*

*|----------|------|--------|-------------|*

*| 1.0.0 | YYYY-MM-DD | Francisco Javier Sánchez Mariscal | Initial version defining the official AI Agent Template for the AI-First engineering ecosystem. |*



*---*



*# Approval*



*This document becomes effective immediately upon approval by the Project Owner.*



*Every production AI Agent shall be specified using this AI Agent Template before deployment.*



*Future revisions shall follow Semantic Versioning principles and shall be documented in the Revision History section.*

