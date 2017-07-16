//inject service as a dependency
import {Injectable} from '@angular/core';
//to make request to the API we use http request
//headers for manipulating headers request
import { Http,Headers} from '@angular/http';
// send data as Observable
import 'rxjs/add/operator/map';

@Injectable()
export class VarsService{
    //inject http module into the constructor
    constructor(private http:Http)
    {
        console.log('vars service');
    }

    getVars()
    {
        //we want to return the data as json
        return this.http.get('/vars').map(res => res.json());
    }

}