*# TMP-1406*



*# AI Prompt Template*



*---*



*# Metadata*



*| Field | Value |*

*|--------|-------|*

*| Document ID | TMP-1406 |*

*| Domain | Templates |*

*| Title | AI Prompt Template |*

*| Project | Francisco Sánchez Portfolio |*

*| Document Type | AI Engineering Template |*

*| Status | Approved |*

*| Version | 1.0.0 |*

*| Owner | Francisco Javier Sánchez Mariscal |*

*| Role | Software Engineer |*

*| Approver | Project Owner |*

*| Last Updated | YYYY-MM-DD |*



*---*



*# 1. Purpose*



*This document defines the official AI Prompt Template used throughout the Francisco Sánchez Portfolio AI-First engineering ecosystem.*



*The template standardizes prompt engineering practices, ensuring that prompts remain reusable, deterministic, maintainable, version-controlled, and compatible across multiple Large Language Models (LLMs).*



*Every production prompt shall be created using this template.*



*---*



*# 2. Objectives*



*The AI Prompt Template aims to:*



*- Standardize prompt creation.*

*- Improve prompt quality.*

*- Reduce ambiguity.*

*- Enable deterministic AI behavior.*

*- Increase prompt reuse.*

*- Preserve prompt traceability.*

*- Support multi-model compatibility.*

*- Facilitate long-term maintenance.*



*---*



*# 3. Prompt Philosophy*



*A prompt is software.*



*Like software, prompts require:*



*- Architecture.*

*- Versioning.*

*- Documentation.*

*- Validation.*

*- Maintenance.*

*- Continuous improvement.*



*Prompts are engineering assets rather than disposable instructions.*



*---*



*# 4. When to Create a Prompt*



*A production prompt shall be created whenever:*



*- An AI workflow is introduced.*

*- An AI Agent performs a recurring task.*

*- A reusable engineering interaction is identified.*

*- AI automation is implemented.*

*- Multiple engineers require consistent AI behavior.*



*Temporary exploratory prompts do not require documentation.*



*---*



*# 5. Standard Structure*



*Every AI Prompt shall include:*



*```*

*Metadata*

*Purpose*

*Role Definition*

*Context*

*Inputs*

*Expected Outputs*

*Constraints*

*Execution Instructions*

*Validation Rules*

*Failure Handling*

*Examples*

*Version Notes*

*```*



*---*



*# 6. Metadata*



*Every prompt shall begin with standardized metadata.*



*Recommended fields include:*



*| Field | Description |*

*|--------|-------------|*

*| Prompt ID | Unique identifier |*

*| Prompt Name | Official name |*

*| Category | Classification |*

*| Owner | Responsible engineer |*

*| Version | Semantic Version |*

*| Status | Draft / Approved |*

*| Supported Models | Compatible LLMs |*



*---*



*# 7. Purpose*



*Describe:*



*- Why the prompt exists.*

*- Intended use.*

*- Engineering objective.*

*- Expected value.*



*Purpose statements shall remain concise.*



*---*



*# 8. Role Definition*



*Clearly define the AI role.*



*Examples:*



*- Senior Software Engineer*

*- Technical Writer*

*- System Architect*

*- Code Reviewer*

*- Documentation Engineer*

*- DevOps Engineer*



*The role shall remain explicit.*



*---*



*# 9. Context*



*Provide every piece of information required before execution.*



*Examples:*



*- Repository context.*

*- Project architecture.*

*- Documentation references.*

*- Constraints.*

*- Technology stack.*

*- Business rules.*



*The prompt shall never rely on implicit assumptions.*



*---*



*# 10. Inputs*



*Document expected inputs.*



*Examples:*



*- Markdown files.*

*- Source code.*

*- JSON.*

*- Requirements.*

*- ADRs.*

*- Specifications.*

*- User instructions.*



*Input formats shall remain explicit.*



*---*



*# 11. Expected Outputs*



*Define expected deliverables.*



*Examples:*



*- Documentation.*

*- Source code.*

*- JSON.*

*- Diagrams.*

*- Reports.*

*- Reviews.*

*- Recommendations.*



*Output expectations shall minimize ambiguity.*



*---*



*# 12. Constraints*



*Specify limitations including:*



*- Coding standards.*

*- Documentation rules.*

*- Formatting requirements.*

*- Security restrictions.*

*- Performance expectations.*

*- Governance requirements.*



*Constraints shall override model assumptions.*



*---*



*# 13. Execution Instructions*



*Describe the execution workflow.*



*Typical sequence:*



*1. Read context.*

*2. Validate inputs.*

*3. Apply engineering standards.*

*4. Generate output.*

*5. Perform self-validation.*

*6. Produce final response.*



*Execution shall remain deterministic.*



*---*



*# 14. Validation Rules*



*The prompt shall define how success is evaluated.*



*Validation may include:*



*- Structural correctness.*

*- Completeness.*

*- Governance compliance.*

*- Architecture alignment.*

*- Output formatting.*

*- AI quality gates.*



*Validation criteria shall be objective.*



*---*



*# 15. Failure Handling*



*Specify behavior when execution cannot continue.*



*Examples:*



*- Missing documentation.*

*- Invalid inputs.*

*- Ambiguous requirements.*

*- Unsupported technology.*

*- Missing dependencies.*



*Failure responses shall remain deterministic.*



*---*



*# 16. Examples*



*Whenever possible include:*



*Example Input*



*Example Output*



*Example Interaction*



*Examples improve prompt consistency.*



*---*



*# 17. Version Notes*



*Every prompt shall document:*



*- Major revisions.*

*- Behavioral changes.*

*- Model compatibility updates.*

*- Deprecated behavior.*



*Prompt evolution shall remain traceable.*



*---*



*# 18. Multi-Model Compatibility*



*Production prompts shall avoid vendor-specific assumptions whenever possible.*



*Prompts should remain compatible with:*



*- ChatGPT*

*- Cursor*

*- Claude*

*- Gemini*

*- GitHub Copilot*

*- Codex*

*- Future LLMs*



*Model-specific behavior shall be documented separately when required.*



*---*



*# 19. AI Operational Contract*



*## Responsibilities*



*Every AI Agent shall:*



*- Execute prompts exactly as documented.*

*- Respect engineering standards.*

*- Preserve deterministic behavior.*

*- Report execution limitations.*

*- Recommend improvements when appropriate.*



*---*



*## Authorized Actions*



*Agents may:*



*- Execute prompts.*

*- Validate prompt completeness.*

*- Recommend prompt optimization.*

*- Suggest clarification.*

*- Produce structured outputs.*



*---*



*## Restricted Actions*



*Agents shall not:*



*- Ignore constraints.*

*- Invent missing context.*

*- Change documented objectives.*

*- Skip validation.*

*- Modify approved prompts without version control.*



*---*



*## Success Criteria*



*The AI Prompt Template is successful when:*



*- Prompt behavior becomes predictable.*

*- AI outputs remain consistent.*

*- Prompt reuse increases.*

*- Cross-model compatibility improves.*

*- Engineering productivity increases.*



*---*



*## Failure Conditions*



*The AI Prompt Template fails when:*



*- Prompts become ambiguous.*

*- AI behavior becomes inconsistent.*

*- Outputs vary unnecessarily.*

*- Governance is ignored.*

*- Prompt maintenance becomes difficult.*



*---*



*## Escalation*



*Significant modifications affecting production prompts shall require review and approval by the Project Owner.*



*---*



*# 20. Governance*



*The AI Prompt Template governs every production prompt within the AI-First engineering ecosystem.*



*Every reusable AI interaction shall be documented using this template before operational use.*



*Future AI orchestration platforms, prompt libraries, engineering assistants, and autonomous agents shall remain compatible with the principles established herein.*



*---*



*# References*



*- AIG-1006 AI Prompt Engineering Standard*

*- AIG-1007 AI Quality Gates*

*- PRM-1300 Prompt Engineering Foundation*

*- PRM-1301 Prompt Architecture*

*- PRM-1304 Prompt Versioning*

*- PRM-1309 Prompt Lifecycle*

*- TMP-1400 Template Foundation*

*- TMP-1401 Document Template*



*---*



*# Related Documents*



*## Previous*



*- TMP-1405 Pull Request Template*



*## Next*



*- TMP-1407 AI Agent Template*



*## Related*



*- Prompt Engineering*

*- AI Governance*

*- AI Agents*

*- Documentation Standards*



*---*



*# Revision History*



*| Version | Date | Author | Description |*

*|----------|------|--------|-------------|*

*| 1.0.0 | YYYY-MM-DD | Francisco Javier Sánchez Mariscal | Initial version defining the official AI Prompt Template for the AI-First engineering ecosystem. |*



*---*



*# Approval*



*This document becomes effective immediately upon approval by the Project Owner.*



*Every reusable production prompt shall be documented using this AI Prompt Template.*



*Future revisions shall follow Semantic Versioning principles and shall be documented in the Revision History section.*

