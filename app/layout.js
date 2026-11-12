import "./globals.css";

export const metadata = {
  title: "Azúcar Bajo Control | Glucosa en Equilibrio",
  description:
    "100 recetas mexicanas para disfrutar la comida cuidando tu azúcar. Baja tu glucosa comiendo rico, sin dietas imposibles.",
  openGraph: {
    title: "Azúcar Bajo Control",
    description:
      "100 recetas mexicanas para cuidar tu glucosa sin dejar de comer rico.",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f766e",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-MX">
      <body>{children}</body>
    </html>
  );
}
