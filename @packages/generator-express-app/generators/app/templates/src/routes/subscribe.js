const express = require('express');
const router = express.Router();
const yup = require('yup');
const debug = require('debug')('sca-dev-test-api:route');
const axios = require('axios');

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup
    .string()
    .email()
    .required(),
  mobilePhone: yup.string(),
});

const controller = async (req, res) => {
  const http = axios.create({
    headers: {
      'x-auth': 'react-test',
    },
  });
  const {
    app: {
      locals: { container },
    },
    body,
  } = req;
  debug(body);

  try {
    const value = await schema.validate(body);
    const api = container.get('api');
    const { data } = await http.post(api, { data: value });
    debug('response from downstream', api, data);
    res.status(204).send();
  } catch (error) {
    debug(error);
    res.status(400).json({ error });
    return;
  }
};

router.post('/subscribe', controller);

module.exports = {
  router,
  controller,
};
