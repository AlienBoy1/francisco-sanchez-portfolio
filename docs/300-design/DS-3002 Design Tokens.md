*# DS-3002*



*# Design Tokens*



*---*



*# Metadata*



*| Field | Value |*

*|--------|-------|*

*| Document ID | DS-3002 |*

*| Domain | Design System |*

*| Title | Design Tokens |*

*| Project | Francisco Sánchez Portfolio |*

*| Document Type | Design System Specification |*

*| Status | Approved |*

*| Version | 1.0.0 |*

*| Owner | Francisco Javier Sánchez Mariscal |*

*| Role | Software Engineer |*

*| Approver | Project Owner |*

*| Last Updated | YYYY-MM-DD |*



*---*



*# 1. Purpose*



*This document defines the Design Token architecture for the Francisco Sánchez Portfolio.*



*Design Tokens are the smallest reusable visual decisions within the Design System.*



*They provide a single source of truth for all visual properties, ensuring consistency, scalability, maintainability, and seamless synchronization between design and implementation.*



*No visual value shall be hardcoded outside the Design Token system.*



*---*



*# 2. Design Token Philosophy*



*Every visual decision shall originate from a Design Token.*



*Tokens abstract implementation details and allow the interface to evolve without modifying individual components.*



*The Design System shall be token-driven rather than value-driven.*



*---*



*# 3. Objectives*



*The Design Token system pursues the following objectives:*



*- Eliminate duplicated visual values.*

*- Improve consistency.*

*- Enable theming.*

*- Simplify maintenance.*

*- Support accessibility.*

*- Increase scalability.*

*- Synchronize design and code.*

*- Facilitate future automation.*



*---*



*# 4. Token Hierarchy*



*The Design System follows a four-level token hierarchy.*



*```text*

*Primitive Tokens*

&#x20;       *↓*

*Semantic Tokens*

&#x20;       *↓*

*Component Tokens*

&#x20;       *↓*

*Application*

*```*



*Each level builds upon the previous one.*



*Components shall consume semantic or component tokens rather than primitive values.*



*---*



*# 5. Primitive Tokens*



*Primitive Tokens represent immutable design values.*



*Examples include:*



*- Base Colors*

*- Font Sizes*

*- Font Families*

*- Font Weights*

*- Border Radius*

*- Spacing Units*

*- Elevation Levels*

*- Opacity Values*

*- Animation Durations*

*- Breakpoints*



*Primitive Tokens shall never reference other tokens.*



*---*



*# 6. Semantic Tokens*



*Semantic Tokens describe meaning rather than appearance.*



*Examples include:*



*- Primary Background*

*- Secondary Background*

*- Surface*

*- Primary Text*

*- Secondary Text*

*- Border*

*- Success*

*- Warning*

*- Error*

*- Information*



*Semantic Tokens may reference Primitive Tokens.*



*Applications shall consume Semantic Tokens whenever possible.*



*---*



*# 7. Component Tokens*



*Component Tokens define visual properties specific to reusable components.*



*Examples:*



*Button*



*- Background*

*- Hover Background*

*- Text Color*

*- Border Radius*

*- Padding*



*Card*



*- Surface*

*- Border*

*- Shadow*

*- Spacing*



*Navigation*



*- Height*

*- Background*

*- Active Indicator*



*Component Tokens shall reference Semantic Tokens.*



*---*



*# 8. Token Categories*



*The Design System includes tokens for:*



*- Colors*

*- Typography*

*- Spacing*

*- Border Radius*

*- Shadows*

*- Borders*

*- Opacity*

*- Blur*

*- Icons*

*- Motion*

*- Animation*

*- Transition*

*- Duration*

*- Easing*

*- Breakpoints*

*- Grid*

*- Container Widths*

*- Z-Index*

*- Elevation*



*Future categories shall remain compatible with this architecture.*



*---*



*# 9. Naming Convention*



*Tokens shall use descriptive semantic names.*



*Examples:*



*```text*

*color.background.primary*



*color.text.secondary*



*spacing.md*



*radius.lg*



*shadow.card*



*duration.fast*



*easing.standard*

*```*



*Token names shall remain implementation independent.*



*Names shall never reference technologies or CSS properties directly.*



*---*



*# 10. Token Consumption*



*Visual values shall be consumed through tokens only.*



*Forbidden example:*



*```css*

*padding: 16px;*

*```*



*Required approach:*



*```css*

*padding: var(--spacing-md);*

*```*



*This principle applies to every visual property.*



*---*



*# 11. Theming*



*The Design System shall support multiple visual themes.*



*Examples include:*



*- Light Theme*

*- Dark Theme*

*- High Contrast Theme*

*- Future Brand Themes*



*Themes shall redefine semantic tokens without requiring component modifications.*



*---*



*# 12. Accessibility*



*Token values shall support accessibility requirements.*



*Examples include:*



*- WCAG contrast compliance.*

*- Minimum readable typography.*

*- Appropriate spacing.*

*- Focus visibility.*

*- Motion reduction support.*



*Accessibility shall be evaluated at the token level whenever possible.*



*---*



*# 13. Relationship with Implementation*



*Design Tokens shall be implemented as the shared contract between:*



*- Design files.*

*- Documentation.*

*- Frontend source code.*

*- Component library.*

*- Storybook.*

*- Automated testing.*



*The same token definitions shall be consumed throughout the engineering ecosystem.*



*---*



*# 14. Governance*



*New tokens shall:*



*- Have a documented purpose.*

*- Follow naming conventions.*

*- Avoid duplication.*

*- Preserve semantic consistency.*

*- Remain reusable.*



*Unused tokens shall be deprecated through the governance process.*



*---*



*# 15. Compliance*



*Every visual implementation shall consume Design Tokens.*



*Hardcoded visual values are prohibited unless explicitly approved through an Architecture Decision Record (ADR).*



*---*



*# References*



*- GOV-0000 Portfolio Engineering Standard*

*- GOV-0005 Coding Standards*

*- BRD-1000 Brand Foundation*

*- DS-3000 Design System Foundation*

*- DS-3001 Design Principles*



*---*



*# Related Documents*



*## Previous*



*- DS-3001 Design Principles*



*## Next*



*- DS-3003 Color System*



*## Related*



*- ARC-4000 System Architecture*

*- ARC-4003 Component Architecture*

*- DEV-5000 Development Roadmap*



*---*



*# Revision History*



*| Version | Date | Author | Description |*

*|----------|------|--------|-------------|*

*| 1.0.0 | YYYY-MM-DD | Francisco Javier Sánchez Mariscal | Initial version. |*



*---*



*# Approval*



*This document becomes effective immediately upon approval by the Project Owner.*



*Future revisions shall follow Semantic Versioning principles and shall be documented in the Revision History section.*

