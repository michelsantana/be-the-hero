const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');
const routeValidators = require('./validators/routeValidators');

const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentsController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();
const validators = routeValidators();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);

routes.post('/ongs', validators.Ong.create(), OngController.create);

routes.get(
  '/incidents',
  validators.Incident.index(),
  IncidentsController.index
);

routes.post(
  '/incidents',
  validators.Incident.create(),
  IncidentsController.create
);

routes.delete(
  '/incidents/:id',
  validators.Incident.delete(),
  IncidentsController.delete
);

routes.get('/profile', validators.Profile.index(), ProfileController.index);

module.exports = routes;
