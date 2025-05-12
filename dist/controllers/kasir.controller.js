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
Object.defineProperty(exports, "__esModule", { value: true });
exports.KasirController = void 0;
const getKasir_service_1 = require("../services/kasir/getKasir.service");
const editKasir_service_1 = require("../services/kasir/editKasir.service");
const getAllKasir_service_1 = require("../services/kasir/getAllKasir.service");
const deleteKasir_service_1 = require("../services/kasir/deleteKasir.service");
class KasirController {
    getPenggunaByIdController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
                const pengguna = yield (0, getKasir_service_1.getpenggunaByIdService)({
                    penggunaId: +userId,
                });
                res.status(200).send(pengguna);
            }
            catch (err) {
                res.status(400).send({ message: err.message });
            }
        });
    }
    getAllKasirController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const kasir = yield (0, getAllKasir_service_1.getAllKasirService)();
                res.status(200).send(kasir);
            }
            catch (err) {
                res.status(400).send({ message: err.message });
            }
        });
    }
    editKasirController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const kasirId = req.params.id;
                const { nama, kasirname, password } = req.body;
                const kasir = yield (0, editKasir_service_1.editKasirService)({
                    id: +kasirId,
                    nama: nama,
                    username: kasirname,
                });
                res.status(200).send(kasir);
            }
            catch (err) {
                res.status(400).send({ message: err.message });
            }
        });
    }
    deleteKasirController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const kasirId = req.params.kasirId;
                const kasir = yield (0, deleteKasir_service_1.deleteKasirService)({
                    id: +kasirId,
                });
                res.status(200).send(kasir);
            }
            catch (err) {
                res.status(400).send({ message: err.message });
            }
        });
    }
}
exports.KasirController = KasirController;
