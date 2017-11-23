import { Headers, Http, BaseRequestOptions } from '@angular/http';
import { TOKEN_NAME } from '../auth/auth.service';

const AUTH_HEADER_KEY = 'Authorization';
//const AUTH_PREFIX = 'Bearer';
const AUTH_PREFIX = 'x-access-token';

export class AuthRequestOptions extends BaseRequestOptions {

    constructor() {
        super();

        const token = localStorage.getItem(TOKEN_NAME);
        if (token) {
            this.headers.append(AUTH_HEADER_KEY, `${AUTH_PREFIX} ${token}`);
        }
    }

}
