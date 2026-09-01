*# CUR-1104*



*# Rule Activation Strategy*



*---*



*# Metadata*



*| Field | Value |*

*|--------|-------|*

*| Document ID | CUR-1104 |*

*| Domain | Cursor Rules |*

*| Title | Rule Activation Strategy |*

*| Project | Francisco Sánchez Portfolio |*

*| Document Type | AI Execution Standard |*

*| Status | Approved |*

*| Version | 1.0.0 |*

*| Owner | Francisco Javier Sánchez Mariscal |*

*| Role | Software Engineer |*

*| Approver | Project Owner |*

*| Last Updated | YYYY-MM-DD |*



*---*



*# 1. Purpose*



*This document defines the strategy governing how Cursor Rules are selected, activated, prioritized, coordinated, and deactivated during AI-assisted engineering activities.*



*Its objective is to ensure that only the rules required for the current engineering task influence execution, maximizing consistency while minimizing unnecessary complexity.*



*---*



*# 2. Objectives*



*The Rule Activation Strategy aims to:*



*- Activate only relevant engineering rules.*

*- Minimize execution overhead.*

*- Prevent rule conflicts.*

*- Improve deterministic behavior.*

*- Support modular engineering workflows.*

*- Enable scalable rule management.*

*- Preserve governance hierarchy.*

*- Simplify future rule expansion.*



*---*



*# 3. Rule Activation Philosophy*



*Not every engineering rule should always be active.*



*The most effective execution environment is one in which only the rules required for the current engineering objective participate.*



*Rule activation shall be dynamic, deterministic, and context-driven.*



*---*



*# 4. Activation Principles*



*Rule activation shall satisfy the following principles.*



*## Relevance*



*Only rules applicable to the current task shall be activated.*



*---*



*## Minimalism*



*The smallest valid rule set shall always be preferred.*



*---*



*## Determinism*



*Equivalent engineering tasks shall activate equivalent rule sets.*



*---*



*## Traceability*



*Every activated rule shall be explainable.*



*---*



*## Governance*



*Activated rules shall always respect governance hierarchy.*



*---*



*# 5. Activation Workflow*



*Rule activation follows the sequence below.*



*1. Engineering task classification.*

*2. Repository analysis.*

*3. Context acquisition.*

*4. Rule discovery.*

*5. Rule prioritization.*

*6. Conflict detection.*

*7. Rule activation.*

*8. Execution monitoring.*

*9. Rule deactivation.*



*Rule activation shall occur before implementation begins.*



*---*



*# 6. Activation Triggers*



*Rules may be activated by:*



*- Engineering domain.*

*- Repository location.*

*- File type.*

*- Active workflow.*

*- Engineering objective.*

*- Repository configuration.*

*- Explicit user request.*



*Multiple triggers may activate the same rule.*



*---*



*# 7. Rule Prioritization*



*When multiple rules apply, Cursor shall prioritize them according to:*



*1. Governance Rules*

*2. AI Governance Rules*

*3. Foundation Cursor Rules*

*4. Domain Cursor Rules*

*5. Workflow Rules*

*6. Task-specific Rules*



*Lower-priority rules shall never override higher-priority rules.*



*---*



*# 8. Rule Composition*



*Complex engineering tasks shall activate multiple specialized rules instead of relying on a single generalized rule.*



*Rule composition shall remain:*



*- Modular.*

*- Independent.*

*- Reusable.*

*- Predictable.*

*- Maintainable.*



*Rules shall cooperate without duplicating responsibilities.*



*---*



*# 9. Conflict Resolution*



*When conflicting rules are detected, Cursor shall:*



*1. Identify the conflict.*

*2. Apply governance hierarchy.*

*3. Select the authoritative rule.*

*4. Disable conflicting behavior.*

*5. Report unresolved conflicts.*



*Rule conflicts shall never remain active during execution.*



*---*



*# 10. Dynamic Activation*



*During execution, Cursor may activate additional rules when:*



*- Engineering scope expands.*

*- Repository context changes.*

*- New documentation becomes relevant.*

*- Dependencies are discovered.*

*- Workflow transitions occur.*



*Dynamic activation shall preserve execution consistency.*



*---*



*# 11. Rule Deactivation*



*Rules shall be deactivated whenever:*



*- Their objective has been completed.*

*- The engineering domain changes.*

*- Repository context changes.*

*- Higher-priority rules replace them.*

*- The engineering session ends.*



*Inactive rules shall not influence future execution.*



*---*



*# 12. Rule Validation*



*Before activation, every rule shall be validated for:*



*- Governance compliance.*

*- Applicability.*

*- Version compatibility.*

*- Dependency availability.*

*- Conflict-free execution.*



*Invalid rules shall not be activated.*



*---*



*# 13. Rule Monitoring*



*During execution, Cursor shall monitor:*



*- Active rule set.*

*- Rule interactions.*

*- Unexpected conflicts.*

*- Context evolution.*

*- Execution consistency.*



*Monitoring enables adaptive execution while preserving determinism.*



*---*



*# 14. AI Operational Contract*



*## Responsibilities*



*Cursor shall:*



*- Select appropriate rules.*

*- Activate only relevant rules.*

*- Resolve rule conflicts.*

*- Monitor rule execution.*

*- Deactivate obsolete rules.*



*---*



*## Authorized Actions*



*Cursor may:*



*- Dynamically activate rules.*

*- Dynamically deactivate rules.*

*- Reorder rules according to governance.*

*- Recommend new rules.*

*- Suggest rule optimization.*



*---*



*## Restricted Actions*



*Cursor shall not:*



*- Activate unnecessary rules.*

*- Ignore governance hierarchy.*

*- Execute conflicting rules simultaneously.*

*- Permanently modify rule priorities.*

*- Override approved governance.*



*---*



*## Success Criteria*



*Rule activation is successful when:*



*- Applicable rules are active.*

*- No rule conflicts exist.*

*- Governance hierarchy is respected.*

*- Execution remains deterministic.*

*- Engineering quality is preserved.*



*---*



*## Failure Conditions*



*Rule activation fails when:*



*- Conflicting rules remain active.*

*- Mandatory rules are omitted.*

*- Rule priorities are violated.*

*- Governance is overridden.*

*- Execution becomes inconsistent.*



*---*



*## Escalation*



*Persistent rule conflicts shall be escalated to the Project Owner before engineering execution continues.*



*---*



*# 15. Governance*



*Rule Activation Strategy governs every Cursor Rule within the engineering ecosystem.*



*Future Cursor Rules shall define their activation conditions according to this strategy and shall remain compatible with the activation hierarchy established herein.*



*---*



*# References*



*- GOV-0000 Portfolio Engineering Standard*

*- AIG-1000 AI Engineering Foundation*

*- AIG-1007 AI Quality Gates*

*- CUR-1100 Cursor Rules Foundation*

*- CUR-1101 Repository Initialization Rules*

*- CUR-1102 Documentation Loading Rules*

*- CUR-1103 Context Acquisition Rules*



*---*



*# Related Documents*



*## Previous*



*- CUR-1103 Context Acquisition Rules*



*## Next*



*- CUR-1105 Engineering Workflow Rules*



*## Related*



*- All Cursor Rules*

*- AI Governance documents*

*- AI Agents*

*- Development Workflows*



*---*



*# Revision History*



*| Version | Date | Author | Description |*

*|----------|------|--------|-------------|*

*| 1.0.0 | YYYY-MM-DD | Francisco Javier Sánchez Mariscal | Initial version defining the activation, prioritization, monitoring, and deactivation strategy for Cursor Rules. |*



*---*



*# Approval*



*This document becomes effective immediately upon approval by the Project Owner.*



*All Cursor Rules shall be activated according to the strategy defined herein.*



*Future revisions shall follow Semantic Versioning principles and shall be documented in the Revision History section.*

