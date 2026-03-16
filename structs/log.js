let recentLogs = [];
const MAX_LOGS = 100;

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

module.exports = {
    backend,
    bot,
    xmpp,
    error,
    getRecentLogs: () => recentLogs
}