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
      "Consulta el historial de un vehículo y recibe interpretación profesional, recomendaciones y acompañamiento humano por WhatsApp.",
    keywords: [
      "historial vehicular",
      "consultar vehículo Colombia",
      "antecedentes vehículo",
      "AutoCheck Colombia",
      "informe vehicular",
    ],
    alternates: { canonical: "/" },
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/favicon.png", type: "image/png", sizes: "512x512" },
      ],
      shortcut: "/favicon.ico",
      apple: [{ url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" }],
    },
    openGraph: {
      title: "AutoCheck | Decide mejor antes de comprar",
      description: "Conoce el historial del vehículo y recibe orientación profesional para entender cada hallazgo.",
      url: baseUrl,
      siteName: "AutoCheck",
      locale: "es_CO",
      type: "website",
      images: [{ url: `${baseUrl}/og.png`, width: 1200, height: 630, alt: "AutoCheck — Historial vehicular con respaldo profesional" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "AutoCheck | Decide mejor antes de comprar",
      description: "Conoce el historial del vehículo y recibe orientación profesional para entender cada hallazgo.",
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
