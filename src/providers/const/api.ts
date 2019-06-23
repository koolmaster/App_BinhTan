import { Http, Headers } from '@angular/http';
import { HTTP } from '@ionic-native/http';
import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { CONST } from './const';

@Injectable()
export class ApiProvider {
  constructor(
    public http: Http,
    public loadingCtrl: LoadingController,
    private HTTP: HTTP
  ) {
    console.log('Hello AuthServiceProvider Provider');
  }
  call<T>(base, obj, params): Promise<T> {
    let loading = this.loadingCtrl.create();
    let apiUrl = base + obj.service + obj.functionUrl;
    if (obj.method === "POST") {
      return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        this.http.post(apiUrl, JSON.stringify(params), { headers: headers })
          .map(res => res.json())
          .subscribe(data => {
            data.resultObject = data.resultObject;
            if (data.status === "SUCCESS") {
              if (data.resultObject == "") {
                resolve(data.resultObject);
              } else {
                resolve(data.resultObject);
              }
            } else {
              reject(data.description);
            }
          }, (err) => {
            if (err != null) {
              reject(err.description);
            } else {
              reject(err);
            }

          });
      });
    } else if (obj.method === "GET") {
      return new Promise((resolve, reject) => {
             JSON.stringify(params);
        this.http.get(apiUrl, { params: params })
          .map(res => res.json())
          .subscribe(data => {
            if (data.StatusCode === 0 || data.StatusCode === 200) {
                        // data.resultObject = JSON.parse(data.resultObject);
              resolve(data.resultObject);
            } else if (data.statusCode === -29) {
              resolve(data);
            } else if (data.statusCode === 401) {
              resolve(data.description);
            } else {
              reject(data.description);
            }
          }, (err) => {
            if (err != null) {
              reject(err.description);
            } else {
              reject(err);
            }
          });
      })
    }
  }
  callLogin<T>(base, obj, params): Promise<T> {
    let loading = this.loadingCtrl.create();
    let apiUrl = base + obj.service + obj.functionUrl;
    if (obj.method === "POST") {
      return new Promise((resolve, reject) => {
         let headers = new Headers();
        headers.append("Content-Type", "application/json");
        this.http.post(apiUrl, JSON.stringify(params), { headers: headers })
          .map(res => res.json())
          .subscribe(data => {
            if (data.status === "SUCCESS") {
                        if (data.resultObject == "") {
                reject(data.description);
              } else {
                resolve(data.resultObject);
              }
            } else {
                        reject(data.description);
            }
          }, (err) => {
                 if (err != null) {
              reject(err.description);
            } else {
              reject(err);
            }

          });
      });
    } else if (obj.method === "GET") {
      return new Promise((resolve, reject) => {
            JSON.stringify(params);
        this.http.get(apiUrl, { params: params })
          .map(res => res.json())
          .subscribe(data => {
            if (data.statusCode === 0 || data.statusCode === 200) {
                        data.resultObject = JSON.parse(data.resultObject);
              resolve(data.resultObject);
            } else if (data.statusCode === -29) {
              resolve(data);
            } else if (data.statusCode === 401) {
              resolve(data.description);
            } else {
              reject(data.description);
            }
          }, (err) => {
            if (err != null) {
              reject(err.description);
            } else {
              reject(err);
            }
          });
      })
    }

  }
  callString<T>(base, obj, params): Promise<T> {
    let loading = this.loadingCtrl.create();
    let apiUrl = base + obj.service + obj.functionUrl;
    if (obj.method === "POST") {
      return new Promise((resolve, reject) => {
             let headers = new Headers();
        headers.append("Content-Type", "application/json");
        this.http.post(apiUrl, JSON.stringify(params), { headers: headers })
          .map(res => res.json())
          .subscribe(data => {
                   if (data.status === "SUCCESS") {
              if (data.resultObject == "") {
                resolve(data.resultObject);
              } else {
                resolve(data.resultObject);
              }
            } else {
              reject(data.description);
            }
          }, (err) => {
                 if (err != null) {
              reject(err.description);
            } else {
              reject(err);
            }

          });
      });
    } else if (obj.method === "GET") {
      return new Promise((resolve, reject) => {
          JSON.stringify(params);
        this.http.get(apiUrl, { params: params })
          .map(res => res.json())
          .subscribe(data => {
            if (data.statusCode === 0 || data.statusCode === 200) {
                        data.resultObject = JSON.parse(data.resultObject);
              resolve(data.resultObject);
            } else if (data.statusCode === -29) {
              resolve(data);
            } else if (data.statusCode === 401) {
              resolve(data.description);
            } else {
              reject(data.description);
            }
          }, (err) => {
            if (err != null) {
              reject(err.description);
            } else {
              reject(err);
            }
          });
      })
    }

  }
  callWithout<T>(base, obj, params?): Promise<T> {
    let apiUrl = base + obj.service + obj.functionUrl;
    if (obj.method === "POST") {
      return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        this.http.post(apiUrl, JSON.stringify(params), { headers: headers })
          .map(res => res.json())
          .subscribe(data => {
            data.resultObject = data.resultObject;
            if (data.status === "SUCCESS") {
              if (data.resultObject == "") {
                resolve(data.resultObject);
              } else {
                resolve(data.resultObject);
              }
            } else {
              reject(data.description);
            }
          }, (err) => {
            if (err != null) {
              reject(err.description);
            } else {
              reject(err);
            }

          });
      });
    } else if (obj.method === "GET") {
      return new Promise((resolve, reject) => {
        JSON.stringify(params);
        this.http.get(apiUrl, { params: params })
          .map(res => res.json())
          .subscribe(data => {
            if (data.StatusCode === 0 || data.StatusCode === 200) {
              // data.resultObject = JSON.parse(data.resultObject);
              resolve(data.resultObject);
            } else if (data.statusCode === -29) {
              resolve(data);
            } else if (data.statusCode === 401) {
              resolve(data.description);
            } else {
              reject(data.description);
            }
          }, (err) => {
            if (err != null) {
              reject(err.description);
            } else {
              reject(err);
            }
          });
      })
    }
  }

}
