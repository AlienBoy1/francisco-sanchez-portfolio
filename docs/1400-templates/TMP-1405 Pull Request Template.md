*# TMP-1405*



*# Pull Request Template*



*---*



*# Metadata*



*| Field | Value |*

*|--------|-------|*

*| Document ID | TMP-1405 |*

*| Domain | Templates |*

*| Title | Pull Request Template |*

*| Project | Francisco Sánchez Portfolio |*

*| Document Type | Code Review Template |*

*| Status | Approved |*

*| Version | 1.0.0 |*

*| Owner | Francisco Javier Sánchez Mariscal |*

*| Role | Software Engineer |*

*| Approver | Project Owner |*

*| Last Updated | YYYY-MM-DD |*



*---*



*# 1. Purpose*



*This document defines the official Pull Request (PR) Template used throughout the Francisco Sánchez Portfolio AI-First engineering ecosystem.*



*A Pull Request represents the formal proposal to merge engineering work into the main codebase after validation, review, testing, and governance verification.*



*Every production code change shall be submitted using this template.*



*---*



*# 2. Objectives*



*The Pull Request Template aims to:*



*- Standardize code reviews.*

*- Improve engineering quality.*

*- Preserve implementation traceability.*

*- Support AI-assisted reviews.*

*- Reduce integration risks.*

*- Improve collaboration.*

*- Ensure governance compliance.*

*- Increase deployment confidence.*



*---*



*# 3. Pull Request Philosophy*



*A Pull Request is an engineering review contract.*



*Its purpose is not only to merge code, but to demonstrate that the proposed implementation satisfies business objectives, architectural standards, testing requirements, and governance policies.*



*Every Pull Request shall be understandable without requiring access to the author's personal context.*



*---*



*# 4. When to Create a Pull Request*



*A Pull Request shall be created whenever:*



*- A feature is completed.*

*- A bug has been fixed.*

*- Documentation changes affect production.*

*- Infrastructure is modified.*

*- Refactoring impacts maintainability.*

*- Security improvements are introduced.*

*- AI workflows are updated.*



*Direct commits to protected branches are prohibited.*



*---*



*# 5. Standard Structure*



*Every Pull Request shall include:*



*```*

*Metadata*

*Summary*

*Related Issues*

*Related Feature Specification*

*Scope of Changes*

*Implementation Details*

*Testing Performed*

*Breaking Changes*

*Deployment Notes*

*Review Checklist*

*AI Review Summary*

*References*

*```*



*---*



*# 6. Metadata*



*Minimum metadata shall include:*



*| Field | Description |*

*|--------|-------------|*

*| PR ID | Unique identifier |*

*| Title | Descriptive title |*

*| Source Branch | Feature branch |*

*| Target Branch | Destination branch |*

*| Author | Responsible engineer |*

*| Reviewer(s) | Assigned reviewers |*

*| Status | Draft / Ready for Review / Approved / Merged |*



*Metadata shall preserve repository traceability.*



*---*



*# 7. Summary*



*Provide a concise description explaining:*



*- What was implemented.*

*- Why the change exists.*

*- Expected outcome.*



*The summary shall remain concise while providing sufficient engineering context.*



*---*



*# 8. Related Issues*



*Reference every associated Issue.*



*Example:*



*```*

*DEV-531*



*DEV-544*



*BUG-018*

*```*



*No Pull Request shall exist without traceable work items.*



*---*



*# 9. Related Feature Specification*



*Reference applicable Feature Specifications.*



*Example:*



*```*

*SPEC-014 Authentication*



*SPEC-022 User Dashboard*

*```*



*The implementation shall remain aligned with approved specifications.*



*---*



*# 10. Scope of Changes*



*Clearly describe:*



*Included work.*



*Excluded work.*



*Modified modules.*



*Affected services.*



*Updated documentation.*



*Scope shall remain explicit.*



*---*



*# 11. Implementation Details*



*Summarize the technical implementation.*



*Examples include:*



*- Components created.*

*- APIs modified.*

*- Database migrations.*

*- Configuration changes.*

*- Refactoring performed.*

*- Performance improvements.*



*Implementation summaries shall remain concise.*



*---*



*# 12. Testing Performed*



*Specify completed validation activities.*



*Examples:*



*- Unit Tests*

*- Integration Tests*

*- End-to-End Tests*

*- Manual Testing*

*- Regression Testing*

*- Performance Testing*

*- AI Validation*



*Only completed testing shall be reported.*



*---*



*# 13. Breaking Changes*



*Explicitly indicate whether the Pull Request introduces breaking changes.*



*If applicable, describe:*



*- API modifications.*

*- Database migrations.*

*- Configuration changes.*

*- Upgrade requirements.*

*- Rollback considerations.*



*If no breaking changes exist, explicitly state:*



*```*

*No Breaking Changes*

*```*



*---*



*# 14. Deployment Notes*



*Document deployment considerations including:*



*- Required environment variables.*

*- Infrastructure updates.*

*- Feature flags.*

*- Migration order.*

*- Rollback strategy.*

*- Monitoring requirements.*



*Deployment guidance shall reduce production risk.*



*---*



*# 15. Review Checklist*



*Every Pull Request shall verify:*



*- Feature Specification satisfied.*

*- Acceptance Criteria completed.*

*- Tests passing.*

*- Documentation updated.*

*- Coding standards followed.*

*- Security reviewed.*

*- No unresolved TODOs.*

*- No debug artifacts.*

*- AI review completed when applicable.*



*Every checklist item shall be completed before approval.*



*---*



*# 16. AI Review Summary*



*Whenever AI Agents participate, summarize:*



*- AI tools involved.*

*- Review objectives.*

*- Issues detected.*

*- Recommendations accepted.*

*- Recommendations rejected.*

*- Final engineering assessment.*



*Human engineers retain final approval authority.*



*---*



*# 17. Example*



*```*

*Title*



*Implement User Authentication*



*Summary*



*Adds JWT authentication following the approved Feature Specification.*



*Related Issues*



*DEV-102*



*Testing*



*Unit Tests*



*Integration Tests*



*Manual Validation*



*Breaking Changes*



*No Breaking Changes*

*```*



*The example illustrates the expected level of detail.*



*---*



*# 18. AI Operational Contract*



*## Responsibilities*



*Every AI Agent shall:*



*- Review Pull Requests against approved documentation.*

*- Verify architectural compliance.*

*- Compare implementation with Feature Specifications.*

*- Identify potential risks.*

*- Recommend improvements.*



*---*



*## Authorized Actions*



*Agents may:*



*- Generate review summaries.*

*- Detect inconsistencies.*

*- Suggest refactoring.*

*- Recommend additional testing.*

*- Validate documentation synchronization.*



*---*



*## Restricted Actions*



*Agents shall not:*



*- Approve Pull Requests autonomously.*

*- Merge Pull Requests.*

*- Override reviewer decisions.*

*- Ignore governance requirements.*

*- Modify protected branches directly.*



*---*



*## Success Criteria*



*The Pull Request Template is successful when:*



*- Code reviews become consistent.*

*- Integration risks decrease.*

*- AI-assisted validation improves quality.*

*- Repository history remains traceable.*

*- Production deployments become predictable.*



*---*



*## Failure Conditions*



*The Pull Request Template fails when:*



*- Changes are merged without review.*

*- Documentation is outdated.*

*- Acceptance Criteria are ignored.*

*- Testing is incomplete.*

*- Governance is bypassed.*



*---*



*## Escalation*



*Pull Requests affecting production architecture, security, governance, deployment, or AI infrastructure shall require approval from the Project Owner before merging.*



*---*



*# 19. Governance*



*The Pull Request Template governs every production code contribution within the AI-First engineering ecosystem.*



*Every production change shall be submitted, reviewed, validated, and approved using this template before integration into protected branches.*



*Future repository automation systems, AI code reviewers, CI/CD platforms, and engineering assistants shall remain compatible with the principles established herein.*



*---*



*# References*



*- GOV-0000 Portfolio Engineering Standard*

*- GOV-0002 Git Workflow*

*- GOV-0003 Branch Strategy*

*- GOV-0004 Commit Convention*

*- GOV-0013 Quality Assurance Policy*

*- DEV-5001 Sprint Planning*

*- TMP-1403 Feature Specification Template*

*- TMP-1404 Issue Template*



*---*



*# Related Documents*



*## Previous*



*- TMP-1404 Issue Template*



*## Next*



*- TMP-1406 AI Prompt Template*



*## Related*



*- Git Workflow*

*- Code Review*

*- Development Workflow*

*- CI/CD Pipeline*



*---*



*# Revision History*



*| Version | Date | Author | Description |*

*|----------|------|--------|-------------|*

*| 1.0.0 | YYYY-MM-DD | Francisco Javier Sánchez Mariscal | Initial version defining the official Pull Request Template for AI-First engineering workflows. |*



*---*



*# Approval*



*This document becomes effective immediately upon approval by the Project Owner.*



*Every production code contribution shall be submitted using this Pull Request Template before merging into protected branches.*



*Future revisions shall follow Semantic Versioning principles and shall be documented in the Revision History section.*

