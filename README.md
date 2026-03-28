# .v2 - Project Leilos 🚀
> **Estado del Proyecto:** ⚠️ *En desarrollo (Beta) - No está terminado.*

Este backend es una versión personalizada y mejorada basada en el código original de **LawinServerv2**, modificada exhaustivamente por **Crisutf**.

---

## ✨ Características y Mejoras

### 🎮 Experiencia de Juego
- **Skins y Cosméticos:** Incluye soporte para todas las skins hasta el **Capítulo 5 - Temporada 1**.
- **Guardado Automático:** Los cambios en tu locker se guardan instantáneamente en la base de datos.
- **Personalización:** Soporte para fondos de lobby personalizados (Lobby Backgrounds).
- **Interfaz Limpia:** Se han ocultado secciones innecesarias como Tienda, Pase de Batalla, Carrera y Pavos para una experiencia más fluida.
- **Sistema de Ready:** Opción de marcar como "Listo" funcional (Matchmaking en desarrollo).

### 🤖 Integración con Discord
- **Bot de Notificaciones:** Notificaciones automáticas por MD al ser baneado o desbaneado.
- **Sistema de Apelaciones:** Los usuarios pueden apelar sus sanciones directamente desde Discord mediante botones y formularios.
- **Comunicados:** Herramienta integrada para enviar anuncios oficiales al servidor de Discord con soporte para pings y archivos adjuntos.
- **Gestión de Descargas:** Canal de descargas automatizado que se mantiene actualizado y ordenado.

### 🛠️ Administración y Seguridad
- **Panel de Control Web:** Dashboard visual para que los usuarios gestionen su cuenta y los administradores controlen el servidor.
- **Herramientas de Moderación:** Capacidad para banear, desbanear y expulsar usuarios en tiempo real.
- **Estabilidad:** Sistema de auto-reinicio cada 6 horas para garantizar un rendimiento óptimo.
- **Seguridad Avanzada:** Implementación de JWT para sesiones, validación estricta de tokens y limitación de peticiones (Rate Limiting).
- **Persistencia:** Base de datos robusta utilizando **MongoDB**.

---

## 🚀 Instalación

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/LeilosFN/.v2.git
   cd .v2-main
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Configuración inicial:**
   Edita el archivo `.env` con tus credenciales:
   - `DISCORD_BOT_TOKEN`: Token de tu bot de Discord.
   - `MONGODB_URI`: Tu cadena de conexión de MongoDB.
   - `EU_IP` / `NAE_IP`: Tu dirección IP o dominio.

4. **Iniciar el servidor:**
   Simplemente ejecuta el archivo:
   ```bash
   start.bat
   ```

---

## 📜 Licencia y Créditos

Este proyecto es una modificación del trabajo original de **LawinServerv2**. 

**IMPORTANTE:**
- Este backend ha sido modificado y es mantenido por **Crisutf**.
- Está **ESTRICTAMENTE PROHIBIDO** vender este código o cualquier parte de él.
- Su uso está permitido siempre y cuando se mantengan los **créditos correspondientes** a Crisutf y al equipo original.
- El uso comercial de este software sin autorización es ilegal y va en contra de los términos de la comunidad.

---

## 📞 Contacto

Si quieres colaborar, reportar errores o necesitas ayuda, puedes contactarme en Discord:
**Crisutf**

¡Gracias por apoyar el proyecto!

