import {Observable} from 'rxjs/Rx';
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@Injectable()
export class PackagesService {
     // Resolve HTTP using the constructor
     constructor (private http: Http) {}
     // private instance variable to hold base url
     private url = 'http://localhost:4000/get-dependencies';

     getPackageInfo() : Observable<any> {
         // ...using get request
         return this.http.get(this.url)
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => {
                           return res.json()
                         })
                         //...errors if any
                         .catch((error:any) => Observable.throw(error || 'Server error'));

     }

}