import { cookies } from "next/headers";
import { getLeads } from "../../../../lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  const pw = process.env.ADMIN_PASSWORD;
  if (!pw || cookies().get("admin")?.value !== pw) {
    return new Response("No autorizado", { status: 401 });
  }
  const leads = await getLeads();
  const esc = (v) => `"${String(v ?? "").replace(/"/g, '""')}"`;
  const rows = [
    ["Nome", "E-mail", "Data"],
    ...leads.map((l) => [l.name, l.email, new Date(l.created_at).toLocaleString("pt-BR")]),
  ];
  const csv = "﻿" + rows.map((r) => r.map(esc).join(",")).join("\r\n");
  return new Response(csv, {
    headers: {
      "content-type": "text/csv; charset=utf-8",
      "content-disposition": `attachment; filename="clientes.csv"`,
    },
  });
}
