export class AuthService {

    status = false;

    constructor() { }

    connecter() {
        return new Promise((resolve, reject) =>
            setTimeout(() => {
                this.status = true;
                resolve(true);
            }, 1500));
    }

    disconnecter() {
        this.status = false;
    }
}