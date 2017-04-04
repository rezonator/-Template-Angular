import {OpaqueToken} from "@angular/core";

// Status of the task.
export enum TaskStatus {
    Idle = 0,
    InProgress,
    Done
}

export enum TaskPriority {
    Low = 0, 
    Normal,
    High,
    Critical
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
    priority : TaskPriority;
    update : string  ;
    engagementId : string;
    //tags : Array<any> 
    // pamietac o strukturalnej widzialnosci - szef moze widziec themesy swich podwladnych etc
}

// Engagement is a collection of tasks.
export class Engagement {
    id : string;
    name : string;
    description : string;
    ownerIds : string [] ;
    created : string;
    tasks : Array<Task>;
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
    isPublic : boolean;
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
    // get tasks for engagement.
     getTasksForEng(engId : string) : Array<Task>;
     getEngForUser(userId : string) : Array<Engagement>;
     checkEngExists(engId :string) : boolean;
     checkTaskExists(taskId : string) : boolean;
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