*# Branch Strategy*



*---*



*# Metadata*



*| Field | Value |*

*|--------|-------|*

*| Document ID | GOV-0003 |*

*| Domain | Governance |*

*| Title | Branch Strategy |*

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



*This document defines the official branching strategy for the Francisco Sánchez Portfolio project.*



*A well-defined branching strategy improves repository organization, simplifies code reviews, reduces merge conflicts, and enables predictable software development throughout the project's lifecycle.*



*Every branch created within this repository shall comply with the conventions defined in this document.*



*---*



*# 2. Objectives*



*This document aims to:*



*- Standardize branch creation.*

*- Protect production-ready code.*

*- Isolate development efforts.*

*- Simplify repository navigation.*

*- Improve code review quality.*

*- Facilitate future collaboration.*

*- Support scalable software development.*



*---*



*# 3. Branching Philosophy*



*The repository follows the following principles:*



*- One objective per branch.*

*- One feature per branch.*

*- One fix per branch.*

*- One responsibility per Pull Request.*



*Branches represent engineering work, not development sessions.*



*A branch should contain only the changes required to accomplish its intended objective.*



*---*



*# 4. Permanent Branches*



*The repository maintains the following permanent branch.*



*## main*



*The `main` branch represents the production-ready state of the repository.*



*Characteristics:*



*- Stable*

*- Deployable*

*- Protected*

*- Fully documented*

*- Fully reviewed*



*Direct commits to `main` are prohibited.*



*---*



*# 5. Feature Branches*



*New functionality shall be developed using feature branches.*



*Naming convention:*



*```text*

*feature/<feature-name>*

*```*



*Examples:*



*```text*

*feature/home-page*



*feature/project-gallery*



*feature/contact-form*



*feature/blog-system*



*feature/dashboard*

*```*



*Feature branches shall remain focused on a single implementation objective.*



*---*



*# 6. Bug Fix Branches*



*Bug corrections shall use:*



*```text*

*fix/<issue-name>*

*```*



*Examples:*



*```text*

*fix/mobile-menu*



*fix/navbar-animation*



*fix/theme-switch*



*fix/image-loading*

*```*



*Bug fix branches should contain only the modifications necessary to resolve the issue.*



*---*



*# 7. Hotfix Branches*



*Critical production corrections shall use:*



*```text*

*hotfix/<description>*

*```*



*Examples:*



*```text*

*hotfix/security*



*hotfix/deployment*



*hotfix/navigation*

*```*



*Hotfix branches should be merged immediately after successful validation.*



*---*



*# 8. Experimental Branches*



*Research and prototypes shall use dedicated experimental branches.*



*Naming convention:*



*```text*

*experiment/<topic>*



*prototype/<topic>*



*research/<topic>*

*```*



*Examples:*



*```text*

*experiment/threejs*



*prototype/ai-chat*



*research/server-actions*

*```*



*Experimental branches shall never be merged directly into `main`.*



*Successful experiments shall be reimplemented in dedicated feature branches.*



*---*



*# 9. Branch Naming Rules*



*Branch names shall:*



*- Use lowercase.*

*- Use kebab-case.*

*- Be concise.*

*- Clearly describe their purpose.*



*Correct examples:*



*```text*

*feature/project-card*



*fix/mobile-navbar*



*hotfix/security-patch*

*```*



*Incorrect examples:*



*```text*

*FeatureNavbar*



*newStuff*



*testing123*



*branch1*

*```*



*---*



*# 10. Branch Lifecycle*



*The recommended lifecycle is:*



*```text*

*Create Branch*

&#x20;       *↓*

*Implementation*

&#x20;       *↓*

*Testing*

&#x20;       *↓*

*Commit*

&#x20;       *↓*

*Push*

&#x20;       *↓*

*Pull Request*

&#x20;       *↓*

*Review*

&#x20;       *↓*

*Merge*

&#x20;       *↓*

*Delete Branch*

*```*



*Completed branches should be removed after merging.*



*---*



*# 11. Branch Lifetime*



*Recommended durations:*



*| Branch Type | Recommended Duration |*

*|-------------|---------------------|*

*| Feature | 1–5 days |*

*| Bug Fix | Same day |*

*| Hotfix | Immediate |*

*| Experiment | Until evaluation is completed |*



*Long-lived branches increase merge conflicts and reduce repository quality.*



*---*



*# 12. Merge Requirements*



*Before merging a branch:*



*- Documentation updated.*

*- Build successful.*

*- Lint completed successfully.*

*- Tests passing.*

*- No unresolved merge conflicts.*

*- Code review completed.*

*- Architecture compliance verified.*



*---*



*# 13. Branch Protection*



*The `main` branch shall enforce:*



*- Pull Request required.*

*- Status checks required.*

*- Force push disabled.*

*- Branch deletion protection.*

*- Conversation resolution before merge.*



*These protections preserve repository integrity.*



*---*



*# 14. Branch Cleanup*



*Merged branches shall be deleted.*



*Abandoned branches shall be archived or removed after review.*



*Repository cleanliness extends to branch management.*



*---*



*# 15. Future Scalability*



*As the project evolves, additional permanent branches may be introduced.*



*Potential future branches include:*



*```text*

*develop*



*release/\**

*```*



*The introduction of new permanent branches requires updating this document.*



*---*



*# 16. Compliance*



*Compliance with this branching strategy is mandatory.*



*Branches that violate naming conventions or governance rules may be rejected during review.*



*---*



*# References*



*- GOV-0000 Engineering Standard*

*- GOV-0001 Repository Guidelines*

*- GOV-0002 Git Workflow*



*---*



*# Related Documents*



*## Previous*



*- GOV-0002 Git Workflow*



*## Next*



*- GOV-0004 Commit Convention*



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

