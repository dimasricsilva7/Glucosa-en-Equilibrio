import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getSettings, saveSettings, getLeads, deleteLead } from "../../lib/db";
import { withDefaults } from "../../lib/defaults";

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
    redirect("/admin");
  }
  redirect("/admin?bad=1");
}

async function logout() {
  "use server";
  cookies().delete("admin");
  redirect("/admin");
}

async function save(formData) {
  "use server";
  if (!authed()) redirect("/admin");
  const data = {};
  for (const k of FIELDS.flatMap((g) => g.keys)) data[k] = (formData.get(k) || "").toString().trim();
  let err = "";
  try {
    await saveSettings(data);
  } catch (e) {
    err = e.message || "error";
  }
  redirect(err ? "/admin?err=" + encodeURIComponent(err) : "/admin?ok=1");
}

async function removeLead(formData) {
  "use server";
  if (!authed()) redirect("/admin");
  const id = Number(formData.get("id"));
  if (id) await deleteLead(id);
  redirect("/admin");
}

// Campos agrupados em blocos do dashboard
const FIELDS = [
  { title: "Hero", keys: ["heroTitle"], span: true },
  { title: "Preços (MXN)", keys: ["priceOld", "priceNow"], row: true },
  { title: "Checkout", keys: ["checkoutUrl"] },
  { title: "Imagens (link ou /arquivo.png)", keys: ["heroImg", "coverImg", "authorImg"], span: true, row3: true },
  { title: "Autor", keys: ["authorName", "authorDesc"], span: true },
];
const LABELS = {
  heroTitle: "Título da hero",
  priceOld: "Preço antigo",
  priceNow: "Preço atual",
  heroImg: "Imagem da hero",
  coverImg: "Imagem da capa",
  authorImg: "Imagem do autor",
  authorName: "Nome do autor",
  authorDesc: "Descrição do autor",
  checkoutUrl: "Link de checkout (MundiPay)",
};
const BIG = new Set(["heroTitle", "authorDesc"]);

export default async function Admin({ searchParams }) {
  if (!authed()) {
    const locked = !process.env.ADMIN_PASSWORD;
    return (
      <div className="admin-login">
        <form action={login} className="admin-card">
          <h1>Admin · Azúcar Bajo Control</h1>
          {locked ? (
            <p className="admin-status err">Configure a variável <b>ADMIN_PASSWORD</b> na Vercel e faça Redeploy para ativar o acesso.</p>
          ) : (
            <>
              {searchParams?.bad && <p className="admin-status err">Senha incorreta.</p>}
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
        <div>
          <h1>Admin · Azúcar Bajo Control</h1>
          <a className="admin-link" href="/" target="_blank">ver site ↗</a>
        </div>
        <form action={logout}><button className="admin-logout" type="submit">Sair</button></form>
      </div>

      {searchParams?.ok && <p className="admin-status ok">✓ Alterações salvas com sucesso.</p>}
      {searchParams?.err && <p className="admin-status err">Não salvou: {decodeURIComponent(String(searchParams.err))}. Se mencionar DATABASE_URL, conecte o Neon e faça Redeploy.</p>}
      {!process.env.DATABASE_URL && (
        <p className="admin-status warn">⚠️ Banco não conectado neste deploy. Conecte o Neon na Vercel e clique em <b>Redeploy</b> — sem isso as edições e os pedidos não são salvos.</p>
      )}

      <form action={save}>
        <div className="admin-grid">
          {FIELDS.map((group) => (
            <div className={"admin-block" + (group.span ? " span2" : "")} key={group.title}>
              <h2>{group.title}</h2>
              <div className={group.row3 ? "admin-row3" : group.row ? "admin-row2" : ""}>
                {group.keys.map((k) => (
                  <label className="admin-field" key={k}>
                    <span>{LABELS[k]}</span>
                    {BIG.has(k)
                      ? <textarea name={k} defaultValue={s[k]} rows={k === "authorDesc" ? 6 : 2} />
                      : <input name={k} defaultValue={s[k]} />}
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button className="btn btn-lg admin-save" type="submit">Salvar alterações</button>
      </form>

      <div className="admin-card admin-leads">
        <div className="admin-leads-head">
          <h2>Clientes / pedidos <span className="admin-count">{leads.length}</span></h2>
          {leads.length > 0 && (
            <a className="admin-csv" href="/api/leads/export">⬇ Baixar lista (CSV)</a>
          )}
        </div>
        {leads.length === 0 ? (
          <p className="admin-muted">Ainda nenhum pedido registrado.</p>
        ) : (
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead><tr><th>Nome</th><th>E-mail</th><th>Data</th><th></th></tr></thead>
              <tbody>
                {leads.map((l) => (
                  <tr key={l.id}>
                    <td>{l.name || "—"}</td>
                    <td>{l.email}</td>
                    <td className="admin-date">{new Date(l.created_at).toLocaleString("pt-BR")}</td>
                    <td>
                      <form action={removeLead}>
                        <input type="hidden" name="id" value={l.id} />
                        <button className="admin-del" type="submit" title="Excluir cliente">Excluir</button>
                      </form>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
