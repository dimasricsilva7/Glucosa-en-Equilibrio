// ⬇️ CAMBIA ESTA URL por tu link de checkout de MundiPay
const CHECKOUT_URL = "https://pago.mundipay.com/TU-LINK-AQUI";

// "El Plato del Equilibrio": el método del recetario, en una imagen.
function PlatoEquilibrio() {
  return (
    <div className="plato">
      <svg viewBox="0 0 120 120" role="img" aria-label="El Plato del Equilibrio: mitad verduras, un cuarto proteína, un cuarto carbohidratos inteligentes">
        <circle cx="60" cy="60" r="56" fill="#ffffff" />
        <path d="M60,60 L60,8 A52,52 0 0 1 60,112 Z" fill="#5cb878" />
        <path d="M60,60 L60,112 A52,52 0 0 1 8,60 Z" fill="#f2994a" />
        <path d="M60,60 L8,60 A52,52 0 0 1 60,8 Z" fill="#f4c56b" />
        <circle cx="60" cy="60" r="56" fill="none" stroke="#ffffff" strokeWidth="5" />
        <circle cx="60" cy="60" r="12" fill="#ffffff" />
      </svg>
      <div className="plato-legend">
        <span><i style={{ background: "#5cb878" }} />½ Verduras y fibra</span>
        <span><i style={{ background: "#f2994a" }} />¼ Proteína</span>
        <span><i style={{ background: "#f4c56b" }} />¼ Carbohidratos inteligentes</span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <div className="top">⚡ Oferta por tiempo limitado · 50% de descuento solo hoy</div>

      <nav className="nav">
        <div className="wrap">
          <div className="brand">Azúcar<span> Bajo Control</span></div>
          <a className="btn" href={CHECKOUT_URL}>Quiero el recetario</a>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Para quien vive con diabetes o azúcar alta</span>
            <h1>
              Come rico <span className="amber">sin disparar tu azúcar</span>, con
              recetas mexicanas de verdad
            </h1>
            <p className="sub">
              100 recetas fáciles y económicas para desayunar, comer y cenar
              cuidando tu glucosa. Sin dietas imposibles y sin dejar lo que te
              gusta.
            </p>
            <div className="cta-wrap">
              <a className="btn btn-lg" href={CHECKOUT_URL}>
                Quiero mis 100 recetas ahora
                <span className="btn-sub">Acceso inmediato · Pago seguro</span>
              </a>
              <div className="trust">🔒 Descarga al instante · 🇲🇽 Ingredientes mexicanos · 🛡️ Garantía de 7 días</div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-badge">100<small>recetas</small></div>
            <PlatoEquilibrio />
            <p className="plato-cap">Aprende a armar tu plato para que la comida<br/>juegue a favor de tu azúcar.</p>
          </div>
        </div>
      </header>

      {/* DOLORES */}
      <section className="section pains">
        <div className="wrap">
          <h2 className="center">¿Te suena familiar?</h2>
          <div className="pain-grid">
            {[
              ["😮‍💨","Comes y te da sueño","Ese bajón después de comer que te deja sin energía toda la tarde."],
              ["🍞","No sabes qué cocinar","Sientes que “todo lo rico” te sube el azúcar y no te queda nada por comer."],
              ["😟","Miedo a los resultados","Cada vez que te checas el azúcar, cruzas los dedos esperando que salga bien."],
              ["🔁","Dietas que no duras","Empiezas con todo el lunes y para el jueves ya la dejaste. Siempre pasa."],
            ].map((p,i)=>(
              <div className="pain" key={i}>
                <div className="ic">{p[0]}</div>
                <h3>{p[1]}</h3>
                <p>{p[2]}</p>
              </div>
            ))}
          </div>
          <p className="center pains-note">
            No es falta de voluntad. Es que nadie te enseñó <b>cómo combinar tu plato</b> para
            que la comida juegue a tu favor. Eso cambia hoy.
          </p>
        </div>
      </section>

      {/* SOLUCIÓN */}
      <section className="section sol">
        <div className="wrap">
          <h2 className="center">La solución: comer con equilibrio, no con hambre</h2>
          <p className="lead">
            <b>Glucosa en Equilibrio</b> es un recetario digital con 100 recetas mexicanas
            pensadas para cuidar tu azúcar: con la fibra, la proteína y la grasa buena justas
            para que tu glucosa suba <b>lento y estable</b>.
          </p>
          <div className="card-prod">
            <div className="book">
              <div className="k">GUÍA PRÁCTICA</div>
              <div className="t">Glucosa en Equilibrio</div>
              <div className="n">100 recetas mexicanas</div>
              <div className="badge">eBook + Bonos</div>
            </div>
            <ul className="feats">
              <li>100 recetas: desayunos, comidas, cenas, snacks y postres sin azúcar</li>
              <li>Tiempo, porciones y nivel de dificultad en cada receta</li>
              <li>“El Plato del Equilibrio”: el método para armar tu comida sin picos</li>
              <li>Menú de 7 días listo para seguir</li>
              <li>Lista de compras inteligente para el súper</li>
              <li>Ingredientes económicos que encuentras en cualquier mercado</li>
            </ul>
          </div>
        </div>
      </section>

      {/* BENEFICIOS / TRANSFORMACIÓN */}
      <section className="section benefits">
        <div className="wrap">
          <h2 className="center">Cómo te vas a sentir en las próximas semanas</h2>
          <p className="lead">No es una dieta. Es una forma de comer que puedes sostener toda la vida, con la comida que ya conoces y te gusta.</p>
          <div className="benefit-grid">
            {[
              ["⚡","Energía toda la tarde","Se acaba el bajón después de comer. Te levantas de la mesa con pilas, no con sueño."],
              ["📉","Tu azúcar, más estable","Platos pensados para que la glucosa suba lento, sin esos picos que te preocupan."],
              ["😋","Comer rico sin culpa","Tacos, guisados, antojitos y hasta postres: versiones ricas que sí puedes comer."],
              ["🍽️","Nunca más “¿qué cocino?”","Con el menú de 7 días y las 100 recetas, siempre sabes qué hacer de comer."],
              ["💸","Gastas menos","Ingredientes mexicanos de siempre y económicos. Nada raro ni caro de importación."],
              ["🧘","Más tranquilidad","Comes con confianza y llegas a tu próxima medición sin cruzar los dedos."],
            ].map((b,i)=>(
              <div className="benefit" key={i}>
                <div className="ic">{b[0]}</div>
                <div>
                  <h3>{b[1]}</h3>
                  <p>{b[2]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUÉ ENTREGA / QUÉ RECIBES */}
      <section className="section deliver">
        <div className="wrap">
          <h2 className="center">Esto es exactamente lo que recibes hoy</h2>
          <div className="deliver-grid">
            {[
              ["📘","Recetario con 100 recetas","Desayunos, comidas, cenas, snacks y postres sin azúcar. En PDF, para siempre."],
              ["🍽️","Método “El Plato del Equilibrio”","El esquema simple para armar cualquier comida sin disparar tu glucosa."],
              ["🗓️","Menú de 7 días","Un plan día por día para que empieces sin pensar y sin complicarte."],
              ["🍫","Guía de antojos dulces","Qué hacer cuando se te antoja algo dulce, sin culpa y sin picos."],
              ["🛒","Lista de compras imprimible","Llegas al súper con todo claro y no compras de más."],
              ["📲","Acceso inmediato","En cuanto pagas, descargas todo en tu celular, tablet o compu."],
            ].map((d,i)=>(
              <div className="deliver-item" key={i}>
                <div className="ic">{d[0]}</div>
                <h3>{d[1]}</h3>
                <p>{d[2]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARA QUIÉN ES */}
      <section className="section forwho">
        <div className="wrap">
          <h2 className="center">¿Es para ti?</h2>
          <div className="forwho-grid">
            <div className="fw-card yes">
              <h3>✅ Sí, es para ti si…</h3>
              <ul>
                <li>Tienes azúcar alta, prediabetes o diabetes tipo 2</li>
                <li>Comes y te da sueño o te sientes pesado</li>
                <li>No sabes qué cocinar para cuidarte sin aburrirte</li>
                <li>Quieres cuidar a tu pareja, mamá o papá</li>
                <li>Quieres bajar de peso comiendo rico, sin pasar hambre</li>
              </ul>
            </div>
            <div className="fw-card no">
              <h3>🚫 No es para ti si…</h3>
              <ul>
                <li>Buscas una pastilla o un té “milagro” que lo arregle solo</li>
                <li>No estás dispuesto a cocinar en casa de vez en cuando</li>
                <li>Esperas dejar de comer todo lo que te gusta</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BONOS */}
      <section className="section bonos">
        <div className="wrap">
          <h2 className="center">Además, te llevas estos bonos gratis</h2>
          <div className="bono-grid">
            {[
              ["BONO 1","Menú de 7 días","Un plan completo día por día para que no pienses qué cocinar.","$190"],
              ["BONO 2","Guía de antojos dulces","Qué hacer cuando se te antoja algo dulce, sin culpa ni picos.","$150"],
              ["BONO 3","Lista de compras","Lista lista para imprimir y comprar sin perderte en el súper.","$120"],
            ].map((b,i)=>(
              <div className="bono" key={i}>
                <div className="tag">{b[0]}</div>
                <h3>{b[1]}</h3>
                <p>{b[2]}</p>
                <div className="val">Valor {b[3]} MXN</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="section">
        <div className="wrap">
          <h2 className="center">Lo que dicen quienes ya comen con equilibrio</h2>
          <div className="proof-bar">
            <span className="stars">★★★★★</span>
            <span>Miles de familias mexicanas ya cocinan con estas recetas</span>
          </div>
          <div className="testi-grid">
            {[
              ["★★★★★","“Por fin recetas ricas que no me suben el azúcar. Las de nopales y la tinga en lechuga son mis favoritas.”","María G.","Ciudad de México"],
              ["★★★★★","“Lo mejor es que son platillos normales, mexicanos. Mi esposo ni cuenta se dio de que estamos comiendo más sano.”","Rosa M.","Guadalajara"],
              ["★★★★★","“El menú de 7 días me salvó. Ya no batallo pensando qué hacer de comer todos los días.”","Laura T.","Monterrey"],
              ["★★★★★","“Ya no me da el bajón de la tarde. Como mi comida completa y sigo con energía para el trabajo.”","Jorge R.","Puebla"],
              ["★★★★★","“Se lo compré a mi mamá y por fin come variado sin miedo. Las porciones bien explicadas ayudan muchísimo.”","Diana F.","León"],
              ["★★★★★","“Bajé de peso sin pasar hambre y sin gastar de más. Ingredientes del mercado de siempre.”","Alma V.","Mérida"],
            ].map((t,i)=>(
              <div className="testi" key={i}>
                <div className="stars">{t[0]}</div>
                <p>{t[1]}</p>
                <div className="who">{t[2]} <span>· {t[3]}</span></div>
              </div>
            ))}
          </div>
          <p className="center testi-disc">
            * Testimonios ilustrativos. Sustitúyelos por reseñas reales de tus clientes.
          </p>
        </div>
      </section>

      {/* OFERTA */}
      <section className="section offer" id="oferta">
        <div className="wrap">
          <h2 className="center">Empieza hoy a comer rico y tranquilo</h2>
          <div className="price-card">
            <div className="old">Antes $594 MXN</div>
            <div className="now"><small>$</small>297<small> MXN</small></div>
            <div className="cents">Pago único · Acceso de por vida</div>
            <ul className="inc">
              <li>Recetario con 100 recetas (PDF)</li>
              <li>Menú de 7 días</li>
              <li>Guía de antojos dulces</li>
              <li>Lista de compras imprimible</li>
              <li>Acceso inmediato tras el pago</li>
            </ul>
            <a className="btn btn-lg" href={CHECKOUT_URL}>
              Quiero empezar ahora
              <span className="btn-sub">Pago 100% seguro con MundiPay</span>
            </a>
          </div>
          <div className="guarantee">
            <div className="seal">🛡️</div>
            <p><b>Garantía de 7 días.</b> Si el recetario no es para ti, escríbenos dentro de los
            primeros 7 días y te devolvemos tu dinero. Sin preguntas.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="wrap" style={{maxWidth:760}}>
          <h2 className="center">Preguntas frecuentes</h2>
          <div style={{marginTop:24}}>
            {[
              ["¿Cómo recibo el recetario?","Es digital. En cuanto se confirma tu pago, recibes el acceso para descargar el PDF al instante en tu correo."],
              ["¿Necesito ingredientes caros o difíciles?","Para nada. Usamos ingredientes mexicanos de siempre: nopal, frijol, huevo, verduras, pollo, pescado. Nada raro ni costoso."],
              ["¿Sirve si tengo diabetes?","Es una guía de alimentación para ayudarte a comer mejor y cuidar tu glucosa. No sustituye a tu médico: no suspendas tu tratamiento y consulta siempre con tu doctor."],
              ["¿Puedo verlo en mi celular?","Sí. Es un PDF que abres en tu celular, tablet o computadora, cuando quieras y sin internet."],
              ["¿Y si no me gusta?","Tienes 7 días de garantía. Si no es para ti, te devolvemos tu dinero."],
            ].map((f,i)=>(
              <div className="faq-item" key={i}>
                <h3>{f[0]}</h3>
                <p>{f[1]}</p>
              </div>
            ))}
          </div>
          <div className="center" style={{marginTop:34}}>
            <a className="btn btn-lg" href={CHECKOUT_URL}>Quiero mis 100 recetas</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="foot">
        <div className="wrap">
          <div className="brand">Azúcar Bajo Control</div>
          <p className="disc">
            Este material tiene fines educativos sobre alimentación y no sustituye el
            diagnóstico ni el tratamiento de un profesional de la salud. No prometemos curar
            ninguna enfermedad. No suspendas tu medicación por tu cuenta; consulta siempre a tu
            médico o nutriólogo.
          </p>
          <p>© {new Date().getFullYear()} Azúcar Bajo Control · Todos los derechos reservados</p>
        </div>
      </footer>
    </main>
  );
}
