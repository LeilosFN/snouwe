const { spawn } = require("child_process");
const log = require("../structs/log.js");
const path = require("path");

function scheduleRestart(restartTime) {
    // 6h = 6 horas
    const value = 6;
    const milliseconds = value * 60 * 60 * 1000;

    log.backend(`El backend se reiniciará automáticamente en 6 horas para evitar bloqueos.`);

    setTimeout(() => {
        log.backend("Reiniciando backend automáticamente...");
        
        // Obtenemos la ruta principal del proyecto
        const rootPath = path.join(__dirname, "..");
        
        // Creamos un nuevo proceso hijo independiente que ejecuta start.bat o bun run
        const child = spawn(process.platform === 'win32' ? 'cmd.exe' : 'bash', 
            [process.platform === 'win32' ? '/c' : '-c', 'bun run index.js || node index.js'], 
            {
                cwd: rootPath,
                detached: true,
                stdio: 'ignore'
            }
        );
        
        // Desenlazamos el proceso hijo para que pueda seguir vivo cuando este proceso se cierre
        child.unref();

        // Salimos del proceso actual, permitiendo que el nuevo servidor tome el control
        process.exit(0);
    }, milliseconds);
}

module.exports = { scheduleRestart };
