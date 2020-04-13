import { Injectable } from '@angular/core';

let temp;

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  constructor() { }
  sendData(data) {
    console.log('send data ', data);
    temp = data
  }
  fetchData() {
    return temp;
  }
}
