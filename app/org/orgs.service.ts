import {Injectable} from "@angular/core";
import { IOrgsService, Org } from "../model"


@Injectable()
export class OrgsService implements IOrgsService {
    
    getOrgData(orgId: string): Org {
        return {
            id : '1',
            name : 'GE',
            thumbnail : 'https://s-media-cache-ak0.pinimg.com/736x/7c/0f/0c/7c0f0c2bdb16d759541d2d61fe2cdac8.jpg',
            description : 'This is my first org!',
            members : 1,
            created : '09/01/2010'
        } as Org;
    }

    getOrgs(): Org[] {
        return null;
    }
}