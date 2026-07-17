import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("https://auto-check.co/", {
      headers: { accept: "text/html", host: "auto-check.co" },
    }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the AutoCheck landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /AutoCheck/);
  assert.match(html, /Compra con información/);
  assert.match(html, /¿Qué hace diferente a AutoCheck\?/);
  assert.match(html, /Antes de comprar un vehículo probablemente te preguntas/);
  assert.match(html, /Cuando recibes una consulta AutoCheck no solo obtienes información/);
  assert.match(html, /Los datos por sí solos no toman decisiones/);
  assert.match(html, /No todos los compradores necesitan el mismo nivel de revisión/);
  assert.match(html, /AutoCheck Plus amplía la búsqueda utilizando fuentes adicionales/);
  assert.match(html, /Puedes agregar el Complemento Legal/);
  assert.match(html, /Realizamos la consulta y analizamos la información/);
  assert.match(html, /¿Por qué nuestros clientes nos recomiendan\?/);
  assert.match(html, /La diferencia entre una buena compra y un problema/);
  assert.ok((html.match(/No solo entregamos un informe/g) ?? []).length >= 3);
  assert.match(html, /310 552 3591/);
  assert.match(html, /https:\/\/wa\.me\/573105523591/);
  assert.match(html, /og\.png/);
  assert.doesNotMatch(html, /Your site is taking shape|codex-preview/);
});
