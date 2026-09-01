*# Repository Guidelines*



*---*



*# Metadata*



*| Field | Value |*

*|--------|-------|*

*| Document ID | GOV-0001 |*

*| Domain | Governance |*

*| Title | Repository Guidelines |*

*| Project | Francisco Sánchez Portfolio |*

*| Document Type | Repository Governance |*

*| Status | Approved |*

*| Version | 1.0.0 |*

*| Owner | Francisco Javier Sánchez Mariscal |*

*| Role | Software Engineer |*

*| Approver | Project Owner |*

*| Last Updated | YYYY-MM-DD |*



*---*



*# 1. Purpose*



*This document defines the official repository organization, governance rules, directory structure, and repository conventions for the Francisco Sánchez Portfolio project.*



*A well-structured repository is essential for maintainability, scalability, onboarding, collaboration, and long-term software quality. Every file, folder, and artifact within the repository shall have a defined purpose and an intentional location.*



*These guidelines are mandatory for every contributor, including AI-assisted development tools.*



*---*



*# 2. Objectives*



*This document aims to:*



*- Standardize the repository structure.*

*- Improve maintainability.*

*- Reduce technical debt.*

*- Facilitate navigation.*

*- Ensure consistency across all project artifacts.*

*- Promote modular development.*

*- Support long-term scalability.*

*- Provide a predictable development experience.*



*---*



*# 3. Repository Philosophy*



*The repository follows a simple engineering principle:*



*> \*\*Everything has a purpose, and everything belongs somewhere.\*\**



*No file shall exist without a defined responsibility.*



*No directory shall become a miscellaneous storage location.*



*Repository organization is considered part of software quality.*



*---*



*# 4. Repository Structure*



*The repository is organized into the following top-level directories:*



*```text*

*.github/*

*.vscode/*

*docs/*

*public/*

*src/*

*tests/*

*```*



*Each directory has a single, clearly defined responsibility.*



*---*



*# 5. Directory Responsibilities*



*## .github/*



*Contains GitHub-specific resources, including:*



*- GitHub Actions workflows*

*- Issue templates*

*- Pull Request templates*

*- CODEOWNERS*

*- Repository configuration*



*No application source code shall be stored in this directory.*



*---*



*## .vscode/*



*Contains optional Visual Studio Code workspace settings.*



*Editor configuration shall never modify application behavior.*



*---*



*## docs/*



*Contains all engineering documentation.*



*Documentation is organized by governance domains and follows the documentation standards defined in GOV-0000.*



*Implementation code shall never be stored inside this directory.*



*---*



*## public/*



*Contains static assets served directly by the application.*



*Examples include:*



*- Images*

*- Icons*

*- Fonts*

*- Open Graph assets*

*- Favicons*

*- Robots.txt*

*- Sitemap.xml*

*- Manifest files*



*Generated artifacts shall not be stored here unless explicitly required.*



*---*



*## src/*



*Contains all production source code.*



*Application logic, UI, business rules, utilities, services, hooks, providers, and configuration originate from this directory.*



*---*



*## tests/*



*Contains automated testing resources.*



*Examples:*



*- Unit Tests*

*- Integration Tests*

*- End-to-End Tests*

*- Test Utilities*

*- Mock Data*



*Production code shall never depend on testing resources.*



*---*



*# 6. Root Files*



*Only essential project files belong in the repository root.*



*Expected files include:*



*- README.md*

*- LICENSE*

*- package.json*

*- workspace.json*

*- tsconfig.json*

*- next.config.ts*

*- .gitignore*

*- .editorconfig*

*- eslint.config.js*

*- prettier.config.js*

*- .prettierrc*

*- .nvmrc*



*Temporary files shall never remain in the repository root.*



*---*



*# 7. Documentation Organization*



*Documentation follows a domain-based hierarchy.*



*```text*

*docs/*



*000-governance/*

*100-brand/*

*200-product/*

*300-design/*

*400-engineering/*

*500-development/*

*600-content/*

*700-case-studies/*

*900-deployment/*

*```*



*Each directory represents a single engineering domain.*



*Documents shall never be duplicated across domains.*



*---*



*# 8. Document Naming Convention*



*Documentation uses domain prefixes according to document type.*



*Examples:*



*```text*

*GOV-0000 Engineering Standard.md*

*GOV-0001 Repository Guidelines.md*



*BRD-1000 Brand Identity.md*



*PRD-2000 Product Vision.md*



*DS-3000 Design System.md*



*ARC-4000 System Architecture.md*



*DEV-5000 Sprint Backlog.md*



*CNT-6000 About.md*



*CS-7000 Altus Gym.md*



*DEP-9000 CI-CD.md*

*```*



*The document identifier shall remain unique throughout the repository.*



*---*



*# 9. Directory Naming Convention*



*Directories shall:*



*- Use lowercase.*

*- Use kebab-case.*

*- Represent a single responsibility.*



*Correct examples:*



*```text*

*case-studies*



*design-system*



*engineering*



*shared-components*

*```*



*Incorrect examples:*



*```text*

*CaseStudies*



*DesignSystem*



*misc*



*temp*

*```*



*---*



*# 10. File Organization Rules*



*Files shall always be stored in the most specific directory available.*



*For example:*



*Architecture documentation belongs in:*



*```text*

*400-engineering/*

*```*



*Case studies belong in:*



*```text*

*700-case-studies/*

*```*



*Brand documentation belongs in:*



*```text*

*100-brand/*

*```*



*No document shall be placed in an unrelated domain.*



*---*



*# 11. Asset Organization*



*Static assets shall follow a predictable hierarchy.*



*```text*

*public/*



*images/*



*logos/*



*icons/*



*illustrations/*



*documents/*



*fonts/*



*videos/*



*lottie/*

*```*



*Assets shall never be placed directly inside `public/` unless explicitly justified.*



*---*



*# 12. Source Code Organization*



*Source code shall follow a modular architecture.*



*Each module shall have a single responsibility.*



*Business logic, presentation, infrastructure, utilities, and configuration shall remain clearly separated.*



*Large modules should be decomposed into smaller, reusable components whenever practical.*



*---*



*# 13. Documentation First*



*Engineering documentation precedes implementation.*



*No significant feature shall begin without corresponding documentation.*



*Documentation is considered part of the implementation process rather than an afterthought.*



*---*



*# 14. Repository Cleanliness*



*The repository shall remain free of:*



*- Unused files*

*- Obsolete assets*

*- Duplicate documentation*

*- Experimental leftovers*

*- Temporary resources*

*- Generated artifacts*

*- Debugging files*



*Repository cleanliness reduces cognitive load and improves maintainability.*



*---*



*# 15. Governance*



*Any structural modification affecting the repository shall be documented.*



*Changes impacting organization require either:*



*- An update to the corresponding Governance document.*

*- An approved Architecture Decision Record (ADR).*



*---*



*# 16. Compliance*



*Compliance with this document is mandatory.*



*Any deviation shall be justified, documented, reviewed, and approved before implementation.*



*Failure to comply constitutes a repository governance violation.*



*---*



*# References*



*- GOV-0000 Engineering Standard*



*---*



*# Related Documents*



*## Previous*



*- GOV-0000 Engineering Standard*



*## Next*



*- GOV-0002 Git Workflow*



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

