const Joi = require("joi");

class Validator {
  transformResult(result) {
    return result.reduce(
      (acc, cur) => ({ ...acc, [cur.path[0]]: cur.message }),
      {}
    );
  }

  validateRegister(input) {
    const schema = Joi.object({
      nickname: Joi.string().min(3).max(50).required().messages({
        "string.base": "nickname must be a string",
        "string.min": "nickname must be at least 3 characters long",
        "string.max": "nickname must not contain more than 50 characters",
        "any.required": "nickname is required",
      }),
      email: Joi.string().min(5).max(255).required().email().messages({
        "string.base": "email must be a string",
        "string.email": "email is invalid",
        "string.min": "email must be at least 5 characters long",
        "string.max": "email must not contain more than 250 characters",
        "any.required": "email is required",
      }),
      password: Joi.string()
        .required()
        .min(8)
        .max(26)
        .regex(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$.!%*#?&])[A-Za-z\d@$.!%*#?&]{8,}$/
        )
        .messages({
          "string.base": "Password must be a string",
          "string.min":
            "Password must be 8-26 characters, contain 1 uppercase, 1 lowercase, 1 digit, 1 symbol",
          "string.max":
            "Password must be 8-26 characters, contain 1 uppercase, 1 lowercase, 1 digit, 1 symbol",
          "string.pattern.base":
            "Password must be 8-26 characters, contain 1 uppercase, 1 lowercase, 1 digit, 1 symbol",
          "any.required": "Password is required",
        }),
      confirmPassword: Joi.valid(Joi.ref("password"))
        .required()
        .messages({ "any.only": "Passwords do not match" }),
      remember: Joi.boolean(),
    });
    return new Promise((resolve) => {
      const result = schema.validate(input, { abortEarly: false });
      if (result.error) {
        result.errors = this.transformResult(result.error.details);
      }
      resolve(result);
    });
  }
  validateLogin(input) {
    const schema = Joi.object({
      email: Joi.string().required().email().messages({
        "string.base": "email must be a string",
        "string.email": "email is invalid",
        "any.required": "email is required",
      }),
      password: Joi.string().required().messages({
        "any.required": "Password is required",
      }),
      remember: Joi.boolean(),
    });
    return new Promise((resolve) => {
      const result = schema.validate(input, { abortEarly: false });
      if (result.error) {
        result.errors = this.transformResult(result.error.details);
      }
      resolve(result);
    });
  }
  validateId(id) {
    const schema = Joi.objectId();
    return new Promise((resolve) => {
      const result = schema.validate(id, { abortEarly: false });
      resolve(result);
    });
  }
  validatePost(input) {
    const schema = Joi.object({
      _id: Joi.objectId(),
      title: Joi.string().min(5).required().messages({
        "string.base": "title must be a string",
        "string.min": "title must be at least 5 characters long",
        "any.required": "title is required",
      }),
      body: Joi.string().min(5).required().messages({
        "string.base": "body must be a string",
        "string.min": "body must be at least 5 characters long",
        "any.required": "body is required",
      }),
      tags: Joi.array()
        .items(Joi.string())
        .required()
        .messages({ "any.required": "Tags array not provided" }),
      likes: Joi.array()
        .items(Joi.string())
        .required()
        .messages({ "any.required": "Likes array not provided" }),
      image: Joi.string()
        .required()
        .messages({ "any.required": "Image is required" }),
      author: Joi.objectId().messages({
        "string.pattern.name": "Invalid author",
      }),
    });
    return new Promise((resolve) => {
      const result = schema.validate(input, { abortEarly: false });
      if (result.error) {
        result.errors = this.transformResult(result.error.details);
      }
      resolve(result);
    });
  }
}

module.exports = new Validator();
