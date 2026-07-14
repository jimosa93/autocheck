# AutoCheck

Landing page oficial de **AutoCheck**, enfocada en la consulta de historial vehicular y la conversión de visitantes a conversaciones por WhatsApp.

## Ejecutar localmente

Requiere Node.js 22.13 o superior.

```bash
npm install
npm run dev
```

La aplicación estará disponible en `http://localhost:3000` (o en el siguiente puerto disponible).

## Validar una versión de producción

```bash
npm run build
npm run start
```

## Desplegar en Coolify

El repositorio incluye un `Dockerfile` listo para desplegar:

1. Sube el repositorio a GitHub.
2. En Coolify crea un recurso desde ese repositorio.
3. Selecciona **Dockerfile** como método de construcción.
4. Expón el puerto `3000` y asigna el dominio `auto-check.co`.
5. Despliega el recurso.

No se requieren variables de entorno para esta versión.

## Contacto configurado

Todos los botones abren WhatsApp en el número `+57 310 552 3591` con mensajes previamente diligenciados según el servicio seleccionado.
