# Generación Dorada

Sitio web sobre la Generación Dorada del básquet argentino: quiénes fueron, qué lograron y qué dejaron. Trabajo de Introducción a la Programación Web.

Publicado en https://tetumasci.github.io/generacion-dorada

## Páginas

| Archivo | Contenido |
| --- | --- |
| `index.html` | Presentación y línea de tiempo resumida |
| `pages/historia.html` | El básquet argentino antes de 2002, la racha de Estados Unidos, por qué el oro olímpico vale más que un Mundial, la cronología torneo por torneo y el video de la palomita |
| `pages/logros.html` | Tabla de medallas de la Selección, premios individuales, títulos de clubes y récords |
| `pages/jugadores.html` | Ficha de cada uno de los doce jugadores y de los dos entrenadores (clubes, títulos, premios), con buscador |
| `pages/legado.html` | Despedidas, camisetas retiradas, salones de la fama y homenajes |
| `pages/galeria.html` | Fotos y video propios de la exposición y del partido de 2024 |

## Estructura

```
index.html
pages/    páginas internas
css/      estilos.css (colores y tipografía en variables al principio del archivo)
js/       app.js (botones "Ver detalle" en Historia y Jugadores, y buscador en Jugadores)
img/      fotos e ilustraciones del sitio
video/    video propio del partido homenaje (el de la palomita está incrustado desde YouTube)
```

## Diseño

- Colores: el celeste de la camiseta, el azul marino de los números y el dorado de la medalla. Están en variables al principio de `css/estilos.css`.
- Tipografías (Google Fonts): Barlow Condensed para títulos, parecida al lettering de una camiseta, y Barlow para el texto.

## Cómo verlo

Abrir `index.html` en el navegador. No necesita instalar nada.

## Fuentes

Cada página que usa datos externos lista sus fuentes al final.
