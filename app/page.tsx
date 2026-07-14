const whatsappBase = "https://wa.me/573105523591";

const plans = [
  {
    level: "Nivel 1",
    name: "Reciente",
    price: "$15.000",
    audience: "Modelos 2021 o superiores",
    tone: "blue",
    features: ["Historial de siniestros", "Reclamaciones y pólizas"],
    note: "Una revisión ágil para vehículos con historial reciente.",
  },
  {
    level: "Nivel 2",
    name: "Plus",
    price: "$25.000",
    audience: "Modelos 2020 o anteriores",
    tone: "green",
    features: [
      "Historial de siniestros",
      "Reclamaciones y pólizas",
      "Consulta ampliada en fuentes adicionales",
    ],
    note: "Mayor trazabilidad desde la fecha de matrícula.",
  },
  {
    level: "Nivel 3",
    name: "Elite",
    price: "$31.000",
    audience: "Vehículos de cualquier año",
    tone: "purple",
    features: [
      "Historial de siniestros",
      "Reclamaciones",
      "Consulta ampliada en fuentes adicionales",
      "Historial de propietarios",
    ],
    note: "Una visión más completa para decidir con seguridad.",
  },
  {
    level: "Nivel 4",
    name: "Premium",
    price: "$50.000",
    audience: "Revisión total",
    tone: "gold",
    featured: true,
    features: [
      "Historial de siniestros y propietarios",
      "Data de riesgos y alertas",
      "Impuestos, multas y comparendos",
      "Embargos y estado legal",
      "Estado documental del vehículo",
      "Análisis y recomendaciones personalizadas",
    ],
    note: "La revisión más completa para proteger tu inversión.",
  },
];

const waLink = (message: string) =>
  `${whatsappBase}?text=${encodeURIComponent(message)}`;

function CheckIcon() {
  return <span className="check-icon" aria-hidden="true">✓</span>;
}

function WhatsAppIcon({ white = false }: { white?: boolean }) {
  return (
    <img
      className={`whatsapp-icon${white ? " whatsapp-icon-white" : ""}`}
      src={white ? "/whatsapp-icon-white.png" : "/whatsapp-icon-flat.png"}
      alt=""
      aria-hidden="true"
    />
  );
}

export default function Home() {
  const generalMessage =
    "Hola AutoCheck, quiero consultar el historial de un vehículo.";

  return (
    <main>
      <div className="topbar">
        <div className="container topbar-inner">
          <span>Informes claros, rápidos y confiables</span>
          <a href={waLink(generalMessage)} target="_blank" rel="noreferrer">
            Atención por WhatsApp · 310 552 3591
          </a>
        </div>
      </div>

      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#inicio" aria-label="AutoCheck, ir al inicio">
            <img src="/logo-autocheck.png" alt="AutoCheck — Respaldo Profesional" />
          </a>
          <nav aria-label="Navegación principal">
            <a href="#servicios">Servicios</a>
            <a href="#como-funciona">Cómo funciona</a>
            <a href="#preguntas">Preguntas</a>
          </nav>
          <a className="nav-cta" href={waLink(generalMessage)} target="_blank" rel="noreferrer">
            <WhatsAppIcon />
            Consultar por WhatsApp
          </a>
        </div>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span /> Historial vehicular en Colombia</div>
            <h1>Compra con información.<br /><em>No con suposiciones.</em></h1>
            <p className="hero-lead">
              Conoce los antecedentes del vehículo antes de invertir. Te entregamos un informe
              claro, analizado y listo para tomar una mejor decisión.
            </p>
            <div className="hero-actions">
              <a className="button button-whatsapp" href={waLink(generalMessage)} target="_blank" rel="noreferrer">
                <WhatsAppIcon white />
                <span className="whatsapp-copy"><strong>Consultar ahora</strong><small>Respuesta por WhatsApp</small></span>
              </a>
              <a className="button button-secondary" href="#servicios">Ver tipos de informe</a>
            </div>
            <div className="trust-row" aria-label="Beneficios">
              <span><CheckIcon /> Fuentes verificadas</span>
              <span><CheckIcon /> Entrega por WhatsApp</span>
              <span><CheckIcon /> Lectura fácil</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Ejemplo visual de un informe AutoCheck">
            <div className="report-card">
              <div className="report-top">
                <div>
                  <span className="report-kicker">INFORME AUTOCHECK</span>
                  <strong>Resumen del vehículo</strong>
                </div>
                <span className="verified-badge">✓ Verificado</span>
              </div>
              <div className="vehicle-line">
                <div className="vehicle-avatar">AC</div>
                <div>
                  <strong>Información centralizada</strong>
                  <span>Antecedentes, alertas y recomendaciones</span>
                </div>
              </div>
              <div className="report-score">
                <div className="score-ring"><span>360°</span></div>
                <div>
                  <small>ANÁLISIS PROFESIONAL</small>
                  <strong>Decide con mayor claridad</strong>
                  <p>Identificamos los hallazgos relevantes para que entiendas el informe.</p>
                </div>
              </div>
              <div className="report-list">
                <div><CheckIcon /><span>Historial de siniestros</span><b>Revisado</b></div>
                <div><CheckIcon /><span>Reclamaciones y riesgos</span><b>Revisado</b></div>
                <div><CheckIcon /><span>Antecedentes legales</span><b>Según plan</b></div>
              </div>
            </div>
            <div className="floating-pill floating-pill-one"><span>⚡</span> Entrega rápida</div>
            <div className="floating-pill floating-pill-two"><span>✓</span> Respaldo profesional</div>
          </div>
        </div>
      </section>

      <section className="year-selector" aria-labelledby="year-title">
        <div className="container">
          <div className="section-heading compact">
            <div>
              <span className="section-kicker">Empieza por aquí</span>
              <h2 id="year-title">¿De qué año es el vehículo?</h2>
            </div>
            <p>La fecha del modelo define qué consulta cubre mejor su historial.</p>
          </div>
          <div className="year-grid">
            <article className="year-card recent-year">
              <div className="year-icon">21+</div>
              <div className="year-content">
                <span className="mini-label">Modelo 2021 o superior</span>
                <h3>Historial reciente</h3>
                <p>Prioriza la información más actual y relevante para vehículos nuevos.</p>
              </div>
              <div className="year-price"><span>Desde</span><strong>$15.000</strong><a href="#plan-reciente">Ver informe →</a></div>
            </article>
            <article className="year-card previous-year">
              <div className="year-icon">20−</div>
              <div className="year-content">
                <span className="mini-label">Modelo 2020 o anterior</span>
                <h3>Historial ampliado</h3>
                <p>Busca mayor cobertura desde la matrícula para reducir vacíos en el historial.</p>
              </div>
              <div className="year-price"><span>Desde</span><strong>$25.000</strong><a href="#plan-plus">Ver informe →</a></div>
            </article>
          </div>
          <p className="year-note"><strong>Importante:</strong> el informe Reciente está diseñado para modelos 2021 en adelante. Para un vehículo anterior, te recomendamos Plus o un nivel superior.</p>
        </div>
      </section>

      <section className="services section" id="servicios">
        <div className="container">
          <div className="section-heading centered">
            <span className="section-kicker">Elige el nivel que necesitas</span>
            <h2>Un informe para cada decisión</h2>
            <p>Todos incluyen resumen ejecutivo, análisis de riesgos, recomendaciones y entrega digital por WhatsApp.</p>
          </div>

          <div className="plans-grid">
            {plans.map((plan) => (
              <article className={`plan-card ${plan.tone}${plan.featured ? " featured" : ""}`} id={`plan-${plan.name.toLowerCase()}`} key={plan.name}>
                <div className="plan-head">
                  <span className="level-tag">{plan.level}</span>
                  <h3>AutoCheck <strong>{plan.name}</strong></h3>
                  <p>{plan.audience}</p>
                </div>
                <div className="plan-price">{plan.price}</div>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}><CheckIcon /> {feature}</li>
                  ))}
                </ul>
                <p className="plan-note">{plan.note}</p>
                <a className="plan-button" href={waLink(`Hola AutoCheck, me interesa el informe ${plan.name} por ${plan.price}.`)} target="_blank" rel="noreferrer">
                  Elegir {plan.name}
                </a>
              </article>
            ))}
          </div>

          <div className="legal-addon">
            <div className="legal-symbol">⚖</div>
            <div>
              <span className="section-kicker">Complemento opcional</span>
              <h3>Revisión legal ampliada</h3>
              <p>Agrega consultas de rama judicial, impuestos, comparendos, RUNT y alertas legales.</p>
              <div className="legal-tags"><span>Rama judicial</span><span>Impuestos</span><span>Comparendos</span><span>RUNT</span></div>
            </div>
            <div className="legal-price"><strong>$25.000</strong><span>Ya incluido en Premium</span></div>
          </div>
        </div>
      </section>

      <section className="process section" id="como-funciona">
        <div className="container process-grid">
          <div className="process-intro">
            <span className="section-kicker light">Simple y sin trámites largos</span>
            <h2>De la consulta a una mejor decisión.</h2>
            <p>Te acompañamos para elegir la cobertura adecuada y recibir la información que realmente necesitas.</p>
            <a className="text-link" href={waLink(generalMessage)} target="_blank" rel="noreferrer">Iniciar mi consulta →</a>
          </div>
          <ol className="steps-list">
            <li><span>01</span><div><h3>Escríbenos</h3><p>Inicia la conversación por WhatsApp y cuéntanos qué vehículo estás evaluando.</p></div></li>
            <li><span>02</span><div><h3>Elige tu informe</h3><p>Te orientamos según el año del modelo y el nivel de profundidad que buscas.</p></div></li>
            <li><span>03</span><div><h3>Recibe y entiende</h3><p>Obtén el informe por WhatsApp con un resumen claro y recomendaciones.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="value section">
        <div className="container">
          <div className="section-heading centered narrow">
            <span className="section-kicker">Respaldo profesional</span>
            <h2>Un buen informe es el comienzo, no el final.</h2>
            <p>Transformamos datos dispersos en señales útiles para ayudarte a comprar con mayor tranquilidad.</p>
          </div>
          <div className="value-grid">
            <article><span>01</span><h3>Información confiable</h3><p>Consultas en fuentes y bases de datos disponibles para el nivel elegido.</p></article>
            <article><span>02</span><h3>Lectura sencilla</h3><p>Un resumen ejecutivo que prioriza los hallazgos importantes.</p></article>
            <article><span>03</span><h3>Análisis de riesgos</h3><p>Contexto profesional para que identifiques señales de alerta.</p></article>
            <article><span>04</span><h3>Recomendaciones</h3><p>Próximos pasos claros para complementar tu decisión de compra.</p></article>
          </div>
        </div>
      </section>

      <section className="faq section" id="preguntas">
        <div className="container faq-grid">
          <div className="faq-intro">
            <span className="section-kicker">Preguntas frecuentes</span>
            <h2>Lo esencial antes de consultar.</h2>
            <p>Si aún no sabes qué informe elegir, escríbenos. Revisamos contigo el año y el tipo de compra.</p>
          </div>
          <div className="faq-list">
            <details open><summary>¿Qué informe debo elegir según el año?</summary><p>Para modelos 2021 o superiores, Reciente cubre el historial más actual. Para modelos 2020 o anteriores, Plus ofrece una trazabilidad histórica más amplia. Elite y Premium aplican a cualquier año.</p></details>
            <details><summary>¿Cómo recibo el informe?</summary><p>El informe se entrega de forma digital por WhatsApp para que puedas consultarlo y compartirlo fácilmente.</p></details>
            <details><summary>¿Premium incluye la revisión legal?</summary><p>Sí. El nivel Premium ya incluye el complemento legal. En los demás niveles puedes agregarlo por $25.000.</p></details>
            <details><summary>¿El informe reemplaza un peritaje físico?</summary><p>No. El historial vehicular aporta antecedentes y alertas documentales; para una compra integral es recomendable complementarlo con una inspección física y mecánica.</p></details>
          </div>
        </div>
      </section>

      <section className="whatsapp-cta">
        <div className="container whatsapp-inner">
          <div>
            <span className="section-kicker light">Estamos listos para ayudarte</span>
            <h2>Antes de comprar,<br />hablemos del vehículo.</h2>
            <p>Atención directa por WhatsApp. Cuéntanos el modelo y te ayudamos a elegir el informe correcto.</p>
          </div>
          <div className="contact-block">
            <span>WhatsApp AutoCheck</span>
            <a className="phone-number" href={waLink(generalMessage)} target="_blank" rel="noreferrer">310 552 3591</a>
            <a className="button button-whatsapp light-button" href={waLink(generalMessage)} target="_blank" rel="noreferrer"><WhatsAppIcon /><span className="whatsapp-copy"><strong>Abrir conversación</strong><small>Atención directa por WhatsApp</small></span></a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-main">
          <img src="/logo-autocheck.png" alt="AutoCheck — Respaldo Profesional" />
          <p>Información confiable. Análisis profesional.<br />Tranquilidad para tu inversión.</p>
          <div><a href="#servicios">Servicios</a><a href="#como-funciona">Cómo funciona</a><a href={waLink(generalMessage)} target="_blank" rel="noreferrer">WhatsApp</a></div>
        </div>
        <div className="container footer-bottom"><span>© 2026 AutoCheck. Todos los derechos reservados.</span><span>auto-check.co</span></div>
      </footer>

      <a className="floating-whatsapp" href={waLink(generalMessage)} target="_blank" rel="noreferrer" aria-label="Contactar a AutoCheck por WhatsApp"><WhatsAppIcon /><b>WhatsApp</b></a>
    </main>
  );
}
