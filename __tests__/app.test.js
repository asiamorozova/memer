const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../lib/app');

describe('memer routes', () => {
  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });
});
