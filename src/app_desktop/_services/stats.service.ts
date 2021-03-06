/**
 * Created by adrian on 5/15/17.
 */
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class StatsService {
    constructor(private http: Http) { }

    getThreadStats(id: number) {
        return this.http.get('/api/stats?thread_id=' + id, this.jwt()).map((response: Response) => response.json());
    }

    // private helper methods
    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }

    private handleError(error: any) {
        console.log(error);
        return Observable.throw(error.json());
        ;
    }

}