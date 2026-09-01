*# Git Workflow*



*---*



*# Metadata*



*| Field | Value |*

*|--------|-------|*

*| Document ID | GOV-0002 |*

*| Domain | Governance |*

*| Title | Git Workflow |*

*| Project | Francisco Sánchez Portfolio |*

*| Document Type | Version Control Standard |*

*| Status | Approved |*

*| Version | 1.0.0 |*

*| Owner | Francisco Javier Sánchez Mariscal |*

*| Role | Software Engineer |*

*| Approver | Project Owner |*

*| Last Updated | YYYY-MM-DD |*



*---*



*# 1. Purpose*



*This document defines the official Git workflow for the Francisco Sánchez Portfolio project.*



*Its purpose is to establish a predictable, traceable, and maintainable version control process that supports high-quality software development while minimizing integration conflicts and preserving repository integrity.*



*Every contributor, including AI-assisted development tools, shall comply with this workflow.*



*---*



*# 2. Objectives*



*The Git workflow aims to:*



*- Standardize version control practices.*

*- Protect production-ready code.*

*- Maintain a clean and understandable commit history.*

*- Simplify collaboration.*

*- Reduce merge conflicts.*

*- Improve traceability.*

*- Support scalable development.*



*---*



*# 3. Workflow Philosophy*



*The project follows these principles:*



*- Every change has a purpose.*

*- Every commit tells a story.*

*- Every branch represents a single objective.*

*- Every merge preserves repository quality.*

*- Every release is reproducible.*



*Git history is considered engineering documentation.*



*---*



*# 4. Development Lifecycle*



*Development follows the sequence below.*



*```text*

*Planning*

&#x20;   *↓*

*Documentation*

&#x20;   *↓*

*Feature Branch*

&#x20;   *↓*

*Implementation*

&#x20;   *↓*

*Local Testing*

&#x20;   *↓*

*Commit*

&#x20;   *↓*

*Push*

&#x20;   *↓*

*Pull Request*

&#x20;   *↓*

*Review*

&#x20;   *↓*

*Merge*

&#x20;   *↓*

*Deployment*

*```*



*Each stage shall be completed before progressing to the next.*



*---*



*# 5. Branch Creation*



*Development shall always begin from the latest version of the `main` branch.*



*Before creating a new branch:*



*1. Pull the latest changes.*

*2. Verify repository status.*

*3. Synchronize local references.*



*Example:*



*```bash*

*git checkout main*

*git pull origin main*

*git checkout -b feature/home-page*

*```*



*---*



*# 6. Commit Frequency*



*Commits should be:*



*- Small*

*- Atomic*

*- Reversible*

*- Self-contained*



*A commit shall represent a single logical change.*



*Large commits containing unrelated modifications shall be avoided.*



*---*



*# 7. Synchronization*



*Contributors shall synchronize frequently with the remote repository.*



*Recommended workflow:*



*```bash*

*git fetch origin*

*git pull origin main*

*```*



*Long-lived branches should periodically incorporate updates from `main` to minimize merge conflicts.*



*---*



*# 8. Merge Strategy*



*Pull Requests shall be reviewed before merging.*



*Preferred merge strategy:*



*- Squash Merge*



*Advantages:*



*- Cleaner history.*

*- Easier rollback.*

*- Reduced noise.*

*- Improved readability.*



*Merge commits should be avoided unless preserving branch history is necessary.*



*---*



*# 9. Conflict Resolution*



*Merge conflicts shall be resolved immediately.*



*After resolving conflicts:*



*- Verify the build.*

*- Execute tests.*

*- Validate functionality.*

*- Commit the resolution.*



*Conflicts shall never be ignored or bypassed.*



*---*



*# 10. Tags and Releases*



*Production releases shall be identified using Git tags.*



*Example:*



*```text*

*v1.0.0*

*v1.1.0*

*v2.0.0*

*```*



*Versioning follows Semantic Versioning.*



*---*



*# 11. Protected Branches*



*The following branches shall be protected:*



*```text*

*main*

*```*



*Protection rules include:*



*- Pull Request required.*

*- Status checks required.*

*- No force push.*

*- Conversation resolution before merge.*



*---*



*# 12. Pull Requests*



*Every Pull Request should include:*



*- Purpose.*

*- Summary of changes.*

*- Related documentation.*

*- Screenshots (if applicable).*

*- Testing evidence.*

*- Known limitations.*



*Large Pull Requests should be divided into smaller reviewable units whenever practical.*



*---*



*# 13. Code Reviews*



*Every code review should verify:*



*- Architecture compliance.*

*- Documentation updates.*

*- Coding standards.*

*- Performance considerations.*

*- Security implications.*

*- Accessibility requirements.*

*- Maintainability.*



*Code reviews are engineering reviews, not personal critiques.*



*---*



*# 14. Repository Integrity*



*The following actions are prohibited on protected branches:*



*- Force push.*

*- Direct commits.*

*- History rewriting.*

*- Deleting release tags.*



*Repository history shall remain stable and auditable.*



*---*



*# 15. Disaster Recovery*



*If repository integrity is compromised:*



*1. Stop new merges.*

*2. Identify the last stable commit.*

*3. Restore the affected branch.*

*4. Document the incident.*

*5. Review the root cause.*



*Critical incidents shall be documented through an Architecture Decision Record (ADR) or Incident Report.*



*---*



*# 16. Compliance*



*Compliance with this workflow is mandatory.*



*Any deviation shall be documented and approved before implementation.*



*Failure to comply constitutes a governance violation.*



*---*



*# References*



*- GOV-0000 Engineering Standard*

*- GOV-0001 Repository Guidelines*



*---*



*# Related Documents*



*## Previous*



*- GOV-0001 Repository Guidelines*



*## Next*



*- GOV-0003 Branch Strategy*



*## Related*



*- GOV-INDEX Documentation Index*



*---*



*# Revision History*



*| Version | Date | Author | Description |*

*|----------|------|--------|-------------|*

*| 1.0.0 | YYYY-MM-DD | Francisco Javier Sánchez Mariscal | Initial version. |*



*---*



*# Approval*



*This document becomes effective immediately upon approval by the Project Owner.*



*Future revisions shall follow Semantic Versioning principles and must be recorded in the Revision History section.*

