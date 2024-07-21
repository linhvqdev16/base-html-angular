import { Injectable } from "@angular/core";
import { HttpClientService } from "./base-services/http-client-service";

@Injectable()
export class HomeService {
    constructor(private httpClient: HttpClientService) { }
}