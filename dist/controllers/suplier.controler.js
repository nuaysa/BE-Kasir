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
exports.SuplierController = void 0;
const getAllSuplier_service_1 = require("../services/suplier/getAllSuplier.service");
const createSuplier_service_1 = require("../services/suplier/createSuplier.service");
const editSuplier_service_1 = require("../services/suplier/editSuplier.service");
class SuplierController {
    getSuplierController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { page, pageSize, sortBy, order, filterBy, filterValue } = req.query;
                const Suplier = yield (0, getAllSuplier_service_1.getAllSuplierService)({
                    page: page,
                    pageSize: pageSize,
                    sortBy: sortBy,
                    order: order,
                    filterBy: filterBy,
                    filterValue: filterValue,
                });
                res.status(200).send(Suplier);
            }
            catch (err) {
                res.status(400).send({ message: err.message });
            }
        });
    }
    createSuplierController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { nama, kontak } = req.body;
                const Suplier = yield (0, createSuplier_service_1.createSuplierService)({
                    namaSuplier: nama,
                    kontak: kontak,
                });
                res.status(200).send(Suplier);
            }
            catch (err) {
                res.status(400).send({ message: err.message });
            }
        });
    }
    editSuplierController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const suplierId = req.params.id;
                const { nama, kontak } = req.body;
                const Suplier = yield (0, editSuplier_service_1.editSuplierService)({
                    suplierId: Number(suplierId),
                    namaSuplier: nama,
                    kontak: kontak,
                });
                res.status(200).send(Suplier);
            }
            catch (err) {
                res.status(400).send({ message: err.message });
            }
        });
    }
}
exports.SuplierController = SuplierController;
