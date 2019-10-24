export const fetchArticles = () => $http.get('/article_list');
export const fetchHotTags = () => $http.get('/hot_tags');
export const fetchCategory = () => $http.get('/category_list');
export const fetchTags = () => $http.get('/tag_list');
export const fetchArchives = () => $http.get('/archive_list');
export const fetchArticle = () => $http.get('/article_info');
export const fetchComments = () => $http.get('/comment_list');
