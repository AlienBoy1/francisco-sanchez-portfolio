*# DS-3003*



*# Color System*



*---*



*# Metadata*



*| Field | Value |*

*|--------|-------|*

*| Document ID | DS-3003 |*

*| Domain | Design System |*

*| Title | Color System |*

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



*This document defines the Color System architecture for the Francisco Sánchez Portfolio.*



*The Color System establishes the semantic organization, governance, and usage rules for every color used throughout the application.*



*It does not define a fixed palette of hexadecimal values. Instead, it defines the structure that all present and future color palettes must follow.*



*---*



*# 2. Objectives*



*The Color System aims to:*



*- Ensure visual consistency.*

*- Support light and dark themes.*

*- Improve accessibility.*

*- Simplify maintenance.*

*- Enable future rebranding.*

*- Integrate seamlessly with the Design Token architecture.*

*- Provide predictable semantic color usage.*



*---*



*# 3. Design Philosophy*



*Colors communicate meaning before aesthetics.*



*Every color shall have a defined semantic purpose.*



*Color choices shall reinforce hierarchy, usability, and accessibility rather than decoration.*



*Visual identity shall emerge from semantic consistency.*



*---*



*# 4. Color Architecture*



*The Color System is organized into four hierarchical levels.*



*```text*

*Primitive Colors*

&#x20;       *↓*

*Semantic Colors*

&#x20;       *↓*

*Component Colors*

&#x20;       *↓*

*Application*

*```*



*Each level depends exclusively on the previous level.*



*---*



*# 5. Primitive Colors*



*Primitive Colors represent raw color values.*



*Examples include:*



*- Neutral Scale*

*- Blue Scale*

*- Purple Scale*

*- Green Scale*

*- Red Scale*

*- Yellow Scale*



*Primitive Colors shall never be consumed directly by components.*



*---*



*# 6. Semantic Colors*



*Semantic Colors define functional meaning.*



*Examples include:*



*### Background*



*- Background Primary*

*- Background Secondary*

*- Surface*

*- Overlay*



*### Text*



*- Text Primary*

*- Text Secondary*

*- Text Disabled*

*- Text Inverse*



*### Border*



*- Border Default*

*- Border Subtle*

*- Border Strong*



*### Actions*



*- Primary*

*- Secondary*

*- Accent*



*### Feedback*



*- Success*

*- Warning*

*- Error*

*- Information*



*### Interactive*



*- Hover*

*- Active*

*- Focus*

*- Selected*



*Applications shall consume Semantic Colors rather than Primitive Colors.*



*---*



*# 7. Component Colors*



*Reusable components shall expose their own semantic color tokens.*



*Examples:*



*Button*



*- Background*

*- Text*

*- Border*

*- Hover*

*- Active*

*- Disabled*



*Card*



*- Background*

*- Border*

*- Shadow*



*Navigation*



*- Background*

*- Active Indicator*

*- Divider*



*Badge*



*- Background*

*- Text*

*- Border*



*These tokens shall reference Semantic Colors exclusively.*



*---*



*# 8. Theme Support*



*The Color System shall support multiple themes.*



*Examples include:*



*- Light Theme*

*- Dark Theme*

*- High Contrast Theme*

*- Future Brand Themes*



*Themes shall redefine semantic values without modifying components.*



*---*



*# 9. Accessibility*



*Every color combination shall satisfy accessibility requirements.*



*The system shall target compliance with WCAG AA as a minimum baseline, while striving for WCAG AAA wherever practical.*



*Accessibility considerations include:*



*- Text contrast.*

*- Focus visibility.*

*- Interactive states.*

*- Color independence.*

*- Error recognition.*

*- Disabled state clarity.*



*Accessibility shall never depend solely on color.*



*---*



*# 10. Naming Convention*



*Color Tokens shall use semantic names.*



*Examples:*



*```text*

*color.background.primary*



*color.background.surface*



*color.text.primary*



*color.text.secondary*



*color.border.default*



*color.action.primary*



*color.feedback.success*

*```*



*Token names shall not reference hexadecimal values or implementation details.*



*---*



*# 11. Color Usage Rules*



*The following rules apply to all implementations:*



*- Colors shall be consumed through Design Tokens only.*

*- Primitive Colors shall never be referenced directly by UI components.*

*- Hardcoded hexadecimal values are prohibited.*

*- Components shall expose semantic color APIs.*

*- Theme switching shall not require component modifications.*



*---*



*# 12. Relationship with Design Tokens*



*The Color System is implemented through the Design Token architecture defined in DS-3002.*



*Every color shall exist as an official Design Token.*



*No color may exist outside the token hierarchy.*



*---*



*# 13. Governance*



*New colors shall:*



*- Have a documented purpose.*

*- Follow semantic naming.*

*- Preserve accessibility.*

*- Avoid duplication.*

*- Remain reusable across the system.*



*Deprecated colors shall remain documented until complete removal.*



*---*



*# 14. Compliance*



*Every interface shall use the Color System defined in this document.*



*Any exception requires formal approval through an Architecture Decision Record (ADR).*



*---*



*# References*



*- GOV-0000 Portfolio Engineering Standard*

*- BRD-1000 Brand Foundation*

*- DS-3000 Design System Foundation*

*- DS-3001 Design Principles*

*- DS-3002 Design Tokens*



*---*



*# Related Documents*



*## Previous*



*- DS-3002 Design Tokens*



*## Next*



*- DS-3004 Typography*



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

