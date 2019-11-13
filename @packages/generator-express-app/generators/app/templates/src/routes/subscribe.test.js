const { controller } = require('./subscribe');
const axios = require('axios');
jest.mock('axios');

test('response 400 for bad request', async () => {
  const jsonFn = jest.fn((f) => f);
  const sendFn = jest.fn((f) => f);

  let status = null;
  const statusFn = jest.fn((s) => {
    status = s;
    return {
      json: jsonFn,
      send: sendFn,
    };
  });

  const req = {
    app: { locals: { container: { get: () => 1 } } },
    body: null,
  };
  const res = { status: statusFn };
  await controller(req, res);
  expect(status).toBe(400);
  expect(statusFn.mock.calls.length).toBe(1);
});

test('response with 204', async () => {
  const postFn = jest.fn(() =>
    Promise.resolve({
      data: 'kkk',
      status: 200,
    }),
  );

  axios.create.mockImplementation(() => ({
    post: postFn,
  }));
  const jsonFn = jest.fn((f) => f);
  const sendFn = jest.fn((f) => f);

  let status = null;
  const statusFn = jest.fn((s) => {
    status = s;
    return {
      json: jsonFn,
      send: sendFn,
    };
  });

  axios.create.mockImplementation(() => ({
    post: postFn,
  }));
  const url = 'http://xx.xxxx';

  const res = { status: statusFn };
  const payload = {
    firstName: 'String',
    lastName: ' String ',
    email: 'x@d.i',
    mobilePhone: ' String ',
  };
  const req = {
    app: { locals: { container: { get: () => url } } },
    body: payload,
  };
  await controller(req, res);
  expect(status).toBe(204);

  expect(postFn.mock.calls.length).toBe(1);
  expect(postFn.mock.calls[0][0]).toBe(url);
  expect(postFn.mock.calls[0][1].data).toBe(payload);
});
