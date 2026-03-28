## .v2 Backend

> Este backend está basado en el código de LawinServerv2 y fue modificado por Crisutf.

# Cambios y mejoras incluidas

- Incluye todas las skins hasta el Capítulo 5 - Temporada 1.

- Puedes elegir cualquier skin sin problemas y se guardará automáticamente.

- Permite establecer un fondo personalizado.

- Se han ocultado las secciones de Tienda, Pase de Batalla, Carrera y Pavos.

- Se añadió la opción de marcar como "Listo" (aunque actualmente no inicia partida, ya que no se pudieron implementar los modos de juego).

- Panel de control donde el usuario controla de forma visual su cuenta, y si es admin incluido el control de banear y expulsar a otros usuarios.

- El bot te notificara cuando te banean y por que y encima se puede apelar.

# Cómo instalar
1. Clonar el repositorio
```bash
git clone https://github.com/LeilosFN/.v2.git
cd .v2-main
```
2. Instalar las dependencias
```bash
npm install
```
3. Configurar el bot de Discord y otras opciones

Abre el archivo:

`.env`

Y configura las variables necesarias como `DISCORD_BOT_TOKEN`, `MONGODB_URI`, etc.

4. Cambiar la IP

Modifica las variables `EU_IP` y `NAE_IP` en el archivo `.env` por tu propia IP o dominio.

5. Iniciar el backend

Ejecuta el archivo:

start.bat

Y listo.

## Nota

Si quieres ayudar en el proyecto, ¡muchas gracias!
Puedes contactarme en Discord:

Crisutf
