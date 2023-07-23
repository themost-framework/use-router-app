import { IndexController } from './controllers/IndexController';

/**
 * @type {import('@themost/router').HttpRouteConfig[]}
 */
const routes = [
    {
        path: '',
        controller: IndexController,
        action: 'index'
    }
];

export {
    routes
}