"use client";
import { useState, useEffect } from "react";

const QUESTIONS = [
  { e: "🎯", q: "¿Para quién buscas cuidar el azúcar?", o: ["Para mí", "Para mi pareja", "Para mamá o papá", "Para alguien más"] },
  { e: "🩸", q: "¿Te han dicho que tienes el azúcar alta o diabetes?", o: ["Sí, diabetes tipo 2", "Sí, prediabetes", "Azúcar un poco alta", "Solo quiero prevenir"] },
  { e: "😴", q: "¿Qué tan seguido sientes sueño o cansancio después de comer?", o: ["Casi siempre", "Varias veces por semana", "De vez en cuando", "Casi nunca"] },
  { e: "🥤", q: "¿Con qué frecuencia tomas refresco o jugos?", o: ["Diario", "Algunas veces por semana", "Rara vez", "Ya casi no"] },
  { e: "🍩", q: "¿Qué es lo que más se te antoja?", o: ["Pan dulce y galletas", "Tortilla y harinas", "Algo dulce después de comer", "Botanas saladas"] },
  { e: "🥗", q: "¿Cuántas veces a la semana comes verduras?", o: ["Casi nunca", "1 o 2 veces", "3 a 4 veces", "Casi diario"] },
  { e: "🔁", q: "¿Has intentado dietas antes?", o: ["Sí, pero no las termino", "Sí, varias veces", "Una que otra vez", "Nunca"] },
  { e: "🤔", q: "¿Qué es lo más difícil para ti?", o: ["No saber qué cocinar", "Dejar lo que me gusta", "La falta de tiempo", "Que sea caro"] },
  { e: "🍳", q: "¿Cocinas en casa normalmente?", o: ["Sí, casi siempre", "A veces", "Poco", "Casi nunca"] },
  { e: "📊", q: "¿Qué tan seguido te checas el azúcar?", o: ["Diario", "Cada semana", "De vez en cuando", "Casi nunca"] },
  { e: "🌙", q: "¿Cómo duermes últimamente?", o: ["Mal, me despierto cansado", "Más o menos", "Bien casi siempre", "Muy bien"] },
  { e: "⚖️", q: "¿Te gustaría bajar de peso también?", o: ["Sí, bastante", "Un poco", "Mantenerme", "No es mi prioridad"] },
  { e: "🌮", q: "¿Qué tan importante es comer platillos mexicanos?", o: ["Muy importante", "Importante", "Me da igual", "Prefiero variar"] },
  { e: "⚡", q: "¿Prefieres recetas…?", o: ["Rápidas y fáciles", "Económicas", "Variadas", "Todas las anteriores"] },
  { e: "💪", q: "¿Qué tan comprometido estás a cambiar tu alimentación?", o: ["Totalmente, hoy mismo", "Bastante", "Quiero intentarlo", "Solo estoy viendo"] },
  { e: "📱", q: "¿Dónde prefieres ver tus recetas?", o: ["En el celular", "Impresas", "Tablet o compu", "Donde sea"] },
];

const STEPS = [
  "Analizando tus respuestas",
  "Calculando tu perfil de glucosa",
  "Eligiendo tus recetas ideales",
  "Armando tu menú de 7 días",
  "Preparando tu recetario personalizado",
];

export default function QuizClient() {
  const [i, setI] = useState(0);
  const [phase, setPhase] = useState("quiz"); // quiz | loading | done
  const [step, setStep] = useState(0);

  const pick = () => {
    if (i < QUESTIONS.length - 1) setI(i + 1);
    else { setPhase("loading"); setStep(0); }
  };

  useEffect(() => {
    if (phase !== "loading") return;
    if (step < STEPS.length) {
      const t = setTimeout(() => setStep((x) => x + 1), 750);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setPhase("done"), 650);
    return () => clearTimeout(t);
  }, [phase, step]);

  const pct = phase === "quiz" ? Math.round((i / QUESTIONS.length) * 100) : 100;

  return (
    <div className="quizbg">
      <div className="wrap">
        <div className="qhead">
          <div className="brand">Azúcar<span> Bajo Control</span></div>
          <p>🍽️ Responde unas preguntas rápidas para personalizar tu recetario</p>
        </div>

        <div className="quizcard">
          <div className="progress"><div style={{ width: pct + "%" }} /></div>

          {phase === "loading" ? (
            <div className="loadwrap">
              <div className="spinner" />
              <p className="load-title">Creando tu recetario personalizado…</p>
              <ul className="load-steps">
                {STEPS.map((txt, k) => (
                  <li key={k} className={k < step ? "on" : ""}>
                    <span className="chk">{k < step ? "✓" : ""}</span>
                    {txt}
                  </li>
                ))}
              </ul>
            </div>
          ) : phase === "done" ? (
            <div className="result">
              <div className="ring">🥗</div>
              <h2>¡Tu recetario está listo! 🎉</h2>
              <p>
                Según tus respuestas, <b>Glucosa en Equilibrio</b> es justo lo que necesitas:
                +100 recetas mexicanas fáciles para cuidar tu azúcar sin dejar de comer rico,
                con menú de 7 días y lista de compras.
              </p>
              <a className="btn btn-lg" href="/">
                Ver mi recetario con 50% OFF →
                <span className="btn-sub">Oferta por tiempo limitado</span>
              </a>
            </div>
          ) : (
            <div className="qstage" key={i}>
              <div className="qstep">Pregunta {i + 1} de {QUESTIONS.length}</div>
              <div className="qemoji">{QUESTIONS[i].e}</div>
              <div className="qtitle">{QUESTIONS[i].q}</div>
              <div className="opts">
                {QUESTIONS[i].o.map((opt, k) => (
                  <button
                    className="opt"
                    key={k}
                    style={{ animationDelay: k * 60 + "ms" }}
                    onClick={pick}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              {i > 0 && (
                <button className="qback" onClick={() => setI(i - 1)}>← Regresar</button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
