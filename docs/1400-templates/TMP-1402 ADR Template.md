*# TMP-1402*



*# ADR Template*



*---*



*# Metadata*



*| Field | Value |*

*|--------|-------|*

*| Document ID | TMP-1402 |*

*| Domain | Templates |*

*| Title | ADR Template |*

*| Project | Francisco Sánchez Portfolio |*

*| Document Type | Architecture Decision Record Template |*

*| Status | Approved |*

*| Version | 1.0.0 |*

*| Owner | Francisco Javier Sánchez Mariscal |*

*| Role | Software Engineer |*

*| Approver | Project Owner |*

*| Last Updated | YYYY-MM-DD |*



*---*



*# 1. Purpose*



*This document defines the official Architecture Decision Record (ADR) template used throughout the Francisco Sánchez Portfolio AI-First engineering ecosystem.*



*An ADR captures significant architectural decisions together with their context, rationale, alternatives, consequences, and long-term impact.*



*Every major architectural decision shall be documented using this template.*



*---*



*# 2. Objectives*



*The ADR Template aims to:*



*- Preserve architectural knowledge.*

*- Improve engineering traceability.*

*- Document design rationale.*

*- Reduce future uncertainty.*

*- Support onboarding.*

*- Enable AI-assisted reasoning.*

*- Improve long-term maintainability.*

*- Provide historical architectural context.*



*---*



*# 3. ADR Philosophy*



*Architecture decisions are organizational knowledge.*



*The decision itself is important.*



*The reasoning behind the decision is even more important.*



*Every ADR exists to preserve engineering context that would otherwise be lost over time.*



*---*



*# 4. When to Create an ADR*



*An ADR shall be created whenever a decision significantly affects:*



*- System architecture.*

*- Technology selection.*

*- Infrastructure.*

*- Repository organization.*

*- Development workflow.*

*- Security.*

*- AI architecture.*

*- Performance.*

*- Scalability.*

*- Maintainability.*



*Minor implementation details do not require an ADR.*



*---*



*# 5. Standard ADR Structure*



*Every ADR shall include the following sections.*



*```*

*Metadata*

*Status*

*Context*

*Problem Statement*

*Decision*

*Decision Drivers*

*Alternatives Considered*

*Consequences*

*Implementation Notes*

*Validation*

*AI Operational Impact*

*Related Decisions*

*References*

*Revision History*

*Approval*

*```*



*---*



*# 6. Metadata*



*Every ADR shall begin with standardized metadata.*



*Recommended fields:*



*| Field | Description |*

*|--------|-------------|*

*| ADR ID | Unique identifier |*

*| Title | Decision title |*

*| Status | Proposed / Accepted / Superseded / Deprecated |*

*| Date | Decision date |*

*| Owner | Decision owner |*

*| Reviewers | Review participants |*

*| Related Documents | Associated documentation |*



*Metadata ensures traceability.*



*---*



*# 7. Context*



*The Context section shall explain:*



*- Current situation.*

*- Existing constraints.*

*- Business needs.*

*- Technical environment.*

*- Assumptions.*

*- Relevant background.*



*Readers shall understand why the decision became necessary.*



*---*



*# 8. Problem Statement*



*The Problem Statement shall describe:*



*- What issue exists.*

*- Why it matters.*

*- Risks of inaction.*

*- Engineering impact.*



*Problems shall be objective and evidence-based.*



*---*



*# 9. Decision*



*The Decision section shall clearly state:*



*- What was decided.*

*- Scope.*

*- Architectural implications.*

*- Intended outcome.*



*Decisions shall avoid ambiguity.*



*---*



*# 10. Decision Drivers*



*Decision Drivers describe the factors influencing the decision.*



*Examples include:*



*- Performance.*

*- Security.*

*- Scalability.*

*- Maintainability.*

*- Simplicity.*

*- Cost.*

*- AI compatibility.*

*- Developer productivity.*



*Drivers justify the selected solution.*



*---*



*# 11. Alternatives Considered*



*Every ADR shall document reasonable alternatives.*



*Each alternative should include:*



*- Description.*

*- Advantages.*

*- Disadvantages.*

*- Reason for rejection.*



*Rejected alternatives preserve valuable engineering knowledge.*



*---*



*# 12. Consequences*



*Consequences shall describe:*



*Positive impacts.*



*Negative impacts.*



*Trade-offs.*



*Technical debt introduced.*



*Future limitations.*



*Operational considerations.*



*Every architectural decision produces consequences.*



*---*



*# 13. Implementation Notes*



*Implementation guidance may include:*



*- Migration strategy.*

*- Required milestones.*

*- Dependencies.*

*- Rollout considerations.*

*- Validation approach.*



*Implementation details shall remain concise.*



*---*



*# 14. Validation*



*Validation shall confirm:*



*- Decision objectives achieved.*

*- Architecture consistency.*

*- Governance compliance.*

*- Operational feasibility.*

*- Risk mitigation.*



*Validation closes the engineering decision loop.*



*---*



*# 15. AI Operational Impact*



*Whenever applicable, describe:*



*- AI Agent implications.*

*- Context loading changes.*

*- Prompt modifications.*

*- Workflow adjustments.*

*- Automation effects.*



*AI compatibility shall be considered.*



*---*



*# 16. Related Decisions*



*Every ADR shall identify:*



*- Previous ADRs.*

*- Superseded ADRs.*

*- Complementary decisions.*

*- Future decisions.*



*Architectural decisions form a connected knowledge graph.*



*---*



*# 17. References*



*References may include:*



*- Architecture documents.*

*- Governance standards.*

*- RFCs.*

*- Vendor documentation.*

*- Engineering research.*

*- Internal documentation.*



*Only authoritative references shall be used.*



*---*



*# 18. Template Example*



*```*

*ADR-0007*



*Title*



*Adopt Feature-Based Frontend Architecture*



*Status*



*Accepted*



*Context*



*The current folder organization no longer scales.*



*Problem*



*Component discovery has become increasingly difficult.*



*Decision*



*Adopt a feature-oriented architecture.*



*Decision Drivers*



*Scalability*

*Maintainability*

*Developer Productivity*



*Alternatives*



*Layer-based architecture*

*Domain-driven architecture*



*Consequences*



*Positive:*

*Improved scalability*



*Negative:*

*Initial migration effort*

*```*



*The example illustrates the expected level of detail.*



*---*



*# 19. AI Operational Contract*



*## Responsibilities*



*Every AI Agent shall:*



*- Recommend ADR creation when appropriate.*

*- Populate ADRs using this template.*

*- Preserve historical decisions.*

*- Respect approval workflows.*

*- Link related architectural decisions.*



*---*



*## Authorized Actions*



*Agents may:*



*- Draft ADRs.*

*- Recommend alternatives.*

*- Summarize decision context.*

*- Identify architectural risks.*

*- Suggest related ADRs.*



*---*



*## Restricted Actions*



*Agents shall not:*



*- Approve ADRs autonomously.*

*- Remove historical decisions.*

*- Rewrite accepted ADRs without version control.*

*- Ignore architectural consequences.*

*- Bypass governance approval.*



*---*



*## Success Criteria*



*The ADR Template is successful when:*



*- Architectural decisions remain traceable.*

*- Engineering rationale is preserved.*

*- Future engineers understand historical context.*

*- AI Agents reason using documented decisions.*

*- Architecture evolution becomes predictable.*



*---*



*## Failure Conditions*



*The ADR Template fails when:*



*- Decisions are undocumented.*

*- Rationale is missing.*

*- Historical context is lost.*

*- Architecture changes become inconsistent.*

*- AI Agents lack decision context.*



*---*



*## Escalation*



*Major architectural decisions shall be reviewed and approved by the Project Owner before reaching Accepted status.*



*---*



*# 20. Governance*



*The ADR Template governs the documentation of architectural decisions throughout the AI-First engineering ecosystem.*



*Every significant architectural decision shall be recorded using this template before implementation whenever reasonably possible.*



*Future AI engineering assistants, documentation generators, architecture governance platforms, and repository automation tools shall remain compatible with the principles established herein.*



*---*



*# References*



*- GOV-0000 Portfolio Engineering Standard*

*- GOV-0006 Architecture Decision Records*

*- ARC-4000 System Architecture*

*- TMP-1400 Template Foundation*

*- TMP-1401 Document Template*



*---*



*# Related Documents*



*## Previous*



*- TMP-1401 Document Template*



*## Next*



*- TMP-1403 Feature Specification Template*



*## Related*



*- Architecture Documentation*

*- Engineering Governance*

*- System Architecture*

*- Documentation Standards*



*---*



*# Revision History*



*| Version | Date | Author | Description |*

*|----------|------|--------|-------------|*

*| 1.0.0 | YYYY-MM-DD | Francisco Javier Sánchez Mariscal | Initial version defining the official Architecture Decision Record template. |*



*---*



*# Approval*



*This document becomes effective immediately upon approval by the Project Owner.*



*Every significant architectural decision shall be documented using this ADR Template.*



*Future revisions shall follow Semantic Versioning principles and shall be documented in the Revision History section.*

