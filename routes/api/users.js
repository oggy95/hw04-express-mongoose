import express from "express";

import * as ctrl from "../../controllers/users/index.js";

import {ctrlWrapper} from "../../helpers/index.js";

import {isValidId, checkRequiredFields} from "../../middlewares/index.js";

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:id", isValidId, ctrlWrapper(ctrl.getById));

router.post("/", checkRequiredFields, ctrlWrapper(ctrl.add));

router.put("/:id", isValidId, checkRequiredFields, ctrlWrapper(ctrl.updateById));

router.delete("/:id", isValidId, ctrlWrapper(ctrl.removeById));

export default router;