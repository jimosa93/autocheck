import type { Metadata } from "next";
import Home from "../page";
import PlateHero from "./PlateHero";

export const metadata: Metadata = {
  title: "Consulta el historial de un vehículo | AutoCheck",
  description:
    "Ingresa la placa y solicita por WhatsApp un informe de historial vehicular con interpretación profesional.",
  alternates: { canonical: "/propuesta-landing" },
};

export default function ProposalLandingPage() {
  return <Home proposalHero={<PlateHero />} />;
}
