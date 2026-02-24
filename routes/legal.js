const express = require("express")
const app = express.Router();
const fs = require("fs")
const path = require("path");

// Use path.join for better cross-platform compatibility, though relative path works if CWD is correct
const eulaPath = path.join(__dirname, '..', 'responses', 'eula', 'SharedAgreements.json');
let eulaJson = {};

try {
    if (fs.existsSync(eulaPath)) {
        eulaJson = JSON.parse(fs.readFileSync(eulaPath, 'utf8'));
    } else {
        console.error("EULA file not found at: " + eulaPath);
    }
} catch (err) {
    console.error("Error reading EULA file:", err);
}

app.get("/eulatracking/api/shared/agreements/fn", async (req, res) => {
    res.json(eulaJson);
});

app.get("/eulatracking/api/public/agreements/fn/account/:accountId", async (req, res) => {
    res.status(204).send();
}); 

module.exports = app;
