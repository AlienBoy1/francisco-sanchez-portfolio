*# HTL Operations (`htlsopsadmin`) — Documento de Contexto Completo (0 → 100)*



*| Campo | Valor |*

*|-------|-------|*

*| \*\*Producto\*\* | HTL Operations / HTL OPS |*

*| \*\*Repositorio\*\* | `htlsopsadmin` |*

*| \*\*Versión app (package)\*\* | `0.1.0` |*

*| \*\*Fecha de extracción\*\* | 27 de julio de 2026 |*

*| \*\*Método\*\* | Análisis exhaustivo de código fuente, SQL aditivo, commits, README y notas internas en `docs/` |*

*| \*\*Alcance\*\* | 100 % del contexto técnico/funcional inferible del repositorio; vacíos no inferibles marcados y listados en el Apéndice A |*



*> \*\*Nota de lectura:\*\* Donde el código no permite afirmar un hecho de negocio o de proceso (metodología formal, SLAs contractuales, URLs de producción, etc.), el texto usa la etiqueta \*\*`\[NO INFERIBLE]`\*\* y remite al Apéndice A. El resto es evidencia directa del código o de documentación versionada/local del proyecto.*



*---*



*# MÓDULO 1 — Visión General y Caso de Uso (The "Why")*



*## 1.1 Problema y Solución*



*### Problema que resuelve*



*HTL Operations nace para digitalizar y unificar el \*\*control operativo interno\*\* de procesos empresariales definidos como \*\*SOP (Standard Operating Procedures)\*\* y medidos por \*\*SLA (Service Level Agreements)\*\*. Antes (y en paralelo) coexisten:*



*- Seguimiento disperso de cotizaciones, requisiciones, soporte, proyectos, diseño y tareas administrativas.*

*- Falta de semáforo homogéneo de cumplimiento (verde / amarillo / rojo) basado en \*\*tiempo hábil laboral\*\*.*

*- Ausencia de un buzón único de asignaciones (“Mis tareas”) y de notificaciones cuando se asigna un responsable.*

*- Necesidad de paneles de calidad (SGC), carga de trabajo supervisora y auditoría sin depender de hojas de cálculo o de un SharePoint real como sistema de registro.*



*### Propuesta de valor principal*



*Una \*\*PWA empresarial (SPA)\*\* que concentra:*



*1. \*\*Expedientes SLA\*\* por SOP (`sla\_records` + `form\_data` JSONB + tareas/subtareas cuando aplica).*

*2. \*\*Motor de tiempo hábil\*\* configurable (jornada México, umbrales de semáforo, reglas por SOP).*

*3. \*\*Roles y permisos por SOP\*\*, sesión con hibernación, dispositivos de confianza y Web Push.*

*4. \*\*Dashboard, KPIs, gráficas, exportación Excel/PDF\*\*, admin de usuarios/settings/catálogos y módulo SGC.*

*5. \*\*Bandeja de tareas tipo SharePoint\*\* (modelo interno homónimo, \*\*sin\*\* API Microsoft 365).*



*El `README.md` lo formula así: \*plataforma dedicada al control y monitoreo de operaciones internas empresariales dedicada a la mejora y la gestión de la calidad\*.*



*## 1.2 Público objetivo / Arquetipos de usuario*



*### Roles de perfil (`profiles.role`)*



*| Rol tipado | Alias runtime aceptados | Capacidad típica |*

*|------------|-------------------------|------------------|*

*| `admin` | `administrador`, `administrator` | Acceso total; panel `/admin`; cuenta también como supervisor; puede editar cualquier SOP |*

*| `supervisor` | `supervisora` | Carga de trabajo (`/carga-usuarios`), tareas SharePoint (`/tareas-sharepoint`); defaults de permisos SOP1–6 |*

*| `operador` | — | Operación diaria de SOPs asignados; defaults SOP1–4 |*

*| `visualizador` | — | Lectura / alcance reducido; default solo SOP1 |*



*### Dimensiones adicionales de autorización*



*- \*\*`profiles.sop\_permisos: text\[]`\*\* — lista de claves (`sop1`…`sop12`) o wildcards (`\*`, `all`, `todos`).*

*- \*\*`profiles.area`\*\* — tokens que habilitan borrado privilegiado (calidad, SEO, PM, gerente, etc.) vía `canDeleteSopRecords`.*

*- \*\*Sesión JWT metadata\*\* — `sessionRole` / `sop\_permisos` en `user\_metadata` / `app\_metadata` se unen a los del perfil.*



*### Actores funcionales (arquetipos)*



*| Arquetipo | Qué hace en el sistema |*

*|-----------|------------------------|*

*| Operador de cotizaciones / compras / soporte | Crea y avanza expedientes SOP1/2/5; recibe notificaciones; usa Mis tareas |*

*| PM / líder de proyecto | Gestiona SOP6 (cronograma, etapas, conexiones), ve carga de equipo |*

*| Diseñador / revisor | Opera SOP10 (dual SLA boceto/definitivo, revisiones, PDF cierre) |*

*| Integración / Ingeniería | Consume vistas SOP8/SOP9 (etapas filtradas de SOP6) |*

*| Supervisor | Asigna/visualiza carga agregada SLA + SharePoint; crea tareas workspace |*

*| Administrador de sistema | Usuarios (RPC), system settings, catálogos Feed DB, seed demo, logs |*

*| Usuario de calidad | Navega hub SGC y vistas de medición por módulo |*

*| Visualizador | Consulta limitada según `sop\_permisos` |*



*## 1.3 Alcance del proyecto*



*### Lo que el sistema SÍ hace*



*- Autenticación email/password (Supabase Auth) + sesión remember-me / hibernación / trusted devices (máx. 2: 1 desktop + 1 mobile).*

*- CRUD y flujos de negocio de \*\*SOP1, SOP2, SOP5, SOP6, SOP10\*\* con persistencia real en Supabase.*

*- Vistas derivadas \*\*SOP8 (Ensamble SI)\*\* y \*\*SOP9 (Commissioning)\*\* sobre etapas de SOP6.*

*- UI mock / local para \*\*SOP3, SOP4, SOP7\*\* (sin service layer de persistencia en `src/lib/sop3|4|7`).*

*- Metadata/placeholders de \*\*SOP11 Ventas\*\* y \*\*SOP12 Tráfico\*\* (sin rutas funcionales → NotFound).*

*- Dashboard, gráficas globales y por SOP, Mis tareas (homologación multi-fuente), notificaciones in-app + Web Push.*

*- Admin: usuarios, configuración sistema, alimentar DB/catálogos, datos demo, logs (sesiones, presencia, auditoría SOP, notificaciones).*

*- Workspace tasks “SharePoint-libre”, bridge opcional con etapas SOP6.*

*- Exportación de listados SLA a Excel (ExcelJS) y PDF (pdf-lib).*

*- PWA (Service Worker, offline page, cache Workbox de REST Supabase).*

*- Preferencias de usuario (tema, densidad, dispositivos registrados).*

*- Módulo SGC / Quality (hub + medición UI; umbrales configurables en admin).*



*### Lo que el sistema explícitamente NO hace (o no hace aún)*



*| Fuera de alcance / no implementado | Evidencia |*

*|------------------------------------|-----------|*

*| Backend propio (Express/Nest/API Routes) | Cliente → Supabase directo |*

*| Integración real Microsoft SharePoint / Graph API | Solo UI y tabla `workspace\_tasks` |*

*| SMTP / email transaccional real | Placeholder en Media settings (“sin envío hoy”) |*

*| SOP11 / SOP12 operativos | Solo `sopData` + permisos hasta sop12 |*

*| Persistencia real SOP3 / SOP4 / SOP7 | MOCK\_DATA en componentes |*

*| UI “Control de Permisos” y “Reportes” del Admin | `available: false` / Próximamente |*

*| CI/CD GitHub Actions | No hay workflows |*

*| Contenedores Docker | No hay Dockerfile |*

*| E2E automatizado (Playwright/Cypress) | Ausente |*

*| ORM (Prisma/Drizzle) | `@supabase/supabase-js` + SQL manual |*

*| Migraciones versionadas tipo CLI `supabase/migrations` | Scripts SQL aditivos ejecutados a mano |*



*### Frontera de producto*



*Aplicación \*\*interna autenticada\*\* (no sitio de marketing). SEO tiene prioridad baja frente a installability PWA, seguridad de sesión y operación diaria.*



*---*



*# MÓDULO 2 — Arquitectura y Stack Tecnológico (The "What" \& "Where")*



*## 2.1 Stack detallado*



*### Frontend*



*| Tecnología | Versión / nota | Por qué (evidencia / inferencia razonable) |*

*|------------|----------------|--------------------------------------------|*

*| React | 18.3.1 | UI SPA madura |*

*| TypeScript | ^5.7.3, `strict` | Tipado de form\_data, settings y DB |*

*| Vite | 6.3.5 + `@vitejs/plugin-react-swc` | Build rápido, HMR, SWC |*

*| React Router | `createBrowserRouter` en `src/routes.ts` | Rutas anidadas + lazy |*

*| Tailwind CSS | vía deps + CSS custom | Design system HTL |*

*| Radix UI (suite completa) + CVA/clsx/tailwind-merge | Patrón shadcn-like | Accesibilidad + primitives |*

*| react-hook-form | Formularios multi-step SOP |*

*| recharts | KPIs y gráficas |*

*| exceljs + xlsx | Export Excel profesional / legacy |*

*| pdf-lib | PDF sobre plantillas |*

*| motion | Animaciones UI |*

*| three + @react-three/fiber + drei | Visualizaciones 3D/globe en dashboard |*

*| sonner + next-themes | Toasts y tema (sin Next.js) |*

*| vite-plugin-pwa + workbox-window | PWA, SW, autoUpdate |*

*| Vitest | Tests unitarios de settings/motores |*



*### Backend / datos / edge*



*| Tecnología | Uso |*

*|------------|-----|*

*| Supabase Auth | Login email/password, sesión JWT |*

*| Supabase Postgres | Tablas de dominio + RLS + RPC `admin\_\*` |*

*| Supabase Storage | Buckets `sop1-attachments`, `sop6-attachments`, `sop10-attachments` |*

*| Supabase Edge Function `send-web-push` | Web Push VAPID (`@negrel/webpush` en Deno) |*

*| Realtime / Presence | Presencia de usuarios / auditoría |*



*### Variables de entorno*



*Documentadas en `.env.example`:*



*- `VITE\_SUPABASE\_URL`*

*- `VITE\_SUPABASE\_ANON\_KEY`*

*- `VITE\_VAPID\_PUBLIC\_KEY`*

*- Secrets Edge (no frontend): `VAPID\_PUBLIC\_KEY`, `VAPID\_PRIVATE\_KEY`, `VAPID\_SUBJECT`*

*- Build: `VERCEL\_GIT\_COMMIT\_SHA` / mensajes de commit → `version.json` (vía `vite.config.ts`)*



*## 2.2 Patrón arquitectónico*



*\*\*Monolito frontend modular (feature-oriented SPA) + BaaS (Supabase).\*\**



*No es Clean Architecture formal ni microservicios. Capas de facto:*



*```*

*Browser (PWA / Service Worker)*

&#x20; *└─ React Router (routes.ts) + lazy chunks*

&#x20;      *└─ Contexts: Auth, SystemSettings, Connection, I18n*

&#x20;           *└─ Pages / Components (UI por dominio)*

&#x20;                *└─ lib/\*Service.ts + motores (slaTaskEngine, settings runtime)*

&#x20;                     *└─ supabase-js*

&#x20;                          *├─ Postgres + RLS + RPC*

&#x20;                          *├─ Auth*

&#x20;                          *├─ Storage*

&#x20;                          *└─ Edge Function send-web-push*

*```*



*| Capa | Ubicación | Responsabilidad |*

*|------|-----------|-----------------|*

*| Presentación | `src/components/\*\*`, `src/pages/\*\*` | UI, formularios, paneles |*

*| Orquestación UI | `src/contexts/\*\*`, `src/components/Root.tsx` | Sesión, guards, layout |*

*| Dominio / aplicación | `src/lib/\*\*` | CRUD SOP, notificaciones, exports, settings |*

*| Persistencia | Supabase | SQL, RLS, Storage, Edge |*

*| Infra | Vercel + Supabase cloud | Hosting SPA + BaaS |*



*\*\*Lazy loading:\*\* casi todos los SOP/admin cargan con `React.lazy`.*  

*\*\*Settings:\*\* clave-valor en `system\_settings` con defaults tipados en código (`systemSettings/\*`).*  

*\*\*Tipos DB:\*\* `src/lib/database.types.ts` (parcialmente desactualizado vs SQL/services reales).*



*## 2.3 Infraestructura y despliegue*



*| Pieza | Estado |*

*|-------|--------|*

*| Hosting | \*\*Vercel\*\* (`vercel.json`: SPA rewrite a `/index.html`) |*

*| Headers seguridad | HSTS preload, X-Frame-Options DENY, nosniff, XSS, Referrer-Policy, Permissions-Policy restrictiva |*

*| Cache | `index.html` / `sw.js` no-cache; assets hashed immutable 1 año |*

*| Contenedores | \*\*No\*\* |*

*| Orquestación K8s | \*\*No\*\* |*

*| CI GitHub Actions | \*\*No\*\* (solo `.github/agents/windsurf.agent.md`) |*

*| Deploy inferido | Push a `main` → Vercel (`\[NO INFERIBLE]` URL/proyecto exactos) |*

*| Backend DB | Proyecto Supabase (documentado localmente como “Sops Htl” en notas de push) |*

*| DNS | `\[NO INFERIBLE]` dominio corporativo exacto |*



*### Estructura de carpetas (alto nivel)*



*```*

*htlsopsadmin/*

*├── src/                 # SPA*

*│   ├── components/      # sops, admin, dashboard, layout, auth, quality, workspace, ui…*

*│   ├── contexts/        # Auth, Connection, I18n, SystemSettings*

*│   ├── lib/             # servicios, motores, tipos, export, systemSettings*

*│   ├── pages/           # MisTareas, SGC, workload, workspace, preferencias…*

*│   ├── hooks/, styles/*

*│   ├── routes.ts, App.tsx, main.tsx*

*├── public/              # PWA assets, offline.html, push-handlers.js, templates*

*├── supabase/            # SQL aditivo + Edge Function send-web-push*

*├── scripts/             # logo, VAPID, utilidades*

*├── templates/           # plantillas Word/PDF cierre*

*├── docs/                # documentación local (en .gitignore)*

*├── vite.config.ts, vercel.json, package.json*

*└── build/               # outDir de producción*

*```*



*## 2.4 Modelo de datos*



*### Enfoque*



*SQL \*\*aditivo\*\* en `supabase/\*.sql` ejecutado manualmente en SQL Editor (orden tipificado en `supabase/README.md`: `schema.sql` → `schema\_additions.sql` → scripts por feature). No hay carpeta formal `migrations/` versionada por CLI.*



*### Entidades core y relaciones*



*```*

*auth.users 1──1 profiles*

*profiles 1──\* sla\_records (created\_by)*

*sla\_records 1──\* sla\_tasks 1──\* sla\_subtasks*

*sla\_records.form\_data (JSONB) ── payload específico por SOP*

*profiles 1──\* notifications*

*profiles 1──\* user\_sessions / trusted\_devices / push\_subscriptions*

*profiles 1──\* workspace\_tasks (assignee / created\_by)*

*system\_settings (+ history) ── config global JSON*

*activity\_logs ── auditoría*

*catálogos: sop1 material/servicio, sop2 parts, dynamic\_catalog\_entries*

*```*



*### Tablas / artefactos principales*



*| Artefacto | Archivo(s) SQL | Rol |*

*|-----------|----------------|-----|*

*| `profiles` | `schema.sql` + additions | Usuario app: role, area, sop\_permisos, preferences, presence |*

*| `sla\_records` | `schema.sql` + `sop6\_setup.sql` | Expediente central; `sop\_type` ampliado a sop1–7, sop10 |*

*| `sla\_tasks` / `sla\_subtasks` | `schema.sql` | Árbol de tareas (fuerte en SOP1; también carga admin) |*

*| `notifications` | `schema\_additions.sql` + `notifications\_admin\_select.sql` | In-app (+ espejo push) |*

*| `workspace\_tasks` | `workspace\_tasks.sql` (+ RLS supervisores) | Tareas “SharePoint” |*

*| `system\_settings` | `system\_settings.sql` | Config runtime |*

*| Catálogos | `sop1\_\*\_catalog.sql`, `sop2\_part\_catalog.sql`, `dynamic\_catalog\_entries.sql` | Feed DB |*

*| Adjuntos meta | `sop1\_attachments.sql`, `sop6\_setup.sql`, `sop10\_attachments.sql` | Metadata + Storage |*

*| `activity\_logs`, `user\_sessions` | respectivos SQL | Auditoría / sesiones ERP |*

*| `trusted\_devices`, `push\_subscriptions` | `push\_and\_trusted\_devices.sql` | Keep-alive + push |*

*| RPC admin | `admin\_users.sql` | `admin\_create\_user` / update / delete (SECURITY DEFINER) |*

*| Presets / retención | `admin\_sop\_presets.sql`, `audit\_retention.sql` | Admin |*



*### Semántica de estados SLA (tareas)*



*`sla\_status` ∈ `abierta` | `abiertaFueraSLA` | `completada` | `sinCompletarFueraSLA`.*



*### Semáforo de expediente*



*`sla\_color` ∈ `verde` | `amarillo` | `rojo` (umbral amarillo configurable, default 85 % del tiempo).*



*### Nota de tipado*



*`database.types.ts` \*\*no refleja\*\* todas las tablas modernas ni el shape real de `form\_data` de SOP1/2/5/6/10 (services tipan localmente interfaces más ricas).*



*---*



*# MÓDULO 3 — Requerimientos Funcionales y No Funcionales (The "Rules")*



*## 3.1 Requerimientos Funcionales (por rol)*



*### RF-AUTH — Autenticación y sesión*



*| ID | Descripción | Roles |*

*|----|-------------|-------|*

*| RF-A1 | Login email/password vía Supabase | Todos |*

*| RF-A2 | Opción “Mantener sesión activa en este dispositivo” (keep-alive → localStorage; si no → sessionStorage) | Todos |*

*| RF-A3 | Timeout de inactividad: prompt → hibernación (keep-alive) o logout | Todos |*

*| RF-A4 | Hibernación: Auth viva, UI bloqueada; unlock con reingreso de password | Keep-alive |*

*| RF-A5 | Trusted devices: máx. 1 desktop + 1 mobile; conflicto → reemplazo | Keep-alive |*

*| RF-A6 | Logout manual no borra trusted\_devices ni push\_subscriptions | Todos |*

*| RF-A7 | Reautenticación para acciones sensibles (`SecureActionDialog` + `verifyUserPassword`) | Según acción |*

*| RF-A8 | Redirect a `/login` si no hay sesión (`Root`) | Todos |*



*### RF-NAV — Navegación y shell*



*| ID | Descripción |*

*|----|-------------|*

*| RF-N1 | Layout autenticado: Sidebar + banners (conexión, iOS install, session lock) |*

*| RF-N2 | Dashboard index `/` con módulos SOP filtrados por permisos |*

*| RF-N3 | Rutas SOP overview / slas / detail / kpis (patrón común) |*

*| RF-N4 | Preferencias `/perfil-preferencias`; actualización app `/actualizacion-app` |*

*| RF-N5 | 404 `NotFound` para rutas inexistentes (incl. sop11/sop12) |*



*### RF-SOP1 — Cotizaciones*



*| ID | Comportamiento |*

*|----|----------------|*

*| RF-S1-1 | Crear/editar expediente cotización con clasificaciones S1–S3 y tiempos configurables |*

*| RF-S1-2 | Gestionar tareas/subtareas en `sla\_tasks`/`sla\_subtasks` con timers por tarea |*

*| RF-S1-3 | Catálogos material/servicio; adjuntos Storage |*

*| RF-S1-4 | Avances, borradores pendientes, cola offline (`sop1:update`, `sop1:formDataNotif`) |*

*| RF-S1-5 | Notificar responsables al integrar avances |*

*| RF-S1-6 | Overview, listado, detalle, adjuntos, KPIs, export |*



*### RF-SOP2 — Requisiciones*



*| ID | Comportamiento |*

*|----|----------------|*

*| RF-S2-1 | Expediente con dual SLA (colocación + entrega) y fases de workflow |*

*| RF-S2-2 | Part numbers / catálogo; import por paste; recepción por parte (optimistic UI) |*

*| RF-S2-3 | Registrar fechas post-colocación; notificar responsable entrega interna |*

*| RF-S2-4 | KPIs, export, histórico overlay |*



*### RF-SOP3 / SOP4 / SOP7 — Material / Préstamo / Fabricación*



*| ID | Comportamiento |*

*|----|----------------|*

*| RF-S347-1 | UI completa de listado/detalle/overview con \*\*datos mock locales\*\* |*

*| RF-S347-2 | Panel de “conectadas” a SOP6 donde aplica |*

*| RF-S347-3 | KPIs marcados próximamente (3/4); export sobre datos locales |*

*| RF-S347-4 | \*\*No\*\* persisten a `sla\_records` vía service layer dedicado |*



*### RF-SOP5 — Soporte / Servicio / Mantenimiento*



*| ID | Comportamiento |*

*|----|----------------|*

*| RF-S5-1 | Tickets con variantes (soporte/servicio/mantenimiento), clasificación S1–S3, categoría, historia |*

*| RF-S5-2 | Campos opcionales PO y Orden de venta (prefijo default `ORD-VTA-` + identificador) |*

*| RF-S5-3 | Panel de avances; timer/color por `fechaCompromiso` |*

*| RF-S5-4 | Notificar al crear/cambiar `asignadoA` |*

*| RF-S5-5 | KPIs implementados; export |*



*### RF-SOP6 — Ciclo de proyectos*



*| ID | Comportamiento |*

*|----|----------------|*

*| RF-S6-1 | Proyecto con RACI, etapas, timers kickoff/cierre configurables |*

*| RF-S6-2 | Vista Gantt + PDF Gantt; registrar avances; adjuntos |*

*| RF-S6-3 | Conexiones a otros SOP / tareas SharePoint (`sop6SharePointBridge`) |*

*| RF-S6-4 | Notificar responsables RACI y de etapas nuevas en update |*

*| RF-S6-5 | Fuente de verdad para vistas SOP8/SOP9 |*



*### RF-SOP8 / SOP9 — Ensamble SI / Commissioning*



*| ID | Comportamiento |*

*|----|----------------|*

*| RF-S89-1 | No crean `sop\_type` propio; filtran etapas SOP6 por aliases de departamento |*

*| RF-S89-2 | KPIs/filtros SLA; SOP8 usa tolerancia de ensamble configurable (default 10 %) |*



*### RF-SOP10 — Diseño*



*| ID | Comportamiento |*

*|----|----------------|*

*| RF-S10-1 | Wizard multi-step; dual SLA (boceto fijo \~3d configurable + definitivo) |*

*| RF-S10-2 | Notificar diseñador/PM al crear; reasignación de encargados |*

*| RF-S10-3 | Revisiones por área; adjuntos; informe PDF de cierre |*

*| RF-S10-4 | Timers `requestTimer` + `definitiveTimer` en `form\_data` |*



*### RF-TAREAS — Mis tareas y asignaciones*



*| ID | Comportamiento |*

*|----|----------------|*

*| RF-T1 | Unificar fuentes: `sla\_tasks`/`sla\_subtasks` + asignaciones virtuales en form\_data (SOP2/5/6/10) + `workspace\_tasks` |*

*| RF-T2 | Orden: próximas a vencer arriba |*

*| RF-T3 | 4 cards medidoras propias del usuario: en progreso dentro/fuera SLA; completada dentro/fuera SLA |*

*| RF-T4 | Filtros por SOP y por estado |*



*### RF-NOTIF — Notificaciones*



*| ID | Comportamiento |*

*|----|----------------|*

*| RF-NT1 | Insertar en `notifications` al asignar responsable (centralizado `notifyAssignees`) |*

*| RF-NT2 | Fallo de notificación no debe abortar guardado del SLA |*

*| RF-NT3 | Espejo Web Push vía Edge Function; click abre buzón y resalta ítem |*

*| RF-NT4 | Banner iOS “Agregar a Inicio” si no standalone |*

*| RF-NT5 | Admin puede auditar leídas/no leídas por usuario (RLS admin select) |*



*### RF-WS — Workspace SharePoint-libre*



*| ID | Comportamiento |*

*|----|----------------|*

*| RF-WS1 | CRUD `workspace\_tasks` para supervisores/admin (+ asignados/creadores según RLS) |*

*| RF-WS2 | Filtros, estados, asignación a perfil; notificar assignee |*

*| RF-WS3 | Visible en carga de trabajo y Mis tareas |*



*### RF-SUP — Supervisión*



*| ID | Comportamiento |*

*|----|----------------|*

*| RF-SU1 | `/carga-usuarios`: agregación SLA + SP por usuario |*

*| RF-SU2 | Detalle por usuario; crear tareas/subtareas admin con notificación |*



*### RF-ADM — Administración*



*| ID | Comportamiento |*

*|----|----------------|*

*| RF-AD1 | Gestión usuarios vía RPC admin |*

*| RF-AD2 | System config: SLA global, sesiones, SLA por SOP, roles/acceso, SGC, workspace, media, catálogos, org |*

*| RF-AD3 | Feed DB / catálogos habilitados; seed demo (`is\_demo`) |*

*| RF-AD4 | Logs: sesiones, presencia, auditoría SOP, notificaciones |*

*| RF-AD5 | Control de Permisos UI y Reportes: \*\*próximamente\*\* |*



*### RF-SGC — Calidad*



*| ID | Comportamiento |*

*|----|----------------|*

*| RF-SG1 | Hub `/quality` con 7 módulos (proyectos, diseño, SI, commissioning, tráfico, calidad, postventa) |*

*| RF-SG2 | Vista de medición con gauges, fórmulas, protocolos; umbrales admin (semáforo normal/inverso) |*



*### RF-EXP — Exportación*



*| ID | Comportamiento |*

*|----|----------------|*

*| RF-EX1 | Diálogo compartido Excel/PDF con logo, meta, secuencia diaria por SOP |*

*| RF-EX2 | Excel: freeze, AutoFilter, zebra; PDF: plantilla + cards |*



*## 3.2 Requerimientos No Funcionales*



*### Rendimiento y escalabilidad*



*| ID | Requisito (evidencia / expectativa) |*

*|----|-------------------------------------|*

*| RNF-P1 | Code splitting por ruta (`React.lazy`) para reducir TTI de módulos SOP |*

*| RNF-P2 | Chunks vendor manuales en Vite |*

*| RNF-P3 | Cache agresivo de assets hashed en Vercel |*

*| RNF-P4 | Workbox NetworkFirst (\~5s) para REST Supabase en PWA |*

*| RNF-P5 | `\[NO INFERIBLE]` SLO formal de latencia (p95 API) o usuarios concurrentes objetivo |*

*| RNF-P6 | Volumen: modelo “expedientes JSONB + índices por sop\_type/status/created\_at”; sin particionado documentado |*



*### Seguridad*



*| ID | Control |*

*|----|---------|*

*| RNF-S1 | Auth JWT Supabase; anon key en cliente (esperado); seguridad vía RLS |*

*| RNF-S2 | RBAC por `role` + lista `sop\_permisos` (+ wildcards) |*

*| RNF-S3 | TLS en tránsito (HTTPS Vercel/Supabase); HSTS preload |*

*| RNF-S4 | Headers: DENY framing, nosniff, XSS mode block, Permissions-Policy restrictiva |*

*| RNF-S5 | Reauth password para acciones sensibles |*

*| RNF-S6 | Hibernación + trusted devices limita superficie de keep-alive |*

*| RNF-S7 | RLS endurecido en `security\_hardening.sql` (ownership tasks vía record) |*

*| RNF-S8 | \*\*Riesgo documentado:\*\* RPC admin puede mantener snapshot cifrado de password en `profiles.admin\_password\_enc` |*

*| RNF-S9 | \*\*Riesgo documentado:\*\* Edge Function / artefactos VAPID — claves deben vivir solo en secrets; rotar si se filtraron |*

*| RNF-S10 | Sin CSP configurada (`\[MEJORA]`) |*

*| RNF-S11 | Protección SQLi: cliente usa API parametrizada Supabase (no SQL crudo desde browser) |*

*| RNF-S12 | XSS: React escaping por defecto; adjuntos/contenido rich requieren vigilancia |*



*### Disponibilidad, tolerancia a fallos y observabilidad*



*| ID | Control |*

*|----|---------|*

*| RNF-D1 | Offline parcial: cola `offlineSyncService` (principalmente SOP1) + banner Connection |*

*| RNF-D2 | ErrorBoundary en `main.tsx` |*

*| RNF-D3 | Activity logs + retención configurable |*

*| RNF-D4 | `\[NO INFERIBLE]` RPO/RTO formales; backups = los de Supabase plan contratado |*

*| RNF-D5 | Telemetría externa (Sentry/Datadog): no presente en deps |*

*| RNF-D6 | Notificaciones: fallo no bloquea persistencia de negocio |*



*### Usabilidad / compatibilidad*



*| ID | Control |*

*|----|---------|*

*| RNF-U1 | Responsive móvil/tablet/desktop (directriz explícita en instrucciones internas) |*

*| RNF-U2 | PWA installable; guía iOS |*

*| RNF-U3 | i18n context presente |*

*| RNF-U4 | Documentación de compatibilidad en `src/BROWSER\_COMPATIBILITY.md` |*



*---*



*# MÓDULO 4 — Catálogo de Funcionalidades (The "How it works")*



*## 4.1 Funciones estándar (CRUD y básicas)*



*### Usuarios y perfiles*



*1. Trigger `handle\_new\_user` crea fila en `profiles` al insertar en `auth.users`.*

*2. Admin crea/actualiza/elimina usuarios vía RPC `admin\_\*` (`adminUserService.ts`).*

*3. Usuario edita preferencias (tema, densidad, etc.) sincronizadas local + columna preferences.*

*4. Presencia / status de perfil para panel de auditoría.*



*### Configuración*



*- `systemSettingsService` lee/escribe `system\_settings`.*

*- Secciones runtime: jornada/SLA global, sesiones, SLA por SOP, access, SGC, workspace, media, catalogs, org.*

*- Defaults en código si falta fila DB.*



*### Navegación básica*



*Login → Dashboard → Overview SOP → Listado SLAs → Detalle → (Adjuntos / Gantt / Revisiones / KPIs).*  

*Guards: `AdminRoute`, `AdminWorkloadRoute`, `WorkspaceTasksRoute`.*



*## 4.2 Funcionalidades avanzadas y core business logic*



*### 4.2.1 Motor de tiempo hábil (`slaTaskEngine.ts`)*



*\*\*Entrada:\*\* timestamps, jornada laboral (`workStart`, lunch, `workEnd`), días hábiles, target en días/horas.*  

*\*\*Proceso:\*\**



*1. Calcula milisegundos hábiles transcurridos (`getBusinessElapsedMs`).*

*2. Proyecta deadlines (`addBusinessLaborMs`).*

*3. Evalúa restante (`getBusinessRemainingMs`).*

*4. Normaliza estados de timer idle/running/paused (`getElapsedMs`).*

*5. Deriva estado efectivo (`computeEffectiveStatus`).*



*\*\*Salida:\*\* color semáforo vía `resolveSlaTrafficColor(pct)` (rojo ≥100 %, amarillo ≥ umbral, else verde).*  

*\*\*Defaults globales:\*\* Lun–Vie, umbral 85 %, TZ `America/Mexico\_City`, jornada típica 8–12 / 13–17 (8 h).*



*### 4.2.2 Flujo genérico de expediente SLA*



*```*

*Usuario con canEditSop(sopN)*

&#x20; *→ Formulario / wizard*

&#x20; *→ Service create/update → insert/update sla\_records (form\_data JSONB)*

&#x20; *→ (opcional) sla\_tasks / subtasks / storage*

&#x20; *→ notifyAssignees (best effort)*

&#x20; *→ dispatchWebPush → Edge Function*

&#x20; *→ UI refresca listado + Mis tareas del asignado*

*```*



*### 4.2.3 SOP1 — Cotizaciones (persistente)*



*- Clasificaciones y días por tipo (estándar/proyecto/S1–S3) desde `sopSlaRuntime`.*

*- Timers embebidos en `form\_data.taskTimers`.*

*- Offline queue específica.*

*- Adjuntos bucket `sop1-attachments`.*



*### 4.2.4 SOP2 — Requisiciones dual SLA*



*- SLA colocación + SLA entrega con límites nominales (48h/24h + rol coordinador en settings).*

*- Workflow por fases; recepción de partes con UI optimista.*

*- Catálogo de part numbers; importación masiva por pegado.*



*### 4.2.5 SOP5 — Tickets*



*- Variantes de negocio; historia de avances.*

*- PO / Orden de venta (`ORD-VTA-{id}`).*

*- \*\*Nota técnica:\*\* settings admin S1/S2/S3 (`getSop5SlaLimits`) existen pero el color/timer operativo usa `fechaCompromiso` (config parcialmente huérfana).*



*### 4.2.6 SOP6 — Proyecto + Gantt + conexiones*



*- Etapas con responsables; stage-gate.*

*- Gantt UI + export PDF.*

*- Conecta etapas a otros SOP o a `workspace\_tasks`.*

*- Alimenta extractores SOP8/SOP9 por aliases de departamento.*



*### 4.2.7 SOP8 / SOP9 — Vistas derivadas*



*```*

*sla\_records sop\_type=sop6*

&#x20; *→ parse etapas\[]*

&#x20; *→ filtrar por aliases (Integración vs Ingeniería/Diseño)*

&#x20; *→ listado/KPIs como si fueran SOP propios*

*```*



*### 4.2.8 SOP10 — Dual SLA diseño*



*Documentado en `ARCHITECTURE\_SOP10.md`:*



*1. Crear petición → notifica diseñador + PM → inicia SLA boceto.*

*2. Completar boceto → habilita campos de compromiso final.*

*3. SLA definitivo independiente → revisiones → cierre + PDF.*



*### 4.2.9 Mis tareas (homologación)*



*`myTasksService.fetchMyAssignedTasks`:*



*1. Lee tareas/subtareas reales por `owner` (match de nombre).*

*2. Extrae asignaciones virtuales de form\_data SOP2/5/6/10.*

*3. Une `workspace\_tasks` por `assignee\_profile\_id`.*

*4. Ordena por proximidad a vencimiento; calcula 4 buckets de estado.*



*### 4.2.10 Web Push + hibernación*



*1. Usuario keep-alive + trusted device → suscripción Push en DB.*

*2. `notificationService` inserta fila + invoca Edge `send-web-push`.*

*3. SW (`public/push-handlers.js`) muestra notificación.*

*4. Click → enfoca PWA, abre buzón, highlight CSS.*

*5. Si hibernando → lock de password antes de interactuar.*



*### 4.2.11 Export Excel/PDF*



*`SlaExportDialog` → `buildExportRows` → `slaExportExcel` / `slaExportPdf` → filename con secuencia diaria `localStorage`.*



*### 4.2.12 Admin Feed DB / Demo*



*- Catálogos habilitados por settings; shells SOP1–12 (solo los con catálogo enabled son “available”).*

*- Seed demo marca `is\_demo` y registra `demo\_seed\_meta`.*



*## 4.3 Edge cases (casos borde)*



*| Caso | Comportamiento del sistema |*

*|------|----------------------------|*

*| Sin red | Banner Connection; SOP1 puede encolar updates; otros SOP dependen de online |*

*| Fallo al notificar | Se loguea/traga error; el SLA se guarda igual |*

*| Dos usuarios editan mismo expediente | Last-write-wins (sin optimistic locking / ETag) |*

*| Keep-alive + inactividad | Hibernación (no logout); draft autosave event `htl:auto-save-drafts` |*

*| Sin keep-alive + inactividad | Logout |*

*| Segundo dispositivo mismo class | Modal de reemplazo; se invalidan push del anterior |*

*| Logout manual | Sesión Auth limpia; trusted/push \*\*permanecen\*\* en DB |*

*| Owner de tarea como string | Match exacto de nombre; inconsistencias de naming pueden ocultar tareas en Mis tareas |*

*| SOP3/4/7 “crear” | Solo estado local mock; no hay fila DB |*

*| SOP8/9 sin etapas matching | Listas vacías / sin KPIs útiles |*

*| Alias de rol en español/inglés | Normalización en AuthContext |*

*| Wildcard en sop\_permisos | Acceso a todos los SOP configurados |*

*| iOS sin PWA instalada | Banner instalación; push limitado por WebKit |*

*| Admin lee notificaciones ajenas | Requiere política SQL `notifications\_admin\_select.sql` aplicada |*

*| Tipos TS desalineados | Compila con interfaces locales en services; riesgo de drift |*

*| Export secuencia | Contador diario por SOP en localStorage del navegador |*



*---*



*# MÓDULO 5 — Metodología e Implementación (The "Process")*



*## 5.1 Ciclo de vida de desarrollo*



*\*\*Evidencia en repo / notas internas:\*\**



*- Desarrollo \*\*iterativo e independiente / semi-ágil\*\*, impulsado por objetivos diarios documentados en `docs/` (ej. `Objetivos del dia 20JUL2026.txt`, requerimientos puntuales SOP5).*

*- Instrucciones de diseño: mantener lenguaje visual existente, 100 % responsive, cambios “nativos” a la app.*

*- Documentación de implementación embebida en los mismos archivos de objetivos tras cada entrega (estilo narrativo sin caracteres especiales, por preferencia del autor).*



*\*\*`\[NO INFERIBLE]`:\*\* si existe Scrum formal con sprints/ceremonias, board Jira/Linear, o un único Product Owner corporativo externo al autor.*



*## 5.2 Flujo de control de versiones*



*| Aspecto | Evidencia |*

*|---------|-----------|*

*| Rama principal | `main` (tracking `origin/main`) |*

*| Feature branches | Ej. `feature/web-push-hibernacion-dispositivos` |*

*| Estilo aparente | Trunk-ish + feature branches cortas; \*\*no\*\* GitFlow completo documentado |*

*| Commits | Mensajes en español, descriptivos del “qué/para qué”; a veces series `.1/.2/.3` de la misma feature |*

*| PR / code review | Remotes de Copilot presentes; \*\*`\[NO INFERIBLE]`\*\* política obligatoria de review humano |*

*| `docs/` | En `.gitignore` → documentación local no necesariamente versionada |*



*## 5.3 Calidad y testing*



*| Tipo | Herramienta / estado |*

*|------|----------------------|*

*| Unitarias | Vitest — 12 archivos `\*.test.ts` (systemSettings types, export filename, SOP2 SLA engine, SOP8 service) |*

*| Integración API | No automatizada en CI |*

*| SQL caja blanca/negra | Scripts manuales `pruebas\_caja\_blanca.sql`, `pruebas\_caja\_negra.sql` |*

*| E2E | Ausente |*

*| Lint/format | ESLint/Prettier \*\*no\*\* configurados en proyecto |*

*| Typecheck | TypeScript strict en build |*

*| Cobertura | Baja respecto al tamaño del monólito SPA |*



*## 5.4 CI/CD*



*| Etapa | Estado |*

*|-------|--------|*

*| GitHub Actions | \*\*No existe\*\* |*

*| Deploy | Inferido: Vercel al integrar el repo (build `vite build`, outDir `build/`) |*

*| Migrations DB | Manuales en SQL Editor |*

*| Edge Functions | Deploy manual Supabase CLI/Dashboard |*

*| Versionado cliente | `version.json` desde SHA/mensaje de commit en build |*



*---*



*# MÓDULO 6 — Desafíos Técnicos, Decisiones de Diseño y Evolución*



*## 6.1 Trade-offs y decisiones críticas*



*| Decisión | Alternativa descartada (implícita) | Por qué conviene / costo |*

*|----------|-----------------------------------|---------------------------|*

*| SPA Vite + Supabase BaaS | Next.js full-stack / API propia | Velocidad de entrega; seguridad delegada a RLS; menos control server-side |*

*| `form\_data` JSONB polimórfico | Tablas rígidas por SOP | Flexibilidad multi-SOP; costo: tipado débil, queries JSON más complejas |*

*| SOP8/9 como vistas de SOP6 | Tablas/expedientes propios | Evita duplicar cronograma; acoplamiento a calidad de `departamento` en etapas |*

*| SOP3/4/7 mock primero | Persistencia completa day-1 | UI/navegación lista; deuda de cableado DB |*

*| SharePoint-libre interno | Graph API Microsoft | Independencia de licenciamiento/tenant; naming confuso para stakeholders |*

*| Keep-alive + hibernación + password lock | Sesión corta estricta / refresh tokens complejos | Push continuo + seguridad UX; complejidad de dispositivos |*

*| SQL aditivo manual | Migraciones CLI versionadas | Simple en un solo entorno; riesgo de drift entre ambientes |*

*| Web Push Edge Function | Solo in-app | Paridad móvil/desktop; requiere VAPID + SW + iOS caveats |*

*| Admin RPC SECURITY DEFINER | Solo Dashboard Auth | UX admin en-app; superficie de privilegio alta |*

*| Settings en DB + defaults código | Solo env vars / hardcode | Tunable sin redeploy; necesita UI admin madura |*



*## 6.2 Cuellos de botella superados (evidencia en historial/código)*



*1. \*\*Notificaciones de asignación multi-SOP\*\* — Centralización en `notifyAssignees` + resolución nombre→UUID; cableado SOP1/2/5/6/10 + SP + carga admin (20-jul-2026).*

*2. \*\*Mis tareas incompletas\*\* — Homologación de tareas reales + virtuales + SharePoint con orden por vencimiento y 4 cards de estado.*

*3. \*\*Web Push + iOS\*\* — SW handlers, Edge Function, banner install, highlight de buzón.*

*4. \*\*Sesión vs push\*\* — Modelo hibernación (Auth viva + UI lock) en lugar de logout que mataba push.*

*5. \*\*Dispositivos de confianza\*\* — Límite 2 (desktop+mobile), transferencia con limpieza de push previo.*

*6. \*\*Export profesional\*\* — ExcelJS/pdf-lib con plantillas, branding y secuencias.*

*7. \*\*Responsividad móvil\*\* — Serie de commits dedicados a full responsive / preferencias.*

*8. \*\*SOP10 dual timer\*\* — Arquitectura documentada de timers independientes boceto/definitivo.*

*9. \*\*Auditoría admin de notificaciones\*\* — Nueva pestaña + política RLS SELECT admin.*



*## 6.3 Deuda técnica y roadmap futuro*



*### Deuda técnica observable*



*| Ítem | Severidad |*

*|------|-----------|*

*| SOP3 / SOP4 / SOP7 sin persistencia real | Alta (funcional) |*

*| SOP11 / SOP12 solo metadata | Media |*

*| `database.types.ts` desactualizado vs services/SQL | Media |*

*| Settings SOP5 S1–S3 no cableadas al motor de color | Media |*

*| Sin optimistic locking en updates concurrentes | Media |*

*| Offline sync limitado a SOP1 | Media |*

*| Sin ESLint/Prettier / CI | Media |*

*| Cobertura de tests baja | Media |*

*| Admin “Control de Permisos” y “Reportes” placeholder | Baja–Media |*

*| Dependencias con versión `"\*"` | Baja (reproducibilidad) |*

*| Posible secreto VAPID en artefactos / historial | Alta (seguridad) si aplica |*

*| `docs/` gitignored → conocimiento no portable en clones limpios | Media (proceso) |*

*| Stats de `sopData.ts` estáticos (demo) en dashboard | Baja–Media (precisión) |*

*| SGC hub con stats en cero / medición más UI que pipeline de datos vivos | Media |*



*### Roadmap inferido (V2 / V3) a partir de código y notas*



*\*\*V2 (corto plazo, ya parcialmente en curso):\*\**



*- Completar cableado DB de SOP3/4/7.*

*- Implementar SOP11/SOP12 o retirar placeholders.*

*- UI avanzada de Control de Permisos y Reportes admin.*

*- Unificar motor SLA SOP5 con settings admin.*

*- Ampliar offline sync a más SOP.*

*- CSP + higiene de secretos + tipado DB regenerado.*



*\*\*V3 (evolución de producto):\*\**



*- Integración real Microsoft 365 / SharePoint Online \*\*si\*\* el negocio lo exige (hoy explícitamente no).*

*- Email SMTP transaccional (hoy placeholder).*

*- CI (lint + test + typecheck) en PRs.*

*- Migraciones versionadas Supabase.*

*- E2E críticos (login, crear SLA, asignación, push).*

*- Observabilidad (errores cliente + uptime).*

*- Posible extracción de workers para reportes pesados / retención.*



*\*\*`\[NO INFERIBLE]`:\*\* priorización oficial de negocio, fechas commitment, presupuesto o organigrama de ownership (los commits mencionan reiteradamente “agregarme al organigrama” como bloqueo organizacional, no técnico).*



*---*



*# Apéndice A — Preguntas deep-dive (vacíos críticos no inferibles)*



*Estas preguntas \*\*no bloquean\*\* este documento (queda cerrado 0→100 con evidencia de código). Responderlas permite una \*\*addenda de negocio/proceso\*\* sin reescribir los módulos técnicos.*



*### Negocio y alcance (Módulo 1)*



*1. ¿Cuál es el nombre legal/comercial de la empresa usuaria y el dominio de producción de la PWA?*

*2. ¿Qué procesos siguen fuera de HTL OPS (Excel, SharePoint real, ERP) y cuáles deben migrar sí o sí?*

*3. ¿SOP11/SOP12 están comprometidos para una fecha, o son placeholders permanentes?*

*4. ¿SOP3/4/7 mock son “demo de UI” aceptada en prod o se consideran incompletos para go-live?*



*### Arquitectura e infra (Módulo 2)*



*5. ¿IDs exactos de proyecto Vercel y Supabase (región, plan)?*

*6. ¿Existe ambiente staging separado o solo prod + local?*

*7. ¿Política de backups/PITR de Supabase contratada y frecuencia de restauración probada?*



*### RNF (Módulo 3)*



*8. ¿Hay SLOs numéricos (ej. p95 \&lt; 2s, 99.5 % uptime, N usuarios concurrentes)?*

*9. ¿Política formal de retención de `activity\_logs` / notificaciones / adjuntos?*

*10. ¿Requisitos de cumplimiento (ISO, cliente, auditoría externa) que el SGC debe satisfacer?*



*### Proceso (Módulo 5)*



*11. ¿Metodología oficial (Scrum/Kanban/otro) y cadencia?*

*12. ¿Quién aprueba PRs además del autor? ¿Obligatorio review?*

*13. ¿Definition of Done (tests mínimos, SQL aplicado, doc en `docs/`)?*



*### Decisiones y roadmap (Módulo 6)*



*14. ¿Por qué se eligió “SharePoint-libre” en lugar de Graph API (costo, tiempo, política IT)?*

*15. ¿Se planea eliminar el almacenamiento de password snapshots en admin RPC?*

*16. ¿Top 5 features priorizadas post-julio 2026 con owner y fecha?*



*---*



*# Apéndice B — Inventario rápido de archivos ancla*



*```*

*package.json*

*vite.config.ts*

*vercel.json*

*.env.example*

*README.md*

*ARCHITECTURE\_SOP10.md*

*src/routes.ts*

*src/App.tsx / src/main.tsx / src/components/Root.tsx*

*src/contexts/AuthContext.tsx*

*src/lib/supabase.ts*

*src/lib/database.types.ts*

*src/lib/slaTaskEngine.ts*

*src/lib/sopData.ts*

*src/lib/notificationService.ts*

*src/lib/myTasksService.ts*

*src/lib/offlineSyncService.ts*

*src/lib/sop1|sop2|sop5|sop6|sop8|sop9|sop10/\**

*src/lib/export/slaExportExcel.ts*

*src/lib/systemSettings/\**

*src/components/admin/AdminPanel.tsx*

*supabase/schema.sql*

*supabase/schema\_additions.sql*

*supabase/workspace\_tasks.sql*

*supabase/push\_and\_trusted\_devices.sql*

*supabase/functions/send-web-push/*

*docs/Objetivos del dia 20JUL2026.txt*

*docs/INSTRUCCIONES DE DESARROLLO Y OBJETIVOS DE REFRACTORIZACIÓN.txt*

*docs/AUDITORIA\_COMPLETA.md*

*```*



*---*



*# Apéndice C — Mapa de rutas funcionales*



*| Ruta | Módulo |*

*|------|--------|*

*| `/login` | Auth |*

*| `/` | Dashboard |*

*| `/sop1-cotizaciones/\*\*` | SOP1 |*

*| `/sop2-requisiciones/\*\*` | SOP2 |*

*| `/sop3-control-material/\*\*` | SOP3 (mock) |*

*| `/sop4-prestamo-demo/\*\*` | SOP4 (mock) |*

*| `/sop5-soporte/\*\*` | SOP5 |*

*| `/sop6-ciclo-proyectos/\*\*` | SOP6 |*

*| `/sop7-fabricacion/\*\*` | SOP7 (mock) |*

*| `/sop8-ensamble/\*\*` | SOP8 (derivado) |*

*| `/sop9-commissioning/\*\*` | SOP9 (derivado) |*

*| `/sop10-diseno/\*\*` | SOP10 |*

*| `/sop-graficas/:sopId` | Charts por SOP |*

*| `/graficas-globales` | Charts globales |*

*| `/mis-tareas` | Bandeja personal |*

*| `/quality`, `/quality/:moduleId` | SGC |*

*| `/carga-usuarios/\*\*` | Supervisión |*

*| `/tareas-sharepoint/\*\*` | Workspace |*

*| `/perfil-preferencias` | Preferencias |*

*| `/actualizacion-app` | Update center |*

*| `/admin` | Administración |*



*---*



*\*\*Fin del documento de contexto completo.\*\**  

*Estado: \*\*cerrado 0→100\*\* respecto al repositorio analizado el 2026-07-27. Las únicas ampliaciones futuras esperadas son respuestas al Apéndice A (addenda de negocio/proceso), no módulos técnicos pendientes.*

*`)*

