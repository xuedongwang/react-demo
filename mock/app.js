const Router = require('koa-router');
const Koa = require('koa');
const cors = require('@koa/cors');

const app = new Koa();
const router = new Router();

const homeArticleList = require('./home/article-list');
const homeHotTags = require('./home/hot-tags');
const searchTags = require('./search/tag-list');
const archiveList = require('./archives/archive-list');
const categoryList = require('./category/category-list');
const articleInfo = require('./article/article-info');
const articleComment = require('./article/comment-list');


const PORT = 9999;

router.get('/article_list', ctx => {
  ctx.body = homeArticleList();
});

router.get('/hot_tags', ctx => {
  ctx.body = homeHotTags();
})

router.get('/tag_list', ctx => {
  ctx.body = searchTags();
})

router.get('/archive_list', ctx => {
  ctx.body = archiveList();
})

router.get('/category_list', ctx => {
  ctx.body = categoryList();
})

router.get('/article_info', ctx => {
  ctx.body = articleInfo();
})

router.get('/comment_list', ctx => {
  ctx.body = articleComment();
})

app
  .use(cors())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(PORT, () => {
  console.log(`Mock server running at http://localhost:${ PORT }.`)
});