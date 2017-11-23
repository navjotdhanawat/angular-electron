import { Component } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { PackagesService } from '../../providers/package.service'
import 'rxjs/add/observable/of';
import * as _ from 'underscore';
import { Observable } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
    selector: 'home',
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html'
})


export class HomeComponent {
    // public isLoaded = false;
    // displayedColumns = ['name', 'installedVersion', 'latestVersion', 'update', 'remove'];
    // constructor(public pkgService: PackagesService, public http: Http) {

    // }

    // updateDep(dep) {
    //     debugger
    // }

    // dataSource = new depSource(this.pkgService, this.http);
    // devDepSource = new devDepSource(this.pkgService, this.http);
}


// export class depSource extends DataSource<any> {
//     /** Connect function called by the table to retrieve one stream containing the data to render. */
//     constructor(public pkgService: PackagesService, public http: Http) {
//         super();
//     }
//     private url = 'http://localhost:3000/get-dependencies';

//     connect(): Observable<any> {
//         return this.getData();
//     }

//     getData() {
//         return this.pkgService.getPackageInfo().map(
//             data => {
//                 debugger
//                 var dependencies = [];
//                 var devDependencies = [];
//                 console.log(data);
//                 _.each(data.dependencies, function (installedVersion, index) {
//                     console.log(data.packages[index].collected.metadata);
//                     var meta = data.packages[index].collected.metadata;
//                     dependencies.push({ installedVersion: installedVersion, package: {name: meta.name, latestVersion: meta.version}});
//                 });

//                 _.each(data.devDependencies, function (installedVersion, index) {
//                     console.log(data.packages[index].collected.metadata);
//                     var meta = data.packages[index].collected.metadata;
//                     devDependencies.push({ installedVersion: installedVersion, package: {name: meta.name, latestVersion: meta.version}});
//                 });

//                 return dependencies;
//             },
//             err => {
//                 return false;
//             });

//     }

//     disconnect() { }
// }

// export class devDepSource extends DataSource<any> {
//     /** Connect function called by the table to retrieve one stream containing the data to render. */
//     isLoaded = false;
//     constructor(public pkgService: PackagesService, public http: Http) {
//         super();
//     }
//     private url = 'http://localhost:3000/get-dependencies';

//     connect(): Observable<any> {
//         return this.getData();
//     }

//     getData() {
//         var self = this;
//         return this.pkgService.getPackageInfo().map(
//             data => {
//                 var devDependencies = [];
//                 console.log(data);

//                 _.each(data.devDependencies, function (installedVersion, index) {
//                     console.log(data.packages[index].collected.metadata);
//                     var meta = data.packages[index].collected.metadata;
//                     devDependencies.push({ installedVersion: installedVersion, package: {name: meta.name, latestVersion: meta.version}});
//                 });
//                 self.isLoaded = true;
//                 return devDependencies;
//             },
//             err => {
//                 return false;
//             });

//     }

//     disconnect() { }
// }