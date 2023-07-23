import express from 'express';
import cors from 'cors';
import path from 'path';
import {ViewEngine} from '@themost/ejs';
import { HttpApplication, RouterService, controllerRouter } from '@themost/router';
import {routes} from './routes';

function getApplication() {
    // init app
    const app = express();
    // https://github.com/expressjs/cors#usage
    app.use(cors());

    // https://expressjs.com/en/guide/using-template-engines.html
    app.engine('ejs', ViewEngine.express());
    app.set('view engine', 'ejs');
    app.set('views', path.resolve(__dirname, 'views'));
    // create http application
    const application = new HttpApplication();
    // add routes
    application.getService(RouterService).addRange(...routes);
    // use controller middleware
    app.use(controllerRouter(application));
    // and return
    return app;
}

export {
    getApplication
}