*# Coding Standards*



*---*



*# Metadata*



*| Field | Value |*

*|--------|-------|*

*| Document ID | GOV-0005 |*

*| Domain | Governance |*

*| Title | Coding Standards |*

*| Project | Francisco Sánchez Portfolio |*

*| Document Type | Engineering Standard |*

*| Status | Approved |*

*| Version | 1.0.0 |*

*| Owner | Francisco Javier Sánchez Mariscal |*

*| Role | Software Engineer |*

*| Approver | Project Owner |*

*| Last Updated | YYYY-MM-DD |*



*---*



*# 1. Purpose*



*This document establishes the official coding standards for the Francisco Sánchez Portfolio project.*



*Its purpose is to ensure consistency, readability, maintainability, scalability, and long-term software quality across the entire codebase.*



*Every contributor, including AI-assisted development tools, shall comply with these standards.*



*---*



*# 2. Objectives*



*This document aims to:*



*- Standardize code style.*

*- Improve maintainability.*

*- Reduce technical debt.*

*- Encourage reusable code.*

*- Promote architectural consistency.*

*- Facilitate onboarding.*

*- Increase software quality.*



*---*



*# 3. Engineering Philosophy*



*Source code is an engineering asset.*



*Every line of code should be:*



*- Intentional.*

*- Readable.*

*- Maintainable.*

*- Testable.*

*- Predictable.*

*- Reusable.*



*Code is written primarily for humans, not for computers.*



*---*



*# 4. General Principles*



*Development shall prioritize:*



*- Simplicity.*

*- Readability.*

*- Modularity.*

*- Separation of Concerns.*

*- Reusability.*

*- Scalability.*

*- Consistency.*



*Complexity must always be justified.*



*---*



*# 5. Clean Code Principles*



*Every implementation should:*



*- Have a single responsibility.*

*- Avoid duplication.*

*- Be self-documenting.*

*- Minimize side effects.*

*- Prefer composition over inheritance.*

*- Reduce unnecessary abstractions.*

*- Avoid premature optimization.*



*---*



*# 6. SOLID Principles*



*Whenever applicable, implementations should follow the SOLID principles.*



*- Single Responsibility Principle*

*- Open / Closed Principle*

*- Liskov Substitution Principle*

*- Interface Segregation Principle*

*- Dependency Inversion Principle*



*These principles should guide architectural decisions rather than be followed dogmatically.*



*---*



*# 7. File Organization*



*Each file shall have a single responsibility.*



*Recommended limits:*



*| Artifact | Recommended Maximum |*

*|-----------|--------------------:|*

*| Component | 250 lines |*

*| Hook | 200 lines |*

*| Utility | 150 lines |*

*| Service | 300 lines |*



*Large implementations should be decomposed into smaller modules.*



*---*



*# 8. Naming Conventions*



*Names shall clearly describe intent.*



*Use:*



*- PascalCase for Components.*

*- camelCase for variables and functions.*

*- UPPER\_SNAKE\_CASE for constants.*

*- kebab-case for directories.*

*- kebab-case for asset names.*



*Avoid abbreviations unless universally understood.*



*---*



*# 9. Functions*



*Functions should:*



*- Perform one task.*

*- Be deterministic whenever possible.*

*- Minimize side effects.*

*- Prefer explicit parameters.*

*- Return predictable values.*



*Avoid deeply nested logic.*



*---*



*# 10. Components*



*React components shall:*



*- Have a single responsibility.*

*- Be composable.*

*- Remain presentation-focused whenever possible.*

*- Delegate business logic to hooks or services.*



*Prefer functional components.*



*---*



*# 11. Hooks*



*Custom hooks shall:*



*- Encapsulate reusable logic.*

*- Never return unnecessary values.*

*- Avoid UI rendering.*

*- Remain framework-focused.*



*Hooks should begin with:*



*```text*

*use*

*```*



*Example:*



*```text*

*useTheme*



*useProjects*



*useScrollPosition*

*```*



*---*



*# 12. State Management*



*State shall be stored at the lowest appropriate level.*



*Priority:*



*1. Local State*

*2. Context*

*3. Global State*



*Global state should only be introduced when necessary.*



*---*



*# 13. Error Handling*



*Errors shall:*



*- Be anticipated.*

*- Be logged appropriately.*

*- Present meaningful messages.*

*- Never expose internal implementation details.*



*Unexpected failures shall degrade gracefully.*



*---*



*# 14. Comments*



*Code should explain itself.*



*Comments should explain:*



*- Why.*

*- Not What.*



*Avoid obvious comments.*



*Good:*



*```typescript*

*// Prevent duplicate API requests while the previous request is pending.*

*```*



*Bad:*



*```typescript*

*// Increment i*

*i++;*

*```*



*---*



*# 15. Imports*



*Imports shall:*



*- Be grouped logically.*

*- Remove unused dependencies.*

*- Avoid circular dependencies.*



*Suggested order:*



*1. External libraries.*

*2. Internal modules.*

*3. Components.*

*4. Hooks.*

*5. Utilities.*

*6. Types.*

*7. Styles.*



*---*



*# 16. TypeScript Standards*



*TypeScript shall be used strictly.*



*Avoid:*



*- any*

*- unnecessary assertions*

*- implicit types*



*Prefer:*



*- interfaces*

*- discriminated unions*

*- utility types*

*- generics where appropriate*



*Type safety takes precedence over development speed.*



*---*



*# 17. Performance*



*Performance should be considered during implementation.*



*Prefer:*



*- Lazy loading.*

*- Dynamic imports.*

*- Memoization only when justified.*

*- Efficient rendering.*

*- Image optimization.*



*Premature optimization should be avoided.*



*---*



*# 18. Accessibility*



*Every UI implementation shall comply with modern accessibility standards.*



*Interfaces should:*



*- Support keyboard navigation.*

*- Include semantic HTML.*

*- Provide meaningful labels.*

*- Maintain sufficient color contrast.*



*Accessibility is a functional requirement.*



*---*



*# 19. Security*



*Source code shall:*



*- Validate external input.*

*- Sanitize user data.*

*- Protect sensitive information.*

*- Avoid exposing secrets.*

*- Follow secure authentication practices.*



*Security shall never be optional.*



*---*



*# 20. Documentation*



*Complex implementations shall include supporting documentation.*



*Major architectural decisions require an Architecture Decision Record (ADR).*



*---*



*# 21. Compliance*



*Compliance with these standards is mandatory.*



*Pull Requests that violate these guidelines may require refactoring before approval.*



*---*



*# References*



*- GOV-0000 Engineering Standard*

*- GOV-0001 Repository Guidelines*

*- GOV-0002 Git Workflow*

*- GOV-0003 Branch Strategy*

*- GOV-0004 Commit Convention*



*---*



*# Related Documents*



*## Previous*



*- GOV-0004 Commit Convention*



*## Next*



*- GOV-0006 Architecture Decision Records (ADR)*



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

