// ⬇️ CAMBIA ESTA URL por tu link de checkout de MundiPay
const CHECKOUT_URL = "https://pago.mundipay.com/TU-LINK-AQUI";

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
        <div className="wrap center">
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
            <div className="trust">🔒 Descarga al instante · 🇲🇽 Ingredientes mexicanos</div>
          </div>
          <div className="plate"><span className="emoji">🥑</span></div>
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
          <p className="center" style={{marginTop:28,maxWidth:680,marginInline:"auto",color:"var(--grey)"}}>
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
          <div className="testi-grid">
            {[
              ["★★★★★","“Por fin recetas ricas que no me suben el azúcar. Las de nopales y la tinga en lechuga son mis favoritas.”","María G.","Ciudad de México"],
              ["★★★★★","“Lo mejor es que son platillos normales, mexicanos. Mi esposo ni cuenta se dio de que estamos comiendo más sano.”","Rosa M.","Guadalajara"],
              ["★★★★★","“El menú de 7 días me salvó. Ya no batallo pensando qué hacer de comer todos los días.”","Laura T.","Monterrey"],
            ].map((t,i)=>(
              <div className="testi" key={i}>
                <div className="stars">{t[0]}</div>
                <p>{t[1]}</p>
                <div className="who">{t[2]} <span>· {t[3]}</span></div>
              </div>
            ))}
          </div>
          <p className="center" style={{fontSize:13,color:"var(--grey)",marginTop:18}}>
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
