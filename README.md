# November Fest 2026 · Cumple de Sebas — Invitación digital

Landing page de invitación estilo scrapbook/collage veraniego (Ibiza vibes), mobile-first, construida con **React 18 + TypeScript (strict) + Vite + SCSS modules + Framer Motion**, con **Clean Architecture** y **Atomic Design**.

## Correr el proyecto

```bash
npm install
npm run dev        # desarrollo (http://localhost:5173)
npm run build      # type-check estricto + build de producción
npm run preview    # servir el build localmente
npm run lint       # ESLint
npm run test       # pruebas de los cálculos de dinero (vitest)
```

## Editar textos, precios y listas

**Todo el contenido vive en un solo archivo:** [src/data/datasources/invitation.data.ts](src/data/datasources/invitation.data.ts).

Cambiar un texto, un precio, un ítem de mercado o un link **no requiere tocar ningún componente**. Los totales (total base, aporte por persona, subtotal/reserva/total de mercados) se calculan automáticamente en los use cases (`src/domain/usecases/`); si cambias los ítems, los totales se actualizan solos y las pruebas (`npm run test`) te avisan si ya no coinciden con los valores oficiales.

## Reemplazar assets (imágenes generadas con IA)

1. Los placeholders actuales son SVG/degradados generados en código.
2. Genera los assets finales con IA usando los prompts de [ASSETS_PROMPTS.md](ASSETS_PROMPTS.md).
3. Copia los archivos a `src/assets/images/` (recomendado `.webp` + fallback `.jpg`, o `.svg/.png` transparente para stickers).
4. Actualiza la referencia **únicamente** en [src/assets/index.ts](src/assets/index.ts). Los componentes no cambian.
5. El retrato del cumpleañero se reemplaza en `portraits.sebas` (o pasando `src` al componente `PortraitSticker`).

## Cambiar la paleta / tipografía

Todo el tema (colores, espaciados, sombras, breakpoints, fuentes, mixins) está en [src/presentation/styles/theme.scss](src/presentation/styles/theme.scss). Cambia una variable (ej. `$color-teal`) y toda la app se re-tematiza. Los `@keyframes` globales están en [src/presentation/styles/animations.scss](src/presentation/styles/animations.scss) y las variantes de Framer Motion en [src/presentation/animations/variants.ts](src/presentation/animations/variants.ts).

## Estructura

```
src/
├─ core/          # utils, hooks, types (transversal)
├─ domain/        # entidades + interfaces + use cases (sin React)
├─ data/          # invitation.data.ts + implementación del repositorio
├─ presentation/
│  ├─ styles/     # theme.scss, animations.scss, global.scss
│  ├─ animations/ # variants.ts (Framer Motion)
│  ├─ components/ # atoms → molecules → organisms → templates (cada uno en su carpeta)
│  ├─ pages/      # InvitationPage (única que consume use cases)
│  └─ providers/  # DependencyProvider (inyección simple)
└─ assets/        # imágenes, logos, stickers + index.ts (único punto de importación)
```

## Accesibilidad y móvil

- `100dvh` con fallback, `env(safe-area-inset-*)`, targets táctiles ≥ 44×44 px.
- `prefers-reduced-motion`: desactiva parallax, loops y confeti (quedan fades simples).
- Tablas reales con `<th scope>`, `aria-expanded` en acordeones, roles en tabs, foco visible.
- Sin `background-attachment: fixed` (parallax simulado con `transform`).

## Despliegue

Es un sitio estático: el build queda en `dist/`.

**Vercel:** `npm i -g vercel && vercel` (detecta Vite automáticamente; build: `npm run build`, output: `dist`).

**Netlify:** arrastra la carpeta `dist/` a app.netlify.com o conecta el repo con build command `npm run build` y publish directory `dist`.

## Probar en dispositivos

Chrome Android, Safari iOS y Chrome iOS; anchos 360, 390, 430 y 768 px. Objetivo: Lighthouse móvil ≥ 90 en rendimiento y accesibilidad. Los QR (WhatsApp y Airbnb) se generan en código — pruébalos escaneándolos con la cámara del celular.
