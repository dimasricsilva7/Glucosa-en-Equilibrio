"use client";
import { useState } from "react";
import BuyButton from "../BuyButton";

const QUESTIONS = [
  { q: "¿Para quién buscas cuidar el azúcar?", o: ["Para mí", "Para mi pareja", "Para mamá o papá", "Para alguien más"] },
  { q: "¿Te han dicho que tienes el azúcar alta o diabetes?", o: ["Sí, diabetes tipo 2", "Sí, prediabetes", "Azúcar un poco alta", "Solo quiero prevenir"] },
  { q: "¿Qué tan seguido sientes sueño o cansancio después de comer?", o: ["Casi siempre", "Varias veces por semana", "De vez en cuando", "Casi nunca"] },
  { q: "¿Con qué frecuencia tomas refresco o jugos?", o: ["Diario", "Algunas veces por semana", "Rara vez", "Ya casi no"] },
  { q: "¿Qué es lo que más se te antoja?", o: ["Pan dulce y galletas", "Tortilla y harinas", "Algo dulce después de comer", "Botanas saladas"] },
  { q: "¿Cuántas veces a la semana comes verduras?", o: ["Casi nunca", "1 o 2 veces", "3 a 4 veces", "Casi diario"] },
  { q: "¿Has intentado dietas antes?", o: ["Sí, pero no las termino", "Sí, varias veces", "Una que otra vez", "Nunca"] },
  { q: "¿Qué es lo más difícil para ti?", o: ["No saber qué cocinar", "Dejar lo que me gusta", "La falta de tiempo", "Que sea caro"] },
  { q: "¿Cocinas en casa normalmente?", o: ["Sí, casi siempre", "A veces", "Poco", "Casi nunca"] },
  { q: "¿Qué tan seguido te checas el azúcar?", o: ["Diario", "Cada semana", "De vez en cuando", "Casi nunca"] },
  { q: "¿Cómo duermes últimamente?", o: ["Mal, me despierto cansado", "Más o menos", "Bien casi siempre", "Muy bien"] },
  { q: "¿Te gustaría bajar de peso también?", o: ["Sí, bastante", "Un poco", "Mantenerme", "No es mi prioridad"] },
  { q: "¿Qué tan importante es comer platillos mexicanos?", o: ["Muy importante", "Importante", "Me da igual", "Prefiero variar"] },
  { q: "¿Prefieres recetas…?", o: ["Rápidas y fáciles", "Económicas", "Variadas", "Todas las anteriores"] },
  { q: "¿Qué tan comprometido estás a cambiar tu alimentación?", o: ["Totalmente, hoy mismo", "Bastante", "Quiero intentarlo", "Solo estoy viendo"] },
  { q: "¿Dónde prefieres ver tus recetas?", o: ["En el celular", "Impresas", "Tablet o compu", "Donde sea"] },
];

export default function QuizClient({ checkoutUrl }) {
  const [i, setI] = useState(0);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const pick = () => {
    if (i < QUESTIONS.length - 1) {
      setI(i + 1);
    } else {
      setLoading(true);
      setTimeout(() => { setLoading(false); setDone(true); }, 1800);
    }
  };

  const pct = done ? 100 : Math.round(((i + (loading ? 1 : 0)) / QUESTIONS.length) * 100);

  return (
    <div className="quizbg">
      <div className="wrap">
        <div className="qhead">
          <div className="brand">Azúcar<span> Bajo Control</span></div>
          <p>Responde unas preguntas rápidas para personalizar tu recetario</p>
        </div>

        <div className="quizcard">
          <div className="progress"><div style={{ width: pct + "%" }} /></div>

          {loading ? (
            <div className="loadwrap">
              <div className="spinner" />
              <p style={{ fontWeight: 700 }}>Preparando tu plan personalizado…</p>
            </div>
          ) : done ? (
            <div className="result">
              <div className="ring">🥗</div>
              <h2>¡Tu recetario está listo!</h2>
              <p>
                Según tus respuestas, <b>Glucosa en Equilibrio</b> es justo lo que necesitas:
                +100 recetas mexicanas fáciles para cuidar tu azúcar sin dejar de comer rico,
                con menú de 7 días y lista de compras.
              </p>
              <BuyButton url={checkoutUrl} sub="Oferta por tiempo limitado">
                Ver mi recetario con 50% OFF
              </BuyButton>
            </div>
          ) : (
            <>
              <div className="qstep">Pregunta {i + 1} de {QUESTIONS.length}</div>
              <div className="qtitle">{QUESTIONS[i].q}</div>
              <div className="opts">
                {QUESTIONS[i].o.map((opt, k) => (
                  <button className="opt" key={k} onClick={pick}>{opt}</button>
                ))}
              </div>
              {i > 0 && (
                <button className="qback" onClick={() => setI(i - 1)}>← Regresar</button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
