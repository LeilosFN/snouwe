const express = require("express");
const app = express.Router();
const fs = require("fs");
const functions = require("../structs/functions.js");

const { verifyToken, verifyClient } = require("../tokenManager/tokenVerify.js");

let buildUniqueId = {};

app.get("/fortnite/api/matchmaking/session/findPlayer/*", (req, res) => {
    res.status(200).end();
});

app.get("/fortnite/api/game/v2/matchmakingservice/ticket/player/*", verifyToken, (req, res) => {
    if (typeof req.query.bucketId != "string") return res.status(400).end();
    if (req.query.bucketId.split(":").length != 4) return res.status(400).end();

    buildUniqueId[req.user.accountId] = req.query.bucketId.split(":")[0];

    res.json({
        "serviceUrl": process.env.MATCHMAKER_IP || "ws://api.leilos.qzz.io:8080",
        "ticketType": "mms-player",
        "payload": req.user.matchmakingId || "69=",
        "signature": "account"
    });
    res.end();
});

app.get("/fortnite/api/game/v2/matchmaking/account/:accountId/session/:sessionId", (req, res) => {
    res.json({
        "accountId": req.params.accountId,
        "sessionId": req.params.sessionId,
        "key": "none"
    });
});

app.get("/fortnite/api/matchmaking/session/:sessionId", verifyToken, (req, res) => {
    const bucketId = req.query.bucketId || "";
    const rawPlaylist = bucketId.split(":")[3] || "Playlist_DefaultSolo";
    const playlist = functions.PlaylistNames(rawPlaylist);
    const region = bucketId.split(":")[2] || "EU";

    let gameServerInfo = {
        serverAddress: "127.0.0.1",
        serverPort: 7777,
        playlist: playlist
    }

    const EU_IP = process.env.EU_IP || "mad-eu.leilos.qzz.io:7777";
    const NAE_IP = process.env.NAE_IP || "nae-.leilos.qzz.io:7777";

    if (region.toUpperCase() === "NAE" || region.toUpperCase() === "NA") {
        const parts = NAE_IP.split(":");
        gameServerInfo.serverAddress = parts[0];
        gameServerInfo.serverPort = Number(parts[1]) || 7777;
    } else {
        const parts = EU_IP.split(":");
        gameServerInfo.serverAddress = parts[0];
        gameServerInfo.serverPort = Number(parts[1]) || 7777;
    }

    res.json({
        "id": req.params.sessionId,
        "ownerId": functions.MakeID().replace(/-/ig, "").toUpperCase(),
        "ownerName": "[DS]fortnite-liveeugcec1c2e30ubrcore0a-z8hj-1968",
        "serverName": "[DS]fortnite-liveeugcec1c2e30ubrcore0a-z8hj-1968",
        "serverAddress": gameServerInfo.serverAddress,
        "serverPort": gameServerInfo.serverPort,
        "maxPublicPlayers": 220,
        "openPublicPlayers": 175,
        "maxPrivatePlayers": 0,
        "openPrivatePlayers": 0,
        "attributes": {
          "REGION_s": region.toUpperCase(),
          "ALLOWBROADCASTING_b": true,
          "SUBREGION_s": "GB",
          "DCID_s": "FORTNITE-LIVEEUGCEC1C2E30UBRCORE0A-14840880",
          "tenant_s": "Fortnite",
          "MATCHMAKINGPOOL_s": "Any",
          "STORMSHIELDDEFENSETYPE_i": 0,
          "HOTFIXVERSION_i": 0,
          "PLAYLISTNAME_s": gameServerInfo.playlist,
          "SESSIONKEY_s": functions.MakeID().replace(/-/ig, "").toUpperCase(),
          "SESSION_ID_s": functions.MakeID().replace(/-/ig, "").toUpperCase(),
          "TENANT_s": "Fortnite",
          "BEACONPORT_i": 15009,
          "MATCHMAKING_VERSION_i": 1,
          "REGION_CUSTOM_s": region.toUpperCase(),
          "NEEDS_GS_JOIN_b": true,
          "IS_DEDICATED_b": true,
          "ALLOW_JOIN_IN_PROGRESS_b": false,
        },
        "publicPlayers": [],
        "privatePlayers": [],
        "totalPlayers": 45,
        "allowJoinInProgress": false,
        "shouldAdvertise": false,
        "isDedicated": false,
        "usesStats": false,
        "allowInvites": false,
        "usesPresence": false,
        "allowJoinViaPresence": true,
        "allowJoinViaPresenceFriendsOnly": false,
        "buildUniqueId": buildUniqueId[req.user.accountId] || "0",
        "lastUpdated": new Date().toISOString(),
        "started": true
      });
});

app.post("/fortnite/api/matchmaking/session/*/join", (req, res) => {
    res.status(204).end();
});

app.post("/fortnite/api/matchmaking/session/matchMakingRequest", (req, res) => {
    res.json([]);
});


module.exports = app;

