*# CUR-1102*



*# Documentation Loading Rules*



*---*



*# Metadata*



*| Field | Value |*

*|--------|-------|*

*| Document ID | CUR-1102 |*

*| Domain | Cursor Rules |*

*| Title | Documentation Loading Rules |*

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



*This document establishes the mandatory rules governing how Artificial Intelligence agents shall discover, prioritize, load, validate, and maintain engineering documentation before performing any engineering activity within the Francisco Sánchez Portfolio ecosystem.*



*Documentation loading ensures that every engineering decision is based on authoritative project knowledge rather than assumptions.*



*Documentation shall always precede implementation.*



*---*



*# 2. Objectives*



*Documentation Loading Rules aim to:*



*- Ensure AI always uses authoritative documentation.*

*- Eliminate undocumented assumptions.*

*- Standardize documentation discovery.*

*- Optimize context acquisition.*

*- Reduce unnecessary document loading.*

*- Preserve engineering consistency.*

*- Improve execution determinism.*

*- Enable scalable documentation management.*



*---*



*# 3. Documentation Loading Philosophy*



*Documentation is the primary source of engineering truth.*



*Artificial Intelligence shall never prioritize memory, prompts, or repository code over approved documentation when authoritative documentation exists.*



*Loading documentation is an engineering activity, not an optimization.*



*Incomplete documentation loading increases engineering risk.*



*---*



*# 4. Documentation Hierarchy*



*Documentation shall be loaded according to the following priority.*



*1. Governance (GOV)*

*2. AI Governance (AIG)*

*3. Cursor Rules (CUR)*

*4. Brand Documentation (BRD)*

*5. Product Documentation (PRD)*

*6. Design System (DS)*

*7. Architecture (ARC)*

*8. Development (DEV)*

*9. Content (CNT)*

*10. Case Studies (CS)*

*11. Deployment (DEP)*



*Higher-priority documentation shall always be loaded before lower-priority documentation.*



*---*



*# 5. Documentation Discovery*



*Before execution, AI shall identify:*



*- Available documentation domains.*

*- Existing documents.*

*- Document versions.*

*- Document status.*

*- Related references.*

*- Applicable dependencies.*



*Only approved documentation shall be considered authoritative.*



*---*



*# 6. Documentation Selection*



*AI shall load only documentation relevant to the current engineering objective.*



*Selection shall consider:*



*- Current task.*

*- Engineering domain.*

*- File location.*

*- Architecture dependencies.*

*- Active workflow.*

*- Referenced documents.*



*Unnecessary documentation shall not be loaded.*



*---*



*# 7. Incremental Loading*



*Documentation shall be loaded incrementally.*



*The loading sequence shall follow:*



*1. Core governance.*

*2. Domain documentation.*

*3. Task-specific documentation.*

*4. Supporting references.*



*Incremental loading minimizes context consumption while preserving engineering completeness.*



*---*



*# 8. Documentation Validation*



*Every loaded document shall be validated for:*



*- Approval status.*

*- Version.*

*- Completeness.*

*- Internal consistency.*

*- Cross-document references.*

*- Traceability.*



*Invalid documentation shall not guide engineering decisions.*



*---*



*# 9. Cross-Reference Resolution*



*Whenever a document references another document, AI shall evaluate whether the referenced document is required.*



*Referenced documentation shall be loaded only when it materially affects the current engineering task.*



*Reference chains shall remain traceable.*



*---*



*# 10. Documentation Synchronization*



*AI shall detect potential inconsistencies between loaded documents.*



*Synchronization shall verify:*



*- Matching terminology.*

*- Compatible architecture.*

*- Consistent standards.*

*- Updated references.*

*- Version alignment.*



*Conflicting documentation shall be reported before execution.*



*---*



*# 11. Documentation Cache*



*During an engineering session, AI may maintain a temporary documentation cache.*



*The cache shall:*



*- Preserve loaded documents.*

*- Avoid redundant loading.*

*- Remain synchronized.*

*- Expire when repository context changes.*



*Cached documentation shall never replace authoritative sources.*



*---*



*# 12. Documentation Refresh*



*Documentation shall be reloaded whenever:*



*- Governance changes.*

*- Repository structure changes.*

*- New documents are approved.*

*- Current task changes significantly.*

*- Active engineering domain changes.*

*- Documentation confidence decreases.*



*Documentation freshness shall be preserved.*



*---*



*# 13. Missing Documentation*



*When required documentation is unavailable, AI shall:*



*1. Identify the missing artifact.*

*2. Explain the engineering impact.*

*3. Recommend creation or recovery.*

*4. Continue only when acceptable risk exists.*



*Critical documentation omissions shall block execution.*



*---*



*# 14. AI Operational Contract*



*## Responsibilities*



*Cursor shall:*



*- Discover documentation.*

*- Load authoritative documents.*

*- Validate documentation quality.*

*- Resolve references.*

*- Detect inconsistencies.*

*- Maintain synchronization.*



*---*



*## Authorized Actions*



*Cursor may:*



*- Load additional documentation.*

*- Refresh documentation.*

*- Recommend documentation updates.*

*- Delay execution until documentation is available.*

*- Report documentation inconsistencies.*



*---*



*## Restricted Actions*



*Cursor shall not:*



*- Ignore approved documentation.*

*- Prefer assumptions over documentation.*

*- Load deprecated documents as authoritative.*

*- Continue when mandatory documentation is unavailable.*

*- Modify documentation without authorization.*



*---*



*## Success Criteria*



*Documentation loading is successful when:*



*- Required documents are discovered.*

*- Applicable documentation is loaded.*

*- Governance is active.*

*- References are resolved.*

*- Documentation is synchronized.*

*- Engineering confidence is sufficient.*



*---*



*## Failure Conditions*



*Documentation loading fails when:*



*- Required documents are missing.*

*- Governance cannot be loaded.*

*- Documentation conflicts remain unresolved.*

*- Document integrity cannot be verified.*

*- Engineering confidence is insufficient.*



*---*



*## Escalation*



*Critical documentation conflicts or missing mandatory documents shall be escalated to the Project Owner before implementation begins.*



*---*



*# 15. Governance*



*Documentation Loading Rules are mandatory for every AI-assisted engineering activity.*



*All future Cursor Rules, AI Agents, Prompt Libraries, and Development Workflows shall inherit these documentation loading principles unless superseded by a newer approved standard.*



*---*



*# References*



*- GOV-0000 Portfolio Engineering Standard*

*- GOV-INDEX Documentation Index*

*- AIG-1004 AI Context Management*

*- AIG-1005 AI Memory Strategy*

*- CUR-1100 Cursor Rules Foundation*

*- CUR-1101 Repository Initialization Rules*



*---*



*# Related Documents*



*## Previous*



*- CUR-1101 Repository Initialization Rules*



*## Next*



*- CUR-1103 Context Acquisition Rules*



*## Related*



*- All Governance documents*

*- All AI Governance documents*

*- All Cursor Rules*

*- Future AI Agents*

*- Future Development Workflows*



*---*



*# Revision History*



*| Version | Date | Author | Description |*

*|----------|------|--------|-------------|*

*| 1.0.0 | YYYY-MM-DD | Francisco Javier Sánchez Mariscal | Initial version defining mandatory documentation discovery, prioritization, loading, validation, and synchronization rules for Cursor-based AI execution. |*



*---*



*# Approval*



*This document becomes effective immediately upon approval by the Project Owner.*



*All AI-assisted engineering activities shall load and validate the required documentation according to the rules defined herein before any engineering work begins.*



*Future revisions shall follow Semantic Versioning principles and shall be documented in the Revision History section.*

