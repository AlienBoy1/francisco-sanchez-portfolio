*# PRD-2006*



*# Information Architecture*



*---*



*# Metadata*



*| Field | Value |*

*|--------|-------|*

*| Document ID | PRD-2006 |*

*| Domain | Product |*

*| Title | Information Architecture |*

*| Project | Francisco Sánchez Portfolio |*

*| Document Type | Product Requirements Document |*

*| Status | Approved |*

*| Version | 1.0.0 |*

*| Owner | Francisco Javier Sánchez Mariscal |*

*| Role | Software Engineer |*

*| Approver | Project Owner |*

*| Last Updated | YYYY-MM-DD |*



*---*



*# 1. Purpose*



*This document defines the Information Architecture (IA) of the Francisco Sánchez Portfolio.*



*Information Architecture establishes the logical organization of the product's information independently of visual design or technical implementation.*



*Its objective is to ensure that users can efficiently locate, understand, and navigate information while supporting long-term scalability and maintainability.*



*---*



*# 2. Information Architecture Principles*



*The architecture shall follow these principles:*



*- User-centered organization.*

*- Progressive disclosure.*

*- Logical grouping.*

*- Consistency.*

*- Discoverability.*

*- Scalability.*

*- Traceability.*

*- Minimal cognitive load.*



*Information shall be organized according to user goals rather than implementation details.*



*---*



*# 3. Information Domains*



*The product information is organized into the following primary domains:*



*```text*

*Home*

*Work (Projects ⊃ Case Studies)*

*About (includes Experience + Skills)*

*Resume*

*Engineering Lab*

*Contact*

*```*



*Each domain represents a distinct area of knowledge.*



*---*



*# 4. Information Hierarchy*



*The portfolio follows a hierarchical information model.*



*```text*

*Portfolio*



*├── Home*

*│*

*├── Work (/projects)*

*│     └── Project Detail (case study embedded)*

*│*

*├── About*

*│     ├── Philosophy*

*│     ├── Experience*

*│     └── Skills*

*│*

*├── Resume*

*│*

*├── Engineering Lab (/lab)*

*│     ├── Technologies*

*│     ├── Docs*

*│     ├── GitHub*

*│     ├── Architecture*

*│     ├── Features*

*│     ├── Traceability*

*│     ├── Search*

*│     └── Analytics*

*│*

*└── Contact*

*```*



*The hierarchy represents conceptual relationships rather than navigation menus.*



*---*



*# 5. Content Classification*



*Content shall be classified according to its primary purpose.*



*| Category | Purpose |*

*|----------|---------|*

*| Informational | Explain concepts and background. |*

*| Professional | Demonstrate experience and skills. |*

*| Technical | Present engineering decisions and implementations. |*

*| Educational | Share knowledge and best practices. |*

*| Reference | Provide documentation and supporting material. |*



*Every content item shall belong to one primary category.*



*---*



*# 6. Navigation Relationships*



*Information shall support multiple navigation paths.*



*Examples include:*



*- Hierarchical navigation.*

*- Contextual navigation.*

*- Cross-references.*

*- Related content.*

*- Search results.*

*- Breadcrumb navigation.*



*Users shall be able to reach important information through more than one path.*



*---*



*# 7. Cross-Referencing*



*Related information shall be interconnected.*



*Examples include:*



*- Projects ↔ Case Studies.*

*- Projects ↔ GitHub.*

*- Case Studies ↔ Documentation.*

*- Documentation ↔ ADRs.*

*- Skills ↔ Projects.*

*- Experience ↔ Technologies.*



*Cross-references shall reduce duplication while improving discoverability.*



*---*



*# 8. Searchability*



*Information shall be structured to support efficient search.*



*Search should allow users to locate:*



*- Projects.*

*- Technologies.*

*- Documents.*

*- Case Studies.*

*- Skills.*

*- Articles.*



*Search shall complement—not replace—the information architecture.*



*---*



*# 9. Content Ownership*



*Every information domain shall have a clearly defined owner.*



*Ownership includes responsibility for:*



*- Accuracy.*

*- Updates.*

*- Versioning.*

*- Consistency.*

*- Quality.*



*Ownership ensures long-term maintainability.*



*---*



*# 10. Scalability*



*The architecture shall support future expansion without requiring structural redesign.*



*New domains, projects, case studies, or documentation categories shall integrate naturally into the existing hierarchy.*



*The IA should remain stable even as the volume of content increases.*



*---*



*# 11. Traceability*



*Every information element should be traceable to its origin.*



*Examples include:*



*- Project → Case Study.*

*- Feature → Documentation.*

*- Requirement → Architecture.*

*- ADR → Implementation.*

*- Resume → Experience.*



*Traceability strengthens consistency and reduces information drift.*



*---*



*# 12. Governance*



*Changes affecting the Information Architecture shall be evaluated for their impact on navigation, documentation, and user experience.*



*Major structural changes require approval and appropriate documentation.*



*---*



*# 13. Compliance*



*All new content introduced into the portfolio shall conform to the Information Architecture defined in this document.*



*Content that cannot be logically classified should not be introduced until the architecture has been formally extended.*



*---*



*# References*



*- GOV-0000 Portfolio Engineering Standard*

*- GOV-0007 Folder Convention*

*- BRD-1007 Personal Brand Strategy*

*- PRD-2000 Product Vision*

*- PRD-2002 Target Audience \& Personas*

*- PRD-2003 User Journey*

*- PRD-2004 Functional Requirements*



*---*



*# Related Documents*



*## Previous*



*- PRD-2005 Non-Functional Requirements*



*## Next*



*- PRD-2007 Feature Catalog*



*## Related*



*- DS-3001 Navigation System*

*- ARC-4000 System Architecture*

*- CNT-6000 About Content*



*---*



*# Revision History*



*| Version | Date | Author | Description |*

*|----------|------|--------|-------------|*

*| 1.0.0 | YYYY-MM-DD | Francisco Javier Sánchez Mariscal | Initial version. |*



*---*



*# Approval*



*This document becomes effective immediately upon approval by the Project Owner.*



*Future revisions shall follow Semantic Versioning principles and shall be documented in the Revision History section.*

