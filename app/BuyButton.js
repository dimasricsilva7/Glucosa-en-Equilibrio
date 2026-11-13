"use client";
import { useState } from "react";

// CTA de compra: pide nombre + correo, los graba y manda al checkout.
export default function BuyButton({ url, children, sub, className = "btn btn-lg" }) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);

  async function go(e) {
    e.preventDefault();
    setBusy(true);
    try {
      await fetch("/api/checkout", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
    } catch {}
    window.location.href = url;
  }

  return (
    <>
      <button type="button" className={className} onClick={() => setOpen(true)}>
        {children}
        {sub && <span className="btn-sub">{sub}</span>}
      </button>

      {open && (
        <div className="modal" onClick={() => !busy && setOpen(false)}>
          <form className="modal-card" onClick={(e) => e.stopPropagation()} onSubmit={go}>
            <h3>¡Ya casi es tuyo!</h3>
            <p>Déjanos tus datos para enviarte el acceso a tu recetario.</p>
            <input required placeholder="Tu nombre" value={name} onChange={(e) => setName(e.target.value)} />
            <input required type="email" placeholder="Tu correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button className="btn btn-lg" disabled={busy}>
              {busy ? "Redirigiendo…" : "Ir al pago seguro →"}
            </button>
            <button type="button" className="modal-close" onClick={() => setOpen(false)}>
              Cancelar
            </button>
          </form>
        </div>
      )}
    </>
  );
}
