Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});

Router.route('posts', {
  name: 'posts',
  controller: 'PostsController',
  where: 'client'
});

Router.route('/posts/create', {
  name: 'createPost',
  controller: 'PostsController',
  action: 'create',
  where: 'client'
});

Router.route('/posts/:slug/edit', {
  name: 'editPost',
  controller: 'PostsController',
  action: 'edit',
  where: 'client'
});

Router.route('/posts/:slug', {
  name: 'showPost',
  controller: 'PostsController',
  action: 'show',
  where: 'client'
});