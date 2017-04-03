import {Injectable} from "@angular/core";
declare var toastr:any;

@Injectable()
export class MessageService {
    success(message : string, title? : string) {
        toastr.success(message, title);
    }
}