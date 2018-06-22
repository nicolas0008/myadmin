import { Injectable } from '@angular/core';

// User Imports
import { HttpService } from './http.service';
import { environment as ENV } from '../../../environments/environment';
import { IExample } from '../../shared/models/example.model';
import { Observable } from 'rxjs/Observable';


/**
 * Exports the ExampleHTTPService that provides HTTP requests for the Example Service.
 *
 * @export
 * @class ExampleHTTPService
 */
@Injectable()
export class ExampleHTTPService {
    BASE_URL: string;

    constructor(private httpService: HttpService) {
        this.BASE_URL = ENV.example_url;
    }

    /**
     * @description Gets a random user as example
     * @return {Observable<IComment>}
     */
    loadRandomUser(): Observable<IExample> {
        const methodURL = '';
        return this.httpService.get(this.BASE_URL + methodURL, { parameters: ''});
    }
}
