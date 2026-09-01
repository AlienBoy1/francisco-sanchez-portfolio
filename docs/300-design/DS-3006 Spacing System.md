*# DS-3006*



*# Spacing System*



*---*



*# Metadata*



*| Field | Value |*

*|--------|-------|*

*| Document ID | DS-3006 |*

*| Domain | Design System |*

*| Title | Spacing System |*

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



*This document defines the Spacing System for the Francisco Sánchez Portfolio.*



*The Spacing System establishes the standards governing margins, padding, gaps, layout rhythm, and spatial relationships across the entire application.*



*Consistent spacing improves readability, usability, maintainability, and visual harmony.*



*All spacing values shall originate from the Design Token system.*



*---*



*# 2. Objectives*



*The Spacing System aims to:*



*- Establish consistent spatial rhythm.*

*- Improve readability.*

*- Increase layout consistency.*

*- Simplify responsive design.*

*- Reduce arbitrary spacing decisions.*

*- Support reusable components.*

*- Integrate with the Design Token architecture.*



*---*



*# 3. Spacing Philosophy*



*Whitespace is an intentional design element.*



*Spacing shall communicate hierarchy, grouping, and separation.*



*Additional spacing shall never be added solely for aesthetic preference.*



*Every spatial decision shall have a functional purpose.*



*---*



*# 4. Spacing Architecture*



*The Spacing System follows the hierarchy below.*



*```text*

*Primitive Spacing Tokens*

&#x20;       *↓*

*Semantic Spacing Tokens*

&#x20;       *↓*

*Component Spacing Tokens*

&#x20;       *↓*

*Application*

*```*



*Each level depends exclusively on the previous one.*



*---*



*# 5. Primitive Spacing Scale*



*The system shall define a consistent spacing scale.*



*Representative spacing levels include:*



*- 2XS*

*- XS*

*- SM*

*- MD*

*- LG*

*- XL*

*- 2XL*

*- 3XL*

*- 4XL*



*Actual values shall be defined within the Design Token implementation.*



*Components shall never reference raw pixel values.*



*---*



*# 6. Semantic Spacing*



*Semantic spacing communicates intent rather than size.*



*Examples include:*



*- Section Spacing*

*- Container Padding*

*- Card Padding*

*- Button Padding*

*- Input Padding*

*- Navigation Spacing*

*- Stack Spacing*

*- Inline Spacing*

*- Grid Gap*



*Semantic spacing improves maintainability and readability.*



*---*



*# 7. Layout Rhythm*



*Layouts shall follow a predictable vertical rhythm.*



*The spacing between:*



*- Sections*

*- Headings*

*- Paragraphs*

*- Cards*

*- Lists*

*- Navigation elements*



*shall be determined by the spacing scale.*



*Visual rhythm shall remain consistent across the application.*



*---*



*# 8. Component Spacing*



*Reusable components shall expose spacing through Design Tokens.*



*Examples include:*



*Button*



*- Horizontal Padding*

*- Vertical Padding*

*- Icon Gap*



*Card*



*- Internal Padding*

*- Content Gap*



*Navigation*



*- Item Spacing*

*- Container Padding*



*Modal*



*- Header Padding*

*- Body Padding*

*- Footer Padding*



*Component spacing shall never rely on hardcoded values.*



*---*



*# 9. Responsive Behavior*



*Spacing shall adapt to different viewport sizes.*



*Responsive adjustments shall preserve:*



*- Readability.*

*- Hierarchy.*

*- Visual balance.*

*- Content density.*



*Responsive spacing shall be token-driven.*



*---*



*# 10. Grid Integration*



*The Spacing System shall integrate with the Grid System.*



*Spacing governs:*



*- Gutters*

*- Margins*

*- Columns*

*- Container padding*

*- Alignment offsets*



*Grid spacing shall remain consistent with the spacing scale.*



*---*



*# 11. Accessibility*



*Spacing contributes to accessibility.*



*The system shall provide sufficient spacing for:*



*- Readability.*

*- Interactive targets.*

*- Form controls.*

*- Focus indicators.*

*- Touch interactions.*



*Interfaces shall avoid overcrowded layouts.*



*---*



*# 12. Token Implementation*



*Spacing values shall be implemented through Design Tokens.*



*Examples include:*



*```text*

*spacing.2xs*



*spacing.xs*



*spacing.sm*



*spacing.md*



*spacing.lg*



*spacing.xl*



*spacing.section*



*spacing.container*



*spacing.card*



*spacing.stack*

*```*



*Application code shall consume spacing tokens exclusively.*



*---*



*# 13. Performance*



*The Spacing System shall minimize implementation complexity.*



*The system shall:*



*- Reduce duplicated utility classes.*

*- Encourage reusable layouts.*

*- Support CSS variable generation.*

*- Integrate with utility frameworks where appropriate.*



*Spacing tokens shall remain lightweight and reusable.*



*---*



*# 14. Governance*



*New spacing tokens shall:*



*- Follow the approved scale.*

*- Avoid duplication.*

*- Serve a documented purpose.*

*- Maintain semantic consistency.*



*Unused tokens shall be deprecated through the governance process.*



*---*



*# 15. Compliance*



*Every layout, page, and component shall use the official Spacing System.*



*Hardcoded spacing values are prohibited unless explicitly approved through an Architecture Decision Record (ADR).*



*---*



*# References*



*- GOV-0000 Portfolio Engineering Standard*

*- GOV-0005 Coding Standards*

*- DS-3000 Design System Foundation*

*- DS-3001 Design Principles*

*- DS-3002 Design Tokens*

*- DS-3003 Color System*

*- DS-3004 Typography*

*- DS-3005 Iconography*



*---*



*# Related Documents*



*## Previous*



*- DS-3005 Iconography*



*## Next*



*- DS-3007 Components*



*## Related*



*- ARC-4003 Component Architecture*

*- ARC-4008 Performance Architecture*



*---*



*# Revision History*



*| Version | Date | Author | Description |*

*|----------|------|--------|-------------|*

*| 1.0.0 | YYYY-MM-DD | Francisco Javier Sánchez Mariscal | Initial version. |*



*---*



*# Approval*



*This document becomes effective immediately upon approval by the Project Owner.*



*Future revisions shall follow Semantic Versioning principles and shall be documented in the Revision History section.*

