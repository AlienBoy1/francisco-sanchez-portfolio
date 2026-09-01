/**
 * One-shot copy cleanup for portfolio professionalism.
 */
import fs from "node:fs";

const replacements = [
  [
    "src/content/projects/qyntra-gym.ts",
    [
      [
        "Qyntra Gym (formerly Altus Gym) is a Spanish-language gym PWA",
        "Qyntra Gym is a Spanish-language gym PWA",
      ],
      [
        "Qyntra Gym (antes Altus Gym) es una PWA en español",
        "Qyntra Gym es una PWA en español",
      ],
      [
        '"Rename and rebrand (Altus → Qyntra) must stay consistent in copy, assets, and URLs"',
        '"Brand consistency across landing, PWA icons, and in-app surfaces compounds product trust"',
      ],
      [
        '"El rebrand (Altus → Qyntra) debe ser consistente en copy, assets y URLs"',
        '"La consistencia de marca entre landing, iconos PWA y app refuerza la confianza en el producto"',
      ],
      [
        '"Public demo: https://qyntagymweb.vercel.app/ — no confidential membership or attendance data is exposed in this portfolio case."',
        '"Live product: https://qyntagymweb.vercel.app/ — marketing landing, member app, and admin console as one installable PWA."',
      ],
      [
        '"Demo pública: https://qyntagymweb.vercel.app/ — este caso no expone datos confidenciales de membresías ni asistencia."',
        '"Producto en vivo: https://qyntagymweb.vercel.app/ — landing, app de miembro y consola admin como una sola PWA instalable."',
      ],
      [
        '"Earlier portfolio references used “Altus Gym.” The live product and brand are Qyntra Gym / QYNTRA GYM OS."',
        '"Brand system: Qyntra / GYM OS with training photography, community imagery, and a distinct PWA mark."',
      ],
      [
        '"Referencias anteriores del portafolio usaban “Altus Gym.” El producto y marca vivos son Qyntra Gym / QYNTRA GYM OS."',
        '"Sistema de marca: Qyntra / GYM OS con fotografia de entrenamiento, comunidad e icono PWA distintivo."',
      ],
      ['title: "Stack (public-safe)"', 'title: "Stack"'],
      ['title: "Stack (seguro para publicar)"', 'title: "Stack"'],
      [
        '"Server/data: Express on Vercel, Supabase Auth/DB. Secrets, connection strings, and operational member data are excluded from this write-up."',
        '"Server/data: Express on Vercel with Supabase Auth and database as the system of record."',
      ],
      [
        '"Servidor/datos: Express en Vercel, Supabase Auth/DB. Secretos, connection strings y datos operativos de miembros quedan fuera de este escrito."',
        '"Servidor/datos: Express en Vercel con Supabase Auth y base de datos como sistema de registro."',
      ],
    ],
  ],
  [
    "src/content/projects/capital-gang.ts",
    [
      [
        '"Never publish access codes, seeds, or customer orders in portfolio materials"',
        '"Admin and public surfaces should share brand tokens while optimizing for different jobs"',
      ],
      [
        '"Nunca publicar access codes, seeds u órdenes de clientes en materiales de portafolio"',
        '"Admin y publico deben compartir tokens de marca optimizando trabajos distintos"',
      ],
      [
        '"Public demo: https://capital-gang-clothing.vercel.app/ — portfolio copy excludes credentials, access codes, and real customer orders."',
        '"Live product: https://capital-gang-clothing.vercel.app/ — clothing, tattoo shop, and gallery under one brand platform."',
      ],
      [
        '"Demo pública: https://capital-gang-clothing.vercel.app/ — el copy del portafolio excluye credenciales, access codes y órdenes reales."',
        '"Producto en vivo: https://capital-gang-clothing.vercel.app/ — ropa, tattoo shop y galeria bajo una sola plataforma de marca."',
      ],
    ],
  ],
  [
    "src/content/projects/htl-operations.ts",
    [
      [
        '"BaaS + RLS accelerates delivery but demands hardening discipline (admin RPC, secrets, CSP)"',
        '"BaaS + RLS accelerates delivery when authorization boundaries stay explicit and reviewable"',
      ],
      [
        '"BaaS + RLS acelera entrega pero exige disciplina de hardening (RPC admin, secretos, CSP)"',
        '"BaaS + RLS acelera la entrega cuando los limites de autorizacion se mantienen explicitos y revisables"',
      ],
      [
        '"Primary engineering context: docs/700-case-studies/CS-7004 Htl Operations.md. Public login surface: https://htlsopsadmin.vercel.app/login — portfolio materials exclude credentials, VAPID secrets, seed users, and operational records."',
        '"Engineering context: CS-7004. Live surface: https://htlsopsadmin.vercel.app/login — authenticated operations PWA for SOP and SLA workflows."',
      ],
      [
        '"Appendix A in CS-7004 lists non-inferable business items (production URL, formal SLOs, org ownership). Portfolio copy stays honest about those gaps."',
        '"Deep dive available in the official case study covering architecture, engines, and delivery trade-offs."',
      ],
      [
        '"Contexto de ingeniería primario: docs/700-case-studies/CS-7004 Htl Operations.md. Login público: https://htlsopsadmin.vercel.app/login — el portafolio excluye credenciales, secretos VAPID, seeds y registros operativos."',
        '"Contexto de ingenieria: CS-7004. Superficie en vivo: https://htlsopsadmin.vercel.app/login — PWA autenticada para flujos SOP y SLA."',
      ],
      [
        '"El Apéndice A de CS-7004 lista vacíos de negocio no inferibles (URL de producción, SLOs formales, ownership org). El copy del portafolio permanece honesto sobre esos gaps."',
        '"Profundizacion disponible en el caso de estudio oficial: arquitectura, motores y trade-offs de entrega."',
      ],
    ],
  ],
  [
    "src/content/case-studies.ts",
    [
      [
        '"Never publish credentials or customer orders in portfolio materials"',
        '"Brand platforms need one composition first, worlds second"',
      ],
      [
        '"Nunca publicar credenciales u órdenes de clientes en materiales de portafolio"',
        '"Las plataformas de marca necesitan una composicion primero, mundos despues"',
      ],
    ],
  ],
];

for (const [file, pairs] of replacements) {
  let source = fs.readFileSync(file, "utf8");
  for (const [from, to] of pairs) {
    if (!source.includes(from)) {
      console.log("MISS", file, from.slice(0, 70));
      continue;
    }
    source = source.split(from).join(to);
  }
  fs.writeFileSync(file, source);
  console.log("ok", file);
}
