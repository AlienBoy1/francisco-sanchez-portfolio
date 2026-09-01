*# Commit Convention*



*---*



*# Metadata*



*| Field | Value |*

*|--------|-------|*

*| Document ID | GOV-0004 |*

*| Domain | Governance |*

*| Title | Commit Convention |*

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



*This document defines the official commit message convention for the Francisco Sánchez Portfolio project.*



*Consistent commit messages improve repository readability, facilitate code reviews, simplify debugging, support automated release management, and provide a meaningful development history.*



*Every commit created within this repository shall comply with the rules defined in this document.*



*---*



*# 2. Objectives*



*This document aims to:*



*- Standardize commit messages.*

*- Improve repository readability.*

*- Facilitate code reviews.*

*- Support Semantic Versioning.*

*- Enable automated changelog generation.*

*- Improve traceability.*

*- Preserve a meaningful Git history.*



*---*



*# 3. Commit Philosophy*



*A commit represents a single logical change.*



*Each commit should answer three questions:*



*- What changed?*

*- Why did it change?*

*- Is the change isolated?*



*Commits are considered part of the project's documentation.*



*---*



*# 4. Commit Structure*



*The project follows the Conventional Commits specification.*



*General format:*



*```text*

*<type>(<scope>): <description>*

*```*



*Example:*



*```text*

*feat(auth): implement JWT authentication*

*```*



*---*



*# 5. Commit Types*



*The following commit types are officially supported.*



*## feat*



*Introduces a new feature.*



*Example:*



*```text*

*feat(home): create hero section*

*```*



*---*



*## fix*



*Corrects a defect.*



*Example:*



*```text*

*fix(navbar): resolve mobile overflow*

*```*



*---*



*## docs*



*Documentation changes only.*



*Example:*



*```text*

*docs(governance): add branch strategy*

*```*



*---*



*## style*



*Formatting changes that do not modify functionality.*



*Examples include:*



*- whitespace*

*- formatting*

*- indentation*

*- missing semicolons*



*Example:*



*```text*

*style(button): improve code formatting*

*```*



*---*



*## refactor*



*Internal improvements without changing external behavior.*



*Example:*



*```text*

*refactor(api): simplify request handling*

*```*



*---*



*## perf*



*Performance improvements.*



*Example:*



*```text*

*perf(images): optimize lazy loading*

*```*



*---*



*## test*



*Adds or updates tests.*



*Example:*



*```text*

*test(auth): increase login coverage*

*```*



*---*



*## build*



*Changes related to build tools or dependencies.*



*Example:*



*```text*

*build(next): upgrade to Next.js 16*

*```*



*---*



*## ci*



*Changes affecting Continuous Integration.*



*Example:*



*```text*

*ci(github): add deployment workflow*

*```*



*---*



*## chore*



*Routine maintenance tasks.*



*Examples:*



*- dependency updates*

*- configuration*

*- housekeeping*



*Example:*



*```text*

*chore(repo): update editor configuration*

*```*



*---*



*## revert*



*Reverts a previous commit.*



*Example:*



*```text*

*revert(auth): rollback JWT implementation*

*```*



*---*



*# 6. Scope*



*Whenever possible, commits should include a scope.*



*Examples:*



*```text*

*auth*



*home*



*projects*



*blog*



*design-system*



*api*



*seo*



*contact*



*portfolio*



*deployment*

*```*



*---*



*# 7. Description Rules*



*Descriptions shall:*



*- Use lowercase.*

*- Use the imperative mood.*

*- Be concise.*

*- Describe the change.*



*Correct:*



*```text*

*feat(blog): add search functionality*

*```*



*Incorrect:*



*```text*

*Added Blog Search*



*New Feature*



*Changes*



*Update*

*```*



*---*



*# 8. Commit Size*



*Commits should be:*



*- Small*

*- Atomic*

*- Reversible*

*- Focused*



*A single commit shall not contain unrelated modifications.*



*---*



*# 9. Commit Frequency*



*Developers should commit frequently.*



*Recommended practice:*



*- Complete one logical task.*

*- Validate locally.*

*- Create one commit.*



*Avoid accumulating many unrelated changes before committing.*



*---*



*# 10. Examples*



*Examples of good commits:*



*```text*

*feat(hero): implement animated landing section*



*fix(theme): correct dark mode colors*



*docs(gov): add repository guidelines*



*refactor(layout): simplify responsive grid*



*perf(images): compress project thumbnails*



*ci(vercel): automate production deployment*

*```*



*---*



*# 11. Prohibited Commit Messages*



*The following commit messages are prohibited:*



*```text*

*update*



*changes*



*fix*



*test*



*asdf*



*123*



*final*



*last version*



*new*



*commit*

*```*



*Commit messages shall always communicate meaningful information.*



*---*



*# 12. Breaking Changes*



*Breaking changes shall include:*



*```text*

*!*

*```*



*Example:*



*```text*

*feat(api)!: redesign authentication endpoints*

*```*



*The commit body should explain the breaking change.*



*---*



*# 13. Commit Body*



*When additional context is necessary, use the commit body.*



*Example:*



*```text*

*feat(auth): implement refresh token support*



*Adds secure refresh token rotation.*



*Improves authentication security.*



*Closes #12.*

*```*



*---*



*# 14. Footer*



*Optional footers may include:*



*```text*

*Closes #15*



*Refs #8*



*Reviewed-by:*



*Co-authored-by:*

*```*



*---*



*# 15. Compliance*



*Compliance with this convention is mandatory.*



*Pull Requests containing non-compliant commit messages may require history cleanup before approval.*



*---*



*# References*



*- GOV-0000 Engineering Standard*

*- GOV-0001 Repository Guidelines*

*- GOV-0002 Git Workflow*

*- GOV-0003 Branch Strategy*



*---*



*# Related Documents*



*## Previous*



*- GOV-0003 Branch Strategy*



*## Next*



*- GOV-0005 Coding Standards*



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

