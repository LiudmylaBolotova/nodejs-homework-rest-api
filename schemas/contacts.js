const Joi = require("joi");

const addSchema = Joi.object({
  name: Joi.string().min(3).max(25).required(),
  email: Joi.string().min(5).max(255).required().email(),
  phone: Joi.string()
    .regex(/^[0-9]{12}$/)
    .required(),
});

module.exports = {
  addSchema,
};
