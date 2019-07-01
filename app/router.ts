import { Application } from 'egg';

export default (app: Application) => {
  const { controller, } = app;

  const router = app.router.namespace('/');

  router.get('/', controller.home.index);
  router.get('/redirect', controller.home.redirect);

};
