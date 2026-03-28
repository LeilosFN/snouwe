const fs = require('fs');
const path = require('path');

let recentLogs = [];
const MAX_LOGS = 100;
const LOG_FILE_PATH = path.join(__dirname, '..', 'public', 'logs', 'server.log');

// Asegurar que el directorio existe
if (!fs.existsSync(path.dirname(LOG_FILE_PATH))) {
    fs.mkdirSync(path.dirname(LOG_FILE_PATH), { recursive: true });
}

function addLog(type, message) {
    const logEntry = {
        timestamp: new Date().toISOString(),
        type: type,
        message: message
    };
    recentLogs.push(logEntry);
    if (recentLogs.length > MAX_LOGS) {
        recentLogs.shift();
    }
    
    // Escribir al archivo
    const logLine = `[${logEntry.timestamp}] [${logEntry.type}] ${logEntry.message}\n`;
    fs.appendFile(LOG_FILE_PATH, logLine, (err) => {
        if (err) console.error("Error al escribir en el archivo de logs:", err);
    });
    
    // Mantener la salida por consola para ver en terminal
    if (type === "ERROR") {
        console.error(logLine.trim());
    } else {
        console.log(logLine.trim());
    }
}

function backend() {
    let msg = "";
    for (let i in arguments) {
        msg += `${i == "0" ? "" : " "}${arguments[i]}`;
    }
    addLog("BACKEND", msg);
}

function bot() {
    let msg = "";
    for (let i in arguments) {
        msg += `${i == "0" ? "" : " "}${arguments[i]}`;
    }
    addLog("BOT", msg);
}

function xmpp() {
    let msg = "";
    for (let i in arguments) {
        msg += `${i == "0" ? "" : " "}${arguments[i]}`;
    }
    addLog("XMPP", msg);
}

function error() {
    let msg = "";
    for (let i in arguments) {
        msg += `${i == "0" ? "" : " "}${arguments[i]}`;
    }
    addLog("ERROR", msg);
}

function debug() {
    let msg = "";
    for (let i in arguments) {
        msg += `${i == "0" ? "" : " "}${arguments[i]}`;
    }
    addLog("DEBUG", msg);
}

module.exports = {
    backend,
    bot,
    xmpp,
    error,
    debug,
    getRecentLogs: () => recentLogs
}