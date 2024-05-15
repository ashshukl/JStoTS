"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppMiddleware = void 0;
const AppMiddleware = (req, res, next) => {
    console.log("Request intercepted by AppMiddleware");
    const accessToken = req.headers["access-token"];
    if (!accessToken || accessToken[0].trim() === "") {
        return res.status(400).json({ error: "AccessToken missing or empty" });
    }
    // If AccessToken is present, continue to the next middleware or route handler
    next();
};
exports.AppMiddleware = AppMiddleware;
