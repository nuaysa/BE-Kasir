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
exports.komisiKategoriController = void 0;
const editKomisi_service_1 = require("../services/komisiKategori/editKomisi.service");
const createKomisi_service_1 = require("../services/komisiKategori/createKomisi.service");
const getKomisi_service_1 = require("../services/komisiKategori/getKomisi.service");
class komisiKategoriController {
    createKomisiKategoriController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { kategoriId, persen } = req.body;
                const komisi = yield (0, createKomisi_service_1.createKomisiKategoriService)({
                    kategoriId: kategoriId,
                    persen: persen,
                });
                res.status(200).send(komisi);
            }
            catch (err) {
                res.status(400).send({ message: err.message });
            }
        });
    }
    editKomisiKategoriController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { kategoriId, persen } = req.body;
                const komisi = yield (0, editKomisi_service_1.editKomisiKategoriService)({
                    kategoriId: kategoriId,
                    persen: persen,
                });
                res.status(200).send(komisi);
            }
            catch (err) {
                res.status(400).send({ message: err.message });
            }
        });
    }
    getKomisiKategoriController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Komisi = yield (0, getKomisi_service_1.getKomisiKategoriService)();
                res.status(200).send(Komisi);
            }
            catch (err) {
                res.status(400).send({ message: err.message });
            }
        });
    }
}
exports.komisiKategoriController = komisiKategoriController;
