const whatsappBase = "https://wa.me/573105523591";

const plans = [
  {
    level: "Nivel 1",
    name: "Reciente",
    price: "$15.000",
    audience: "Modelos 2021 o superiores",
    tone: "blue",
    description: [
      "Recomendado para vehículos modelo 2021 o superiores.",
      "Obtén el historial asegurador reciente disponible y una interpretación profesional de los resultados para conocer si existen antecedentes relevantes antes de comprar.",
    ],
    features: ["Historial de siniestros", "Reclamaciones y pólizas"],
    note: "Recomendado para vehículos modelo 2021 o superiores.",
  },
  {
    level: "Nivel 2",
    name: "Plus",
    price: "$25.000",
    audience: "Modelos 2020 o anteriores",
    tone: "green",
    description: [
      "Los vehículos con varios años de uso pueden presentar vacíos en algunas bases de datos recientes.",
      "AutoCheck Plus amplía la búsqueda utilizando fuentes adicionales para ofrecer una mejor trazabilidad histórica desde la matrícula del vehículo.",
    ],
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
    description: [
      "Además del historial asegurador, incorpora el historial de propietarios registrados.",
      "Ideal para quienes desean comprender mejor la trayectoria del vehículo antes de negociar.",
    ],
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
    description: [
      "La revisión más completa para comprar con mayor seguridad.",
      "Además del historial asegurador y de propietarios, verificamos aspectos legales y documentales que pueden representar riesgos importantes antes de cerrar una negociación.",
      "Incluye interpretación profesional y acompañamiento para resolver cualquier duda sobre los resultados.",
    ],
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
            <h1>Compra con información.<br /><em>No con incertidumbre.</em></h1>
            <div className="hero-body">
              <p>Antes de invertir en un vehículo usado, conoce su historial y recibe la orientación de un profesional para interpretar cada hallazgo.</p>
              <p>En AutoCheck analizamos información proveniente de diferentes fuentes públicas y privadas para ayudarte a identificar riesgos, antecedentes y alertas que podrían afectar tu compra.</p>
            </div>
            <div className="hero-difference">
              <strong>Porque recibir un PDF es fácil.</strong>
              <span>Lo importante es saber qué significa.</span>
            </div>
            <div className="hero-actions">
              <a className="button button-whatsapp" href={waLink(generalMessage)} target="_blank" rel="noreferrer">
                <WhatsAppIcon white />
                <span className="whatsapp-copy"><strong>Consultar ahora</strong><small>Respuesta por WhatsApp</small></span>
              </a>
              <a className="button button-secondary" href="#servicios">Ver tipos de informe</a>
            </div>
            <div className="trust-row" aria-label="Beneficios">
              <span><CheckIcon /> Fuentes verificadas</span>
              <span><CheckIcon /> Interpretación profesional</span>
              <span><CheckIcon /> Atención humana</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Ejemplo visual de un informe AutoCheck">
            <div className="report-card">
              <div className="report-top">
                <div>
                  <span className="report-kicker">INFORME AUTOCHECK</span>
                  <strong>Mucho más que un informe</strong>
                </div>
                <span className="verified-badge">✓ Verificado</span>
              </div>
              <div className="vehicle-line">
                <div className="vehicle-avatar">AC</div>
                <div>
                  <strong>Revisado por personas</strong>
                  <span>Hallazgos explicados con claridad</span>
                </div>
              </div>
              <div className="report-score">
                <div className="score-ring"><span>360°</span></div>
                <div>
                  <small>ANÁLISIS PROFESIONAL</small>
                  <strong>Entiende lo que realmente importa</strong>
                  <p>Destacamos lo que puede influir en tu decisión de compra.</p>
                </div>
              </div>
              <div className="report-list">
                <div><CheckIcon /><span>Historial de siniestros</span><b>Revisado</b></div>
                <div><CheckIcon /><span>Reclamaciones y riesgos</span><b>Revisado</b></div>
                <div><CheckIcon /><span>Orientación profesional</span><b>Incluida</b></div>
              </div>
            </div>
            <div className="floating-pill floating-pill-one"><span>⚡</span> Entrega rápida</div>
            <div className="floating-pill floating-pill-two"><span>✓</span> Respaldo profesional</div>
          </div>
        </div>
      </section>

      <section className="differentiator section" aria-labelledby="differentiator-title">
        <div className="container differentiator-grid">
          <div className="differentiator-copy">
            <span className="section-kicker">Nuestro diferencial</span>
            <h2 id="differentiator-title">¿Qué hace diferente a AutoCheck?</h2>
            <p>Muchos servicios entregan información.</p>
            <p className="differentiator-emphasis">Nosotros la analizamos contigo.</p>
            <p>Cada consulta incluye:</p>
          </div>
          <div className="differentiator-card">
            <ul>
              <li><CheckIcon /> Un informe organizado y fácil de entender.</li>
              <li><CheckIcon /> Interpretación profesional de los resultados.</li>
              <li><CheckIcon /> Recomendaciones según los hallazgos encontrados.</li>
              <li><CheckIcon /> Atención humana por WhatsApp para resolver tus dudas.</li>
            </ul>
            <p>Porque una buena decisión necesita algo más que datos.</p>
          </div>
        </div>
        <div className="container commercial-slogan">
          <strong>No solo entregamos un informe.</strong>
          <span>Te ayudamos a entenderlo para que tomes una mejor decisión.</span>
        </div>
      </section>

      <section className="buyer-questions section" aria-labelledby="questions-title">
        <div className="container questions-grid">
          <div className="questions-intro">
            <span className="section-kicker">Antes de negociar</span>
            <h2 id="questions-title">Antes de comprar un vehículo probablemente te preguntas...</h2>
            <p>Nuestro trabajo consiste en ayudarte a responder esas preguntas antes de que tomes una decisión.</p>
          </div>
          <div className="question-cards">
            <article><span>?</span><p>¿Habrá sufrido un accidente importante?</p></article>
            <article><span>?</span><p>¿Tendrá problemas legales?</p></article>
            <article><span>?</span><p>¿Estará embargado?</p></article>
            <article><span>?</span><p>¿Los impuestos están al día?</p></article>
            <article><span>?</span><p>¿Ha tenido muchos propietarios?</p></article>
            <article><span>?</span><p>¿Vale realmente lo que me están pidiendo?</p></article>
          </div>
        </div>
      </section>

      <section className="report-explanation section" aria-labelledby="report-explanation-title">
        <div className="container report-explanation-grid">
          <div className="editorial-report-card" aria-hidden="true">
            <span>INFORME AUTOCHECK</span>
            <strong>Mucho más que un informe.</strong>
            <div><CheckIcon /> Información organizada</div>
            <div><CheckIcon /> Hallazgos relevantes</div>
            <div><CheckIcon /> Orientación profesional</div>
          </div>
          <div className="report-explanation-copy">
            <span className="section-kicker">Revisado por personas</span>
            <h2 id="report-explanation-title">Mucho más que un informe.</h2>
            <p>Cuando recibes una consulta AutoCheck no solo obtienes información.</p>
            <p>Recibes un análisis realizado por personas que revisan los resultados y destacan únicamente aquello que realmente puede influir en tu decisión de compra.</p>
            <p>Nuestro objetivo no es entregarte cientos de datos.</p>
            <p className="report-explanation-closing">Nuestro objetivo es ayudarte a entender cuáles realmente importan.</p>
            <p className="report-slogan"><strong>No solo entregamos un informe.</strong> Te ayudamos a entenderlo para que tomes una mejor decisión.</p>
          </div>
        </div>
      </section>

      <section className="value section" aria-labelledby="interpretation-title">
        <div className="container">
          <div className="section-heading centered narrow interpretation-heading">
            <span className="section-kicker">Interpretación profesional</span>
            <h2 id="interpretation-title">Los datos por sí solos no toman decisiones.</h2>
            <div className="interpretation-copy">
              <p>Un historial puede contener mucha información.</p>
              <p>Lo verdaderamente importante es saber interpretarla.</p>
              <p>Por eso revisamos cada consulta y te explicamos los hallazgos relevantes antes de que tomes una decisión.</p>
            </div>
          </div>
          <div className="value-grid">
            <article><h3>Información organizada</h3><p>Un informe fácil de entender con los datos disponibles para el nivel elegido.</p></article>
            <article><h3>Interpretación profesional</h3><p>Personas reales revisan los resultados y priorizan los hallazgos importantes.</p></article>
            <article><h3>Recomendaciones claras</h3><p>Contexto y próximos pasos según las alertas encontradas en la consulta.</p></article>
            <article><h3>Atención humana</h3><p>Resolvemos tus dudas por WhatsApp incluso después de entregar el informe.</p></article>
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
          <div className="section-heading centered plans-heading">
            <span className="section-kicker">Elige el nivel que necesitas</span>
            <h2>No todos los compradores necesitan el mismo nivel de revisión.</h2>
            <div className="plans-intro-copy">
              <p>Hay quienes solo desean revisar el historial asegurador.</p>
              <p>Otros quieren conocer también propietarios anteriores.</p>
              <p>Y algunos prefieren verificar además impuestos, comparendos, embargos y el estado legal completo.</p>
              <p>Por eso diseñamos diferentes niveles de consulta para que pagues únicamente por la información que realmente necesitas.</p>
            </div>
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
                <div className="plan-description">
                  {plan.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
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
              <h3>Complemento Legal</h3>
              <div className="legal-copy">
                <p><strong>Ya tienes una consulta AutoCheck y quieres ir un paso más allá.</strong></p>
                <p>Puedes agregar el Complemento Legal para revisar información jurídica y documental que no hace parte de los niveles históricos.</p>
                <p>Ideal cuando ya decidiste avanzar con la compra y deseas realizar una validación adicional antes de negociar.</p>
              </div>
              <div className="legal-tags"><span>Rama judicial</span><span>Impuestos</span><span>Comparendos</span><span>RUNT</span></div>
            </div>
            <div className="legal-price"><strong>$25.000</strong><span>Ya incluido en Premium</span></div>
          </div>
        </div>
      </section>

      <section className="process section" id="como-funciona">
        <div className="container process-grid">
          <div className="process-intro">
            <span className="section-kicker light">Simple y acompañado</span>
            <h2>Cómo funciona</h2>
            <p>No solo recopilamos información. La revisamos, te la explicamos y estamos contigo hasta que resuelvas tus dudas.</p>
            <a className="text-link" href={waLink(generalMessage)} target="_blank" rel="noreferrer">Iniciar mi consulta →</a>
          </div>
          <ol className="steps-list">
            <li><span>01</span><div><h3>Envíanos la placa.</h3><p>Si no sabes cuál consulta necesitas, nosotros te ayudamos a elegir.</p></div></li>
            <li><span>02</span><div><h3>Realizamos la consulta y analizamos la información.</h3><p>No solo recopilamos datos.</p><p>Revisamos los hallazgos para identificar aquello que realmente merece tu atención.</p></div></li>
            <li><span>03</span><div><h3>Recibes el informe y nuestro acompañamiento.</h3><p>Te entregamos un resumen claro, resolvemos tus dudas y te explicamos qué significa cada resultado para que tomes una decisión con mayor confianza.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="recommendation section">
        <div className="container recommendation-grid">
          <div className="recommendation-copy">
            <span className="section-kicker light">Por qué nos recomiendan</span>
            <h2>¿Por qué nuestros clientes nos recomiendan?</h2>
            <div className="recommendation-text">
              <p>Porque no reciben únicamente un documento.</p>
              <p className="recommendation-emphasis">Reciben una explicación.</p>
              <p>Cuando entregamos una consulta también estamos disponibles para ayudarte a interpretar la información.</p>
              <p>Si encuentras una alerta, una reclamación, un embargo, un proceso judicial o cualquier otro hallazgo, te explicamos qué significa y cómo puede influir en la compra del vehículo.</p>
            </div>
            <blockquote>Nuestro objetivo no termina cuando enviamos el informe.<br />Empieza cuando tú comienzas a revisarlo.</blockquote>
          </div>
          <div className="included-card">
            <span>En todas las consultas</span>
            <h3>Lo que obtienes con cualquier consulta AutoCheck</h3>
            <ul>
              <li><CheckIcon /> Información organizada</li>
              <li><CheckIcon /> Interpretación profesional</li>
              <li><CheckIcon /> Recomendaciones según los hallazgos</li>
              <li><CheckIcon /> Atención humana por WhatsApp</li>
              <li><CheckIcon /> Resolución de dudas</li>
              <li><CheckIcon /> Acompañamiento antes de tomar la decisión</li>
            </ul>
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
            <details><summary>¿Por qué AutoCheck es diferente?</summary><p>Porque nuestro servicio no consiste únicamente en consultar bases de datos.</p><p>Cada informe es revisado para destacar los hallazgos más importantes y ayudarte a comprender qué significan antes de comprar un vehículo.</p><p>Además, si tienes dudas, cuentas con atención humana por WhatsApp para orientarte.</p></details>
            <details><summary>¿Puedo hacer preguntas sobre mi informe?</summary><p>Sí.</p><p>Después de recibir tu consulta puedes escribirnos por WhatsApp.</p><p>Con gusto resolveremos tus dudas y te ayudaremos a interpretar los resultados.</p></details>
          </div>
        </div>
      </section>

      <section className="whatsapp-cta">
        <div className="container whatsapp-inner">
          <div>
            <span className="section-kicker light">Estamos listos para ayudarte</span>
            <h2>La diferencia entre una buena compra y un problema puede estar en conocer el historial antes de negociar.</h2>
            <div className="cta-copy">
              <p>Déjanos ayudarte.</p>
              <p>Analizamos la información.</p>
              <p>La interpretamos contigo.</p>
              <p>Y te acompañamos para que tomes una decisión con mayor tranquilidad.</p>
            </div>
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
          <p>No solo entregamos un informe.<br />Te ayudamos a entenderlo para que tomes una mejor decisión.</p>
          <div><a href="#servicios">Servicios</a><a href="#como-funciona">Cómo funciona</a><a href={waLink(generalMessage)} target="_blank" rel="noreferrer">WhatsApp</a></div>
        </div>
        <div className="container footer-bottom"><span>© 2026 AutoCheck. Todos los derechos reservados.</span><span>auto-check.co</span></div>
      </footer>

      <a className="floating-whatsapp" href={waLink(generalMessage)} target="_blank" rel="noreferrer" aria-label="Contactar a AutoCheck por WhatsApp"><WhatsAppIcon /><b>WhatsApp</b></a>
    </main>
  );
}
