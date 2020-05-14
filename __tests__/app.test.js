const connect = require('../lib/utils/connect');

const request = require('supertest');
const app = require('../lib/app');

beforeAll(() => {
  connect();
});


describe('meme routes', () => {
  it('creates a meme', async() => {
    return request(app)
      .post('/api/v1/memes')
      .send({
        top: 'top text',
        image: 'image.jpeg',
        bottom: 'bottom text'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          top: 'top text',
          image: 'image.jpeg',
          bottom: 'bottom text',
          __v: 0
        });
      });
  });



});
