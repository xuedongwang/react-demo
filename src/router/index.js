import Home from '@/pages/home';
import Search from '@/pages/search';
import Category from '@/pages/category';
import Article from '@/pages/article';
import Archives from '@/pages/archives';
import NotFound from '@/404';
const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
    exact: true
  },
  {
    name: 'Search',
    path: '/search',
    component: Search,
    exact: true
  },
  {
    name: 'Archives',
    path: '/archives',
    component: Archives,
    exact: true
  },
  {
    name: 'Category',
    path: '/tag/:id',
    component: Category,
    exact: true
  },
  {
    name: 'Article',
    path: '/a/:id',
    component: Article,
    exact: true
  },
  {
    name: 'About',
    path: '/about',
    component: Article,
    exact: true
  },
  {
    name: 'NotFound',
    component: NotFound
  }
];

export default routes;
