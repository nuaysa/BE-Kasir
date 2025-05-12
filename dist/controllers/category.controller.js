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
exports.CategoryController = void 0;
const deleteCategory_service_1 = require("../services/category/deleteCategory.service");
const createCategory_service_1 = require("../services/category/createCategory.service");
const getAllCategory_service_1 = require("../services/category/getAllCategory.service");
const editCategory_service_1 = require("../services/category/editCategory.service");
class CategoryController {
    getCategoryController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const CategoryData = yield (0, getAllCategory_service_1.getAllCategoryService)();
                res.status(200).send(CategoryData);
            }
            catch (err) {
                res.status(400).send({ message: err.message });
            }
        });
    }
    deleteCategoryController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categoryId = req.params.id;
                const CategoryData = yield (0, deleteCategory_service_1.deleteCategoryService)({
                    categoryId: Number(categoryId),
                });
                res.status(200).send(CategoryData);
            }
            catch (err) {
                res.status(400).send({ message: err.message });
            }
        });
    }
    createCategoryController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { nama, komisi } = req.body;
                const CategoryData = yield (0, createCategory_service_1.createCategoryService)({
                    name: nama,
                    komisi: komisi,
                });
                res.status(200).send(CategoryData);
            }
            catch (err) {
                res.status(400).send({ message: err.message });
            }
        });
    }
    editCategoryController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categoryId = req.params.id;
                const { nama, komisi } = req.body;
                const CategoryData = yield (0, editCategory_service_1.editCategoryService)({
                    categoryId: Number(categoryId),
                    name: nama,
                    komisi: komisi,
                });
                res.status(200).send(CategoryData);
            }
            catch (err) {
                res.status(400).send({ message: err.message });
            }
        });
    }
}
exports.CategoryController = CategoryController;
