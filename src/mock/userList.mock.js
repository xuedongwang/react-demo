const Mock = require('mockjs');

const Random = Mock.Random;

const template = {
  'list|100': [{
    'name': () => Random.cname()
  }]
};
module.exports = Mock.mock(template);
