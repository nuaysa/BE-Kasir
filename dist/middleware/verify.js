"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyAdmin = exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const token = (_a = req.header("Authorization")) === null || _a === void 0 ? void 0 : _a.replace("Bearer ", "");
        console.log("Received Token:", token); // Debug: Menampilkan token yang diterima
        if (!token) {
            res.status(401).send({ message: "Unauthorized! Token not found." });
            return;
        }
        const verifiedUser = jsonwebtoken_1.default.verify(token, process.env.JWT_KEY);
        console.log("Decoded Token:", verifiedUser);
        req.user = { id: verifiedUser.id, role: verifiedUser.role };
        console.log(req.user, "User in Request");
        next();
    }
    catch (err) {
        console.log(err);
        if (err instanceof jsonwebtoken_1.default.JsonWebTokenError) {
            res.status(401).send({ message: "Invalid or malformed token." });
            return;
        }
        res.status(500).send({
            message: "Oops! There was an error verifying your token. Please check and try again.",
        });
    }
});
exports.verifyToken = verifyToken;
const verifyAdmin = (allowedRoles) => {
    return (req, res, next) => {
        var _a;
        const userRole = (_a = req.user) === null || _a === void 0 ? void 0 : _a.role;
        if (!allowedRoles.includes(userRole !== null && userRole !== void 0 ? userRole : "")) {
            res
                .status(403)
                .json({
                message: `only ${allowedRoles} allowed to access this data`,
            });
        }
        next();
    };
};
exports.verifyAdmin = verifyAdmin;
