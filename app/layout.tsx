import type { Metadata } from "next";
import { headers } from "next/headers";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") || "auto-check.co";
  const protocol = host.includes("localhost") ? "http" : "https";
  const baseUrl = `${protocol}://${host}`;

  return {
    metadataBase: new URL(baseUrl),
    title: "AutoCheck | Historial vehicular para comprar con confianza",
    description:
      "Consulta antecedentes, siniestros, reclamaciones, riesgos y estado legal de un vehículo. Recibe tu informe AutoCheck por WhatsApp.",
    keywords: [
      "historial vehicular",
      "consultar vehículo Colombia",
      "antecedentes vehículo",
      "AutoCheck Colombia",
      "informe vehicular",
    ],
    alternates: { canonical: "/" },
    icons: { icon: "/logo-autocheck.png", shortcut: "/logo-autocheck.png" },
    openGraph: {
      title: "AutoCheck | Decide mejor antes de comprar",
      description: "Conoce el historial del vehículo y recibe un informe claro por WhatsApp.",
      url: baseUrl,
      siteName: "AutoCheck",
      locale: "es_CO",
      type: "website",
      images: [{ url: `${baseUrl}/og.png`, width: 1200, height: 630, alt: "AutoCheck — Historial vehicular con respaldo profesional" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "AutoCheck | Decide mejor antes de comprar",
      description: "Conoce el historial del vehículo y recibe un informe claro por WhatsApp.",
      images: [`${baseUrl}/og.png`],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={geist.variable}>{children}</body>
    </html>
  );
}
