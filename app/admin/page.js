import { cookies } from "next/headers";
import { getSettings, saveSettings, getLeads } from "../../lib/db";
import { withDefaults, SETTING_KEYS } from "../../lib/defaults";

export const dynamic = "force-dynamic";

function authed() {
  const pw = process.env.ADMIN_PASSWORD;
  return !!pw && cookies().get("admin")?.value === pw;
}

async function login(formData) {
  "use server";
  const pw = process.env.ADMIN_PASSWORD;
  if (pw && formData.get("password") === pw) {
    cookies().set("admin", pw, { httpOnly: true, secure: true, sameSite: "lax", path: "/" });
  }
}

async function logout() {
  "use server";
  cookies().delete("admin");
}

async function save(formData) {
  "use server";
  if (!authed()) return;
  const data = {};
  for (const k of SETTING_KEYS) data[k] = (formData.get(k) || "").toString().trim();
  await saveSettings(data);
}

const LABELS = {
  heroTitle: "Título da hero",
  priceOld: "Preço antigo (MXN)",
  priceNow: "Preço atual (MXN)",
  heroImg: "Imagem da hero (link ou /hero.png)",
  coverImg: "Imagem da capa (link ou /portada.png)",
  authorImg: "Imagem do autor (link)",
  authorName: "Nome do autor",
  authorDesc: "Descrição do autor",
  checkoutUrl: "Link de checkout (MundiPay)",
};
const BIG = new Set(["heroTitle", "authorDesc"]);

export default async function Admin() {
  if (!authed()) {
    const locked = !process.env.ADMIN_PASSWORD;
    return (
      <div className="admin-login">
        <form action={login} className="admin-card">
          <h1>Admin · Azúcar Bajo Control</h1>
          {locked ? (
            <p className="admin-warn">Configure a variável <b>ADMIN_PASSWORD</b> na Vercel para ativar o acesso.</p>
          ) : (
            <>
              <input name="password" type="password" placeholder="Senha de admin" autoFocus />
              <button className="btn btn-lg" type="submit">Entrar</button>
            </>
          )}
        </form>
      </div>
    );
  }

  const s = withDefaults(await getSettings());
  const leads = await getLeads();

  return (
    <div className="admin">
      <div className="admin-head">
        <h1>Admin · Azúcar Bajo Control</h1>
        <form action={logout}><button className="admin-logout" type="submit">Sair</button></form>
      </div>

      {!process.env.DATABASE_URL && (
        <p className="admin-warn">⚠️ Sem <b>DATABASE_URL</b>: as edições não serão salvas e os pedidos não serão gravados. Configure o banco na Vercel.</p>
      )}

      <form action={save} className="admin-card">
        <h2>Conteúdo do site</h2>
        {SETTING_KEYS.map((k) => (
          <label className="admin-field" key={k}>
            <span>{LABELS[k]}</span>
            {BIG.has(k)
              ? <textarea name={k} defaultValue={s[k]} rows={k === "authorDesc" ? 6 : 3} />
              : <input name={k} defaultValue={s[k]} />}
          </label>
        ))}
        <button className="btn btn-lg" type="submit">Salvar alterações</button>
      </form>

      <div className="admin-card">
        <h2>Pedidos / leads ({leads.length})</h2>
        {leads.length === 0 ? (
          <p className="admin-muted">Ainda nenhum pedido registrado.</p>
        ) : (
          <table className="admin-table">
            <thead><tr><th>Nome</th><th>E-mail</th><th>Data</th></tr></thead>
            <tbody>
              {leads.map((l, i) => (
                <tr key={i}>
                  <td>{l.name}</td>
                  <td>{l.email}</td>
                  <td>{new Date(l.created_at).toLocaleString("pt-BR")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
