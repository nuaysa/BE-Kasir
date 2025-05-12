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
exports.LaporanController = void 0;
const getStats_service_1 = require("../services/laporanHarian/getStats.service");
const getLaporanHarian_service_1 = require("../services/laporanHarian/getLaporanHarian.service");
const getChart_service_1 = require("../services/laporanHarian/getChart.service");
const getAdminStat_service_1 = require("../services/laporanHarian/getAdminStat.service");
class LaporanController {
    getAlllaporanController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { sortBy, order, page, filterDate, pageSize } = req.query;
                const laporan = yield (0, getLaporanHarian_service_1.getLaporanHarianService)({
                    page: page ? parseInt(page) : undefined,
                    pageSize: pageSize ? parseInt(pageSize) : undefined,
                    filterDate: filterDate,
                    sortBy: sortBy,
                    order: order,
                });
                res.status(200).send(laporan);
            }
            catch (err) {
                res.status(400).send({ message: err.message });
            }
        });
    }
    getStatController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
                const stat = yield (0, getStats_service_1.getDashboardStats)(userId);
                res.status(200).send(stat);
            }
            catch (err) {
                res.status(400).send({ message: err.message });
            }
        });
    }
    getAdminStatController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const stat = yield (0, getAdminStat_service_1.getAdminDashboardStats)();
                res.status(200).send(stat);
            }
            catch (err) {
                res.status(400).send({ message: err.message });
            }
        });
    }
    getChartController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { startDate, endDate } = req.query;
                const chart = yield (0, getChart_service_1.getChartStats)({ startDate, endDate });
                res.status(200).send(chart);
            }
            catch (err) {
                res.status(400).send({ message: err.message });
            }
        });
    }
}
exports.LaporanController = LaporanController;
