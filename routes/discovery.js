const express = require("express");
const app = express.Router();
const fs = require("fs");
const path = require("path");

const discoveryMenu = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "responses", "discovery", "menu.json")).toString());
const latestMenu = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "responses", "discovery", "latest", "menu.json")).toString());

app.post("/fortnite/api/game/v2/creative/discovery/surface/*", (req, res) => {
    res.json(discoveryMenu);
});

app.post("/api/v1/discovery/surface/*", (req, res) => {
    res.json(discoveryMenu);
});

app.post("/api/v2/discovery/surface/*", (req, res) => {
    res.json(discoveryMenu);
});

app.get("/fortnite/api/discovery/accessToken/*", (req, res) => {
    res.json({
        "branchName": req.params[0] || "unknown",
        "appId": "Fortnite",
        "token": "leilos-discovery-token"
    });
});

app.post("/links/api/fn/mnemonic", (req, res) => {
    res.json(latestMenu);
});

app.get("/links/api/fn/mnemonic/:playlist/related", (req, res) => {
    const playlist = req.params.playlist;
    const linkData = latestMenu.find(i => i.mnemonic === playlist);
    
    res.json({
        "parentLinks": [],
        "links": linkData ? { [playlist]: linkData } : {}
    });
});

app.get("/links/api/fn/mnemonic/:playlist", (req, res) => {
    const playlist = req.params.playlist;
    const linkData = latestMenu.find(i => i.mnemonic === playlist);
    
    if (linkData) {
        res.json(linkData);
    } else {
        res.status(404).end();
    }
});

app.post("/api/v1/fortnite-br/surfaces/*/target", (req, res) => {
    res.json({});
});

app.get("/fortnite/api/discovery/v1/surface/*", (req, res) => {
    res.json({
        "surfaces": []
    });
});

module.exports = app;
