/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Yourmodel, conn } = require('../../src/db.js');

const agent = session(app);
const yourmodel = {
  name: 'Pepe',
};

describe('Project routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Yourmodel.sync({ force: true })
    .then(() => Yourmodel.create(yourmodel)));
  describe('GET /anyRoute', () => {
    it('should get 200', () =>
      agent.get('/anyRoute').expect(200)
    );
  });
});
