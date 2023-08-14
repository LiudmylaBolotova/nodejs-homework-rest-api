const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/contacts");
const { validateBody, isValid, authenticate } = require("../../middlewares");
const { schemas } = require("../../models/contact");

router.get("/", authenticate, ctrl.getAll);

router.get("/:id", authenticate, isValid, ctrl.getById);

router.post("/", authenticate, validateBody(schemas.addSchema), ctrl.add);

router.delete("/:id", authenticate, isValid, ctrl.deleteById);

router.put(
  "/:id",
  authenticate,
  isValid,
  validateBody(schemas.addSchema),
  ctrl.updateById
);

router.patch(
  "/:id/favorite",
  authenticate,
  isValid,
  validateBody(schemas.updateFavoriteSchema),
  ctrl.updateStatusContact
);

module.exports = router;
