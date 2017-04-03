import {OpaqueToken} from "@angular/core";

// Status of the task.
export enum TaskStatus {
    Idle = 0,
    InProgress,
    Done
}

export enum Gender {
    Male = 0,
    Female
}

// Simple task.
export class Task {
    id : string;
    name : string;
    ownerid :string;
    assigned : string;
    description : string;
    created : string;
    status : TaskStatus;
    update : string  ;
    //tags : Array<any> 
    // pamietac o strukturalnej widzialnosci - szef moze widziec themesy swich podwladnych etc
}

// Location data.
export class Location {
    address : string;
    city : string;
    country : string;
}

// Basic user info.
export class User {
    id : string;
    description : string;
    firstName : string;
    phone : string;
    lastName : string;
    email : string;
    sso : string;
    thumbnailUrl : string;
    department : string;
    role : string;
    assignment : string;
    created : string;
    lastLoggedOn : string;
    hireDate : string;
    gender : Gender;
    location : Location;
    // organization structure
    orgId : string;
}

// Organization info.
export class Org {
    id : string;
    name : string;
    thumbnail : string;
    description : string;
    members : number;
    created : string;
}

// Task service.
export interface ITaskService {
     getTasksForTheme(themeId : string) : Array<Task>;
}

export interface IUsersService {
    getUserData(userId : string) : User;
    getUsers() : Array<User>;
}

export interface IOrgsService {
    getOrgData(orgId : string) : Org;
    getOrgs() : Array<Org>;
}

export const TSToken = new OpaqueToken("tstoken");