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
exports.StokController = void 0;
const createStock_service_1 = require("../services/stock/createStock.service");
const editStock_service_1 = require("../services/stock/editStock.service");
const getAllStocks_service_1 = require("../services/stock/getAllStocks.service");
class StokController {
    createStokController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { produkId, serialNumber, expiredDate, status, qty } = req.body;
                const Stocks = yield (0, createStock_service_1.createStockService)({
                    produkId: produkId,
                    serialNumber: serialNumber,
                    expiredDate: expiredDate,
                    qty: qty,
                });
                res.status(200).send(Stocks);
            }
            catch (err) {
                res.status(400).send({ message: err.message });
            }
        });
    }
    editStockController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
                const { quantity, status, serialNumber } = req.body;
                const Product = yield (0, editStock_service_1.editStockService)({
                    userId: userId,
                    serialNumber: serialNumber,
                    status: status,
                });
                res.status(200).send(Product);
            }
            catch (err) {
                res.status(400).send({ message: err.message });
            }
        });
    }
    getAllStockController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
                const { status, sortBy, order } = req.query;
                const stock = yield (0, getAllStocks_service_1.getAllstockService)({
                    userId,
                    status: status,
                    sortBy: sortBy,
                    order: order,
                });
                res.status(200).send(stock);
            }
            catch (err) {
                res.status(400).send({ message: err.message });
            }
        });
    }
}
exports.StokController = StokController;
