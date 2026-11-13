import { neon } from "@neondatabase/serverless";
import { unstable_noStore as noStore } from "next/cache";

// Sem DATABASE_URL o site funciona com os defaults e não graba leads (no bloquea ventas).
// cache: "no-store" garante que a home leia sempre o valor atual do banco (sin stale).
const sql = process.env.DATABASE_URL
  ? neon(process.env.DATABASE_URL, { fetchOptions: { cache: "no-store" } })
  : null;
let ready = false;

async function init() {
  if (!sql || ready) return;
  await sql`create table if not exists settings (id int primary key, data jsonb not null)`;
  await sql`create table if not exists leads (id serial primary key, name text, email text, created_at timestamptz default now())`;
  ready = true;
}

export async function getSettings() {
  try {
    noStore();
    if (!sql) return {};
    await init();
    const rows = await sql`select data from settings where id = 1`;
    return rows[0]?.data || {};
  } catch (e) {
    console.error("getSettings", e);
    return {};
  }
}

export async function saveSettings(data) {
  if (!sql) throw new Error("DATABASE_URL no configurado");
  await init();
  await sql`insert into settings (id, data) values (1, ${JSON.stringify(data)}::jsonb)
            on conflict (id) do update set data = excluded.data`;
}

export async function addLead(name, email) {
  try {
    if (!sql) return false;
    await init();
    await sql`insert into leads (name, email) values (${name}, ${email})`;
    return true;
  } catch (e) {
    console.error("addLead", e);
    return false;
  }
}

export async function getLeads() {
  try {
    if (!sql) return [];
    await init();
    return await sql`select name, email, created_at from leads order by created_at desc limit 1000`;
  } catch (e) {
    console.error("getLeads", e);
    return [];
  }
}
