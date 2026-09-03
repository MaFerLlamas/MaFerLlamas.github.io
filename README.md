# 🎃 Birthday Party — GitHub Pages

Página de invitación de cumpleaños con estética Halloween / collage caótico.

## Archivos

- `index.html` — estructura de la página.
- `styles.css` — diseño, colores, responsive y animaciones.
- `script.js` — contador y formulario RSVP.

## Publicarla en GitHub Pages

1. Crea un repositorio en GitHub.
2. Sube estos tres archivos.
3. Ve a **Settings → Pages**.
4. En **Build and deployment**, selecciona:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
5. Guarda.
6. GitHub generará una URL parecida a:
   `https://TU-USUARIO.github.io/NOMBRE-DEL-REPOSITORIO/`

## Personalizar

En `script.js` cambia:

```js
const birthdayDate = new Date("2026-10-16T20:00:00-06:00");
```

En `index.html` puedes cambiar lugar, hora, textos, etc.

### RSVP real

El formulario actualmente es una demostración: muestra el mensaje en pantalla pero no guarda las respuestas.

Para guardar confirmaciones se puede conectar posteriormente a Google Forms, Formspree, Netlify Forms, una Google Sheet mediante Apps Script o un pequeño backend.
