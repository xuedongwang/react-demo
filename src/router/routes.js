import Home from '@/pages/home/home';
import Search from '@/pages/search/search';
import Category from '@/pages/category/category';
import Article from '@/pages/article/article';
import Archives from '@/pages/archives/archives';
import NotFound from '@/404';
const routes = [
  {
    key: 'Home',
    path: '/',
    component: Home,
    exact: true
  },
  {
    key: 'Search',
    path: '/search',
    component: Search,
    exact: true
  },
  {
    key: 'Archives',
    path: '/archives',
    component: Archives,
    exact: true
  },
  {
    key: 'Category',
    path: '/tag/:id',
    component: Category,
    exact: true
  },
  {
    key: 'Article',
    path: '/a/:id',
    component: Article,
    exact: true
  },
  {
    key: 'About',
    path: '/about',
    component: Article,
    exact: true
  },
  {
    key: 'NotFound',
    path: '*',
    exact: false,
    component: NotFound
  }
];

export default routes;
