import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { User } from "../models/user.model";


@Injectable()
export class UserService {

    private users: User[] = [
        {
            firstName: 'Belaziz',
            lastName: 'Mohammed',
            mail: 'medbelaziz@gmail.com',
            drink : 'L eau mineral',
            hobbies: ['football', 'swiming']
        }
    ];
    userSubject: Subject<User[]>;

    constructor() {
        this.userSubject = new Subject();
    }

    emitUser() {
        this.userSubject.next(this.users.slice())
    }

    addUser(user: User) {
        this.users.push(user);
        this.emitUser();
    }
}