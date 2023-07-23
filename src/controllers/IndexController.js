import { HttpController, httpController, httpGet } from '@themost/router';

@httpController()
class IndexController extends HttpController {

    @httpGet()
    index() {
        return this.view('index');
    }

}

export {
    IndexController
}