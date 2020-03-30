const { celebrate, Segments, Joi } = require('celebrate');

const Ong = {
  create: () =>
    celebrate({
      [Segments.BODY]: Joi.object().keys({
        name: Joi.string()
          .required()
          .min(3)
          .max(100),
        email: Joi.string()
          .required()
          .email(),
        whatsapp: Joi.string()
          .required()
          .min(10)
          .max(11),
        city: Joi.string().required(),
        uf: Joi.string()
          .required()
          .length(2)
      })
    })
};

const Incident = {
  index: () =>
    celebrate({
      [Segments.QUERY]: Joi.object().keys({
        page: Joi.number().min(1)
      })
    }),
  create: () =>
    celebrate({
      [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        value: Joi.number().required()
      }),
      [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
      }).unknown()
    }),
  delete: () =>
    celebrate({
      [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
      })
    })
};

const Profile = {
  index: () =>
    celebrate({
      [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
      }).unknown()
    })
};

module.exports = function routeValidators() {
  return {
    Ong,
    Incident,
    Profile
  };
};
