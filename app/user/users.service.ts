import {Injectable} from "@angular/core";
import {IUsersService, User, Gender} from "../model"


@Injectable()
export class UsersService implements IUsersService {
   getUserData(userId: string): User {
        return {
    id : '1',
    description : 'this is my user',
     firstName : 'Jarek',
    phone : '233-233-12',
    lastName : 'Wawro',
    email : 'jaroslaw.wawro@ge.com',
    sso : '212582507',
    thumbnailUrl : 'https://upload.wikimedia.org/wikipedia/en/6/62/Kermit_the_Frog.jpg',
    department : 'Development',
    role : 'Director - Enterprise Applications',
    assignment : 'none',
    created : '03/04/2017',
    lastLoggedOn : '03/04/2017',
    hireDate : '01/09/2016',
    gender : Gender.Male,
    location : {
            address : 'Konopki 2/12',
        city : 'Katowice',        
    country : 'Poland'
    }   
        } as User;
   }

    getUsers(): Array<User> {
        return null;
    }
}


