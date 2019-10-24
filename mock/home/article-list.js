const Mock = require('mockjs');
const Random = Mock.Random;
const data = () => Mock.mock({
  code: 0,
  data: {
    'list|10': [{
      id: () => Random.id(),
      title: () => Random.ctitle(1, 30),
      createDate: () => Random.date('T'),
      commentCount: () => Random.natural(),
      articleShortDesc: () => Random.cparagraph()
    }]
  }
});

module.exports = data;
