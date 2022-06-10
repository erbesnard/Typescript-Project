"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send("not permitted");
}
var router = (0, express_1.Router)();
exports.router = router;
router.post("/login", function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (!email) {
        throw new Error("you must provide an email");
    }
    if (!password) {
        throw new Error("you must provide an password");
    }
    req.session = { loggedIn: true };
    res.redirect("/");
});
router.get("/", function (req, res) {
    if (req.session && req.session.loggedIn) {
        res.send("\n      <div>\n        <div>You are logged In</div>\n        <a href=\"/logout\">Logout</a>\n       </div>");
    }
    else {
        res.send("\n      <div>\n        <div>You are not logged In</div>\n        <a href=\"/login\">Login</a>\n       </div>");
    }
});
router.get("/logout", function (req, res) {
    req.session = undefined;
    res.redirect("/");
});
router.get("/protected", requireAuth, function (req, res) {
    res.send("Welcome to the protected router, logged in user");
});
