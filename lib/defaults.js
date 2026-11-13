// Valores padrão do site. O admin sobrescreve estes no banco (tabela settings).
export const DEFAULTS = {
  heroTitle: "Comes “bien” y tu azúcar sigue por las nubes. El problema no eres tú.",
  priceOld: "594",
  priceNow: "297",
  heroImg: "/hero.png",
  coverImg: "/portada.png",
  authorImg: "/autora.png",
  authorName: "Equipo Azúcar Bajo Control",
  authorDesc:
    "Azúcar Bajo Control nace de una idea simple: cuidar tu azúcar no tiene por qué significar comer aburrido ni renunciar a los platillos que amas.\n\nCada una de las +100 recetas fue seleccionada y probada bajo un mismo principio —el del plato equilibrado y el orden de los alimentos— para que disfrutes tu comida de siempre con la fibra, la proteína y la grasa buena en su punto. Sin dietas imposibles, sin ingredientes raros. Comida real, pensada para tu día a día.",
  checkoutUrl: "https://pago.mundipay.com/TU-LINK-AQUI",
};

export const SETTING_KEYS = Object.keys(DEFAULTS);

export function withDefaults(s) {
  return { ...DEFAULTS, ...(s || {}) };
}
