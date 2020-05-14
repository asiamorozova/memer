  
const Meme = require('../lib/models/Meme');
const chance = require('chance').Chance();


module.exports = async({ memesToCreate = 9 } = {}) => {
  
  const image = ['https://www.placecage.com/g/250/999', 'https://www.placecage.com/g/200/300'];

  await Meme.create([...Array(memesToCreate)].map(() => ({
    top: chance.name(),
    image: chance.pickone(image),
    bottom: chance.sentence({ words : 5 })
  })));
