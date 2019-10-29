const Mock = require('mockjs');
const Random = Mock.Random;
const data = () => Mock.mock({
  code: 0,
  data: {
    count: () => Random.natural(),
    keywords: () => Random.cword(),
    'list|1-30': [{
      id: () => Random.id(),
      title: () => Random.title(),
      meta: {
        createDate: () => Random.date()
      }
    }]
  }
});

export default {
  '/api/category_list': data()
};