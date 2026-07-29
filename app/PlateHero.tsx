"use client";

import { FormEvent, useState } from "react";

const whatsappBase = "https://wa.me/573124095620";

export default function PlateHero() {
  const [plate, setPlate] = useState("");
  const [vehicleModel, setVehicleModel] = useState("unknown");
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const normalizedPlate = plate.toUpperCase().replace(/[^A-Z0-9]/g, "");

    if (normalizedPlate.length < 5 || normalizedPlate.length > 6) {
      setError("Ingresa una placa válida, por ejemplo ABC123.");
      return;
    }

    const modelSuffix =
      vehicleModel === "2020-or-earlier"
        ? ". Es modelo 2020 o anterior"
        : vehicleModel === "2021-or-later"
          ? ". Es modelo 2021 o superior"
          : "";
    const message = `Hola AutoCheck, quiero consultar el historial de un vehículo de placa ${normalizedPlate}${modelSuffix}`;
    window.open(
      `${whatsappBase}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <section className="proposal-hero" id="inicio">
      <div className="proposal-hero-glow proposal-glow-one" />
      <div className="proposal-hero-glow proposal-glow-two" />
      <div className="container proposal-hero-grid">
        <div className="proposal-copy">
          <div className="proposal-eyebrow">
            <span className="proposal-eyebrow-check">✓</span>
            Compra con información. No con incertidumbre.
          </div>
          <h1>
            Consulta el historial del vehículo <em>que deseas.</em>
          </h1>
          <p className="proposal-lead">
            Conoce antecedentes, riesgos y hallazgos importantes antes de
            comprar.
          </p>

          <form className="plate-form" onSubmit={handleSubmit} noValidate>
            <label htmlFor="vehicle-plate">Placa del vehículo</label>
            <div className="plate-form-row">
              <div className={`plate-input-wrap${error ? " has-error" : ""}`}>
                <span aria-hidden="true">CO</span>
                <input
                  id="vehicle-plate"
                  name="vehicle-plate"
                  type="text"
                  inputMode="text"
                  autoComplete="off"
                  maxLength={6}
                  placeholder="Escribe la placa aquí"
                  value={plate}
                  onChange={(event) => {
                    setPlate(
                      event.target.value
                        .toUpperCase()
                        .replace(/[^A-Z0-9]/g, "")
                        .slice(0, 6),
                    );
                    setError("");
                  }}
                  aria-describedby={error ? "plate-error plate-price" : "plate-price"}
                  aria-invalid={Boolean(error)}
                />
              </div>
              <button type="submit" className="proposal-whatsapp-button">
                <img src="/whatsapp-icon-white.png" alt="" aria-hidden="true" />
                <span>Quiero mi informe</span>
              </button>
            </div>
            <fieldset className="vehicle-model-options">
              <legend>¿Conoces el modelo/año del vehículo?</legend>
              <div className="vehicle-model-choice-row">
                <label>
                  <input
                    type="radio"
                    name="vehicle-model"
                    value="unknown"
                    checked={vehicleModel === "unknown"}
                    onChange={(event) => setVehicleModel(event.target.value)}
                  />
                  <span>No conozco el modelo</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="vehicle-model"
                    value="2020-or-earlier"
                    checked={vehicleModel === "2020-or-earlier"}
                    onChange={(event) => setVehicleModel(event.target.value)}
                  />
                  <span>Es modelo 2020 o anterior</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="vehicle-model"
                    value="2021-or-later"
                    checked={vehicleModel === "2021-or-later"}
                    onChange={(event) => setVehicleModel(event.target.value)}
                  />
                  <span>Es modelo 2021 o superior</span>
                </label>
              </div>
            </fieldset>
            <div className="plate-form-meta">
              <p id="plate-price">
                Consultas desde sólo <strong>$15.000 COP</strong>
              </p>
              <p className="plate-security">
                <span aria-hidden="true">✓</span> Atención humana por WhatsApp
              </p>
            </div>
            {error && (
              <p className="plate-error" id="plate-error" role="alert">
                {error}
              </p>
            )}
          </form>

          <div className="proposal-trust-row" aria-label="Beneficios">
            <span>✓ Fuentes verificadas</span>
            <span>✓ Interpretación profesional</span>
            <span>✓ Entrega rápida</span>
          </div>
        </div>

        <div className="proposal-visual" aria-label="Vehículo e información incluida en un informe AutoCheck">
          <div className="proposal-visual-frame">
            <div className="vehicle-report-board">
              <div className="vehicle-report-heading">
                <div>
                  <small>INFORME AUTOCHECK</small>
                  <strong>Mucho más que un informe</strong>
                </div>
                <span>✓ Verificado</span>
              </div>
              <div className="vehicle-report-analysis">
                <div className="vehicle-score-ring">360°</div>
                <div>
                  <small>ANÁLISIS PROFESIONAL</small>
                  <strong>Entiende lo que realmente importa</strong>
                  <p>Destacamos lo que puede influir en tu decisión de compra.</p>
                </div>
              </div>
              <div className="vehicle-report-list">
                <span><i>✓</i> Historial de siniestros <b>Revisado</b></span>
                <span><i>✓</i> Reclamaciones y riesgos <b>Revisado</b></span>
              </div>
            </div>
            <img
              className="proposal-car"
              src="/propuesta-hero-suv.png"
              alt="Vehículo plateado listo para consultar en AutoCheck"
            />
            <div className="insight-card insight-card-one">
              <span className="insight-icon success">✓</span>
              <div><small>REVISIÓN</small><strong>Fuentes verificadas</strong></div>
            </div>
            <div className="insight-card insight-card-two">
              <span className="insight-icon alert">⚡</span>
              <div><small>RESPUESTA</small><strong>Entrega rápida</strong></div>
            </div>
            <div className="insight-card insight-card-three">
              <span className="insight-icon info">✓</span>
              <div><small>RESPALDO</small><strong>Revisado por personas</strong></div>
            </div>
          </div>
        </div>
      </div>
      <a className="proposal-scroll-cue" href="#servicios">
        Conoce nuestros informes <span aria-hidden="true">↓</span>
      </a>
    </section>
  );
}
