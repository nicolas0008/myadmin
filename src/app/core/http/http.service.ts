import { Injectable } from '@angular/core';
import { ResponseContentType } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

/**
* This class provides the HttpService service with methods to read names and add param names.
*/
@Injectable()
export class HttpService {
    private parameters: HttpParams = new HttpParams();

    /**
    * Creates a new NameListService with the injected Http.
    * @param {HttpClient} http - The injected Http.
    * @constructor
    */
    constructor(
        private http: HttpClient
    ) { }


    /**
    * @description Returns an Observable for the HTTP GET request
    * @param {string} url
    * @param {any} params
    * @param {ResponseContentType} response
    * @return {Observable<any>} The Observable for the HTTP request.
    */
    get(url: string, parameters?: any, response?: ResponseContentType): Observable<any> {
        const params = new HttpParams({ fromObject: parameters });
        const resType = (response && response === ResponseContentType.Blob) ? 'blob' : null;
        return this.http.get(url, { params, responseType: resType });
    }

    /**
     * @description Returns an Observable for the HTTP POST request for the JSON resource
     * @param {string} url
     * @param {Object} body
     * @return {Observable<any>} The observable for the response
     */
    post(url: string, body: Object): Observable<any> {
        return this.http.post(url, body);
    }

    /**
     * @description Returns an Observable for the HTTP PUT
     * @param {string} url
     * @param {Object} body
     * @return {Observable<any>} The observable for the response
     */
    put(url: string, body: Object): Observable<any> {
        return this.http.put(url, body);
    }

    /**
     * @description Returns an Observable for the HTTP DELETE
     * @param {string} url
     * @returns {Observable<any>}
     * @memberof HttpService
     */
    delete(url: string): Observable<any> {
        return this.http.delete(url);
    }

}
