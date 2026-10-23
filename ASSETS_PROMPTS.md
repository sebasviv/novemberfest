# ASSETS_PROMPTS.md — Prompts para generar los assets con IA

Todos los assets son originales (NO extraídos del PDF). Los placeholders actuales son SVG generados en código (`src/assets/images/placeholders.ts`). Genera cada imagen con tu herramienta de IA favorita (Midjourney, DALL·E, Firefly…), guárdala en `src/assets/images/` como `.webp` (+ fallback `.jpg`) y actualiza la referencia **solo** en `src/assets/index.ts`.

Estilo general sugerido para mantener coherencia: *fotografía veraniega luminosa, tonos arena/azul petróleo/dorado, luz dorada de atardecer, estética editorial de viajes*.

## Fondos

### hero-sky (fondo del hero)
> Cielo caribeño al atardecer con palmeras en silueta y montañas suaves al fondo, tonos azul cielo #8CC8EE degradando a arena #F4EBD9, sol dorado bajo, estilo ilustración gouache cálida, sin texto, vertical 3:4, bordes limpios para usar como fondo de invitación.

### paper-texture (textura seamless)
> Textura seamless de papel artesanal color arena #F4EBD9 con grano fino y motas beige #E6D6B8, plano, sin objetos, tileable, alta resolución.

### footer-water (fondo del footer)
> Agua de piscina turquesa vista cenital con reflejos de sol y caustics suaves, tonos teal #1B6E8A y aqua #CFE6EE, estilo ilustración, horizontal, sin personas ni texto.

## Fotos de la finca (polaroids)

1. **finca** — Vista aérea dron de villa blanca campestre en Colombia con piscina azul turquesa rodeada de palmeras, montañas verdes de fondo, luz de mediodía.
2. **piscina** — Piscina con azulejo azul y jacuzzi integrado, borde de piedra, agua cristalina, toalla de lino beige al borde, luz dorada.
3. **terraza** — Terraza social de finca con hamaca entre columnas, sofás de ratán con cojines blancos y azules, plantas tropicales, atardecer cálido.
4. **montanas** — Vista a montañas verdes de Cundinamarca desde el borde de una piscina infinita, cielo azul con nubes suaves, mediodía.
5. **chill** — Zona chill con silla colgante de macramé y luces cálidas, atardecer dorado, ambiente acogedor.
6. **habitacion** — Habitación de finca con cama de madera, cobijas azul marino y blancas, luz natural por ventana con cortinas de lino.
7. **atardecer** — Atardecer dorado intenso sobre piscina con palmeras en silueta, cielo naranja-coral, reflejo en el agua.

## Fotos de comida (menú)

1. **hamburguesa** — Hamburguesa artesanal con tocineta y queso derretido sobre tabla de madera con papas a la francesa, fondo rústico claro, luz natural.
2. **desayuno** — Desayuno colombiano: huevos revueltos, sándwich de jamón y queso, jugo de naranja, uvas y granola, mesa de madera clara, luz de mañana.
3. **almuerzo** — Pechuga a la plancha con arroz blanco, ensalada fresca de aguacate y tomate, papas a la francesa y plátano maduro, plato blanco, luz natural.
4. **arroz-pollo** — Arroz con pollo colombiano servido en plato hondo con papas y gaseosa, colores cálidos, mesa campestre.
5. **asado** — Asado colombiano en tabla de madera: carne a la parrilla, chorizos, costillas, arepas y papa criolla con chimichurri, humo suave, luz cálida.

## Retrato del cumpleañero

> **Requiere input del usuario:** usa una foto de referencia de Sebas como imagen base (herramientas con image-to-image o "character reference"). Prompt sugerido:
>
> *Retrato festivo del hombre de la foto de referencia, estilo sticker/recorte con borde blanco grueso, sonriendo con gafas de sol y camisa de lino blanca, fondo transparente, ilustración semi-realista veraniega, alta fidelidad al rostro de referencia.*

Genera 2–3 poses (saludando, con copa, señalando). Guarda como PNG/WebP transparente y reemplaza `portraits.sebas` en `src/assets/index.ts`. El componente `PortraitSticker` también acepta `src` por prop.

## Stickers / logos SVG

Los stickers (corona, sol, palmera, disco ball, sparkles, flechas, olas, vinilo, gafas, copas, cinta washi) ya están dibujados en código dentro del componente `Sticker` y son animables. Si prefieres arte más elaborado, genera SVG/PNG transparentes y conéctalos en `Sticker.tsx` o como imágenes independientes.

### logotipo-november-fest
> Lettering "November Fest" estilo brush script plateado cromado con brillo metálico, sobre fondo transparente, SVG vectorial, trazo grueso elegante, con destellos sparkles.

## Favicon / OG image

- **favicon**: sol dorado minimalista con rayos sobre fondo teal, 512×512 PNG (versión actual: `public/favicon.svg`).
- **og-image** (1200×630): collage veraniego con título "November Fest", palmeras y polaroid de piscina, tonos arena/azul/dorado (versión actual: `public/og-image.svg`).
