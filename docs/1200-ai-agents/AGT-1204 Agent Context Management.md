*# AGT-1204*



*# Agent Context Management*



*---*



*# Metadata*



*| Field | Value |*

*|--------|-------|*

*| Document ID | AGT-1204 |*

*| Domain | AI Agents |*

*| Title | Agent Context Management |*

*| Project | Francisco Sánchez Portfolio |*

*| Document Type | AI Multi-Agent Context Standard |*

*| Status | Approved |*

*| Version | 1.0.0 |*

*| Owner | Francisco Javier Sánchez Mariscal |*

*| Role | Software Engineer |*

*| Approver | Project Owner |*

*| Last Updated | YYYY-MM-DD |*



*---*



*# 1. Purpose*



*This document defines the standardized framework governing how AI Agents acquire, validate, maintain, update, and discard engineering context throughout their execution lifecycle.*



*Effective context management ensures that every AI Agent operates with the minimum sufficient, accurate, and up-to-date information required to produce deterministic engineering outcomes.*



*Context is considered an engineering asset.*



*---*



*# 2. Objectives*



*Agent Context Management aims to:*



*- Ensure contextual accuracy.*

*- Reduce hallucinations.*

*- Eliminate unnecessary information.*

*- Improve engineering consistency.*

*- Increase execution determinism.*

*- Support scalable collaboration.*

*- Preserve traceability.*

*- Optimize context efficiency.*



*---*



*# 3. Context Philosophy*



*Engineering quality depends on context quality.*



*An AI Agent shall never assume knowledge.*



*Every engineering decision shall originate from validated context.*



*Context shall be:*



*- Relevant.*

*- Current.*

*- Traceable.*

*- Verifiable.*

*- Sufficient.*

*- Minimal.*



*More context is not necessarily better context.*



*---*



*# 4. Context Categories*



*Every context element shall belong to one of the following categories.*



*## Governance Context*



*Project policies.*



*Examples:*



*- GOV documents*

*- Standards*

*- Policies*



*---*



*## Architectural Context*



*System architecture.*



*Examples:*



*- ARC documents*

*- ADRs*

*- Architecture diagrams*



*---*



*## Product Context*



*Business objectives.*



*Examples:*



*- PRD*

*- Personas*

*- Requirements*



*---*



*## Technical Context*



*Engineering implementation.*



*Examples:*



*- Source code*

*- APIs*

*- Components*

*- Data models*



*---*



*## Operational Context*



*Execution environment.*



*Examples:*



*- Deployment*

*- Infrastructure*

*- Monitoring*



*---*



*## Historical Context*



*Past engineering decisions.*



*Examples:*



*- ADRs*

*- Changelogs*

*- Reviews*

*- Revision History*



*---*



*# 5. Context Lifecycle*



*Context shall progress through the following stages.*



*1. Discovery*

*2. Acquisition*

*3. Validation*

*4. Classification*

*5. Usage*

*6. Update*

*7. Archival*

*8. Disposal*



*Every context element follows this lifecycle.*



*---*



*# 6. Context Discovery*



*Before execution, every AI Agent shall determine:*



*- Which information is required.*

*- Which documents are relevant.*

*- Which repository artifacts apply.*

*- Which engineering constraints exist.*



*Context discovery precedes acquisition.*



*---*



*# 7. Context Acquisition*



*Context may originate from:*



*- Repository documentation.*

*- Source code.*

*- Engineering standards.*

*- AI Governance.*

*- Cursor Rules.*

*- Other AI Agents.*

*- User instructions.*



*Unverified external context shall not be treated as authoritative.*



*---*



*# 8. Context Validation*



*Every acquired context shall be validated for:*



*- Accuracy.*

*- Completeness.*

*- Relevance.*

*- Freshness.*

*- Consistency.*

*- Traceability.*



*Invalid context shall be rejected.*



*---*



*# 9. Context Classification*



*Every context element shall define:*



*- Source.*

*- Domain.*

*- Priority.*

*- Scope.*

*- Lifetime.*

*- Owner.*

*- Validation status.*



*Classification enables efficient retrieval.*



*---*



*# 10. Context Prioritization*



*When multiple context sources exist, priority shall be:*



*1. Explicit user instructions.*

*2. Approved Governance documents.*

*3. AI Governance.*

*4. Cursor Rules.*

*5. Architecture.*

*6. Product documentation.*

*7. Development documentation.*

*8. Historical information.*

*9. External references.*



*Higher-priority context overrides lower-priority context when conflicts arise.*



*---*



*# 11. Context Usage*



*AI Agents shall consume only the context required to complete the assigned responsibility.*



*Unused context shall not influence engineering decisions.*



*Context shall remain bounded by the agent's scope.*



*---*



*# 12. Context Synchronization*



*Context shall remain synchronized with:*



*- Documentation.*

*- Repository state.*

*- Architecture.*

*- Engineering standards.*

*- Development workflows.*



*Outdated context shall not be reused.*



*---*



*# 13. Context Expiration*



*Context becomes obsolete when:*



*- Documentation changes.*

*- Architecture evolves.*

*- Requirements change.*

*- Repository structure changes.*

*- Governance supersedes previous decisions.*



*Expired context shall be invalidated before future execution.*



*---*



*# 14. Context Traceability*



*Every engineering decision shall be traceable to its originating context.*



*Traceability shall include:*



*- Source document.*

*- Version.*

*- Decision date.*

*- Related artifacts.*

*- Responsible agent.*



*Engineering knowledge shall remain explainable.*



*---*



*# 15. Context Security*



*Agents shall preserve:*



*- Context integrity.*

*- Confidentiality.*

*- Repository ownership.*

*- Governance compliance.*

*- Traceability.*



*Unauthorized context manipulation is prohibited.*



*---*



*# 16. AI Operational Contract*



*## Responsibilities*



*Every AI Agent shall:*



*- Acquire required context.*

*- Validate context quality.*

*- Discard obsolete information.*

*- Preserve traceability.*

*- Synchronize context continuously.*



*---*



*## Authorized Actions*



*Agents may:*



*- Request additional context.*

*- Reject insufficient context.*

*- Recommend context updates.*

*- Synchronize documentation.*

*- Classify engineering knowledge.*



*---*



*## Restricted Actions*



*Agents shall not:*



*- Assume undocumented knowledge.*

*- Use obsolete context.*

*- Ignore governance hierarchy.*

*- Retain unnecessary context.*

*- Make decisions without validated information.*



*---*



*## Success Criteria*



*Context Management is successful when:*



*- Context is complete.*

*- Context is relevant.*

*- Context remains current.*

*- Engineering decisions are traceable.*

*- Repository consistency is preserved.*



*---*



*## Failure Conditions*



*Context Management fails when:*



*- Context becomes outdated.*

*- Information conflicts remain unresolved.*

*- Decisions lack traceability.*

*- Invalid context influences execution.*

*- Engineering consistency deteriorates.*



*---*



*## Escalation*



*Context conflicts affecting engineering decisions shall be escalated to the Project Owner before execution continues.*



*---*



*# 17. Governance*



*Agent Context Management is mandatory for every AI Agent operating within the engineering ecosystem.*



*Future context acquisition mechanisms, memory systems, retrieval strategies, and orchestration frameworks shall remain compatible with the principles established herein.*



*---*



*# References*



*- GOV-0000 Portfolio Engineering Standard*

*- AIG-1004 AI Context Management*

*- AIG-1005 AI Memory Strategy*

*- CUR-1102 Documentation Loading Rules*

*- CUR-1103 Context Acquisition Rules*

*- CUR-1106 Documentation Synchronization Rules*

*- AGT-1200 AI Agents Foundation*

*- AGT-1203 Agent Communication Protocol*



*---*



*# Related Documents*



*## Previous*



*- AGT-1203 Agent Communication Protocol*



*## Next*



*- AGT-1205 Agent Memory Model*



*## Related*



*- All AI Agents*

*- AI Governance*

*- Cursor Rules*

*- Engineering Documentation*



*---*



*# Revision History*



*| Version | Date | Author | Description |*

*|----------|------|--------|-------------|*

*| 1.0.0 | YYYY-MM-DD | Francisco Javier Sánchez Mariscal | Initial version defining the standardized context management framework for AI Agents. |*



*---*



*# Approval*



*This document becomes effective immediately upon approval by the Project Owner.*



*Every AI Agent shall acquire, validate, manage, synchronize, and retire engineering context according to the principles defined herein.*



*Future revisions shall follow Semantic Versioning principles and shall be documented in the Revision History section.*

