import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './users'; 
import { Observable } from 'rxjs';
import { EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

@Injectable({
  providedIn: 'root'
})
export class UserserviseService {
 
eventEmit = new EventEmitter();
subVar!: Subscription

constructor(private users: HttpClient) {
 
 }
api="http://localhost:3000/usersdb";


allusers(): Observable<Users[]> {
  return this.users.get<Users[]>(this.api)
}

singleuse(id:any): Observable<Users[]>{
    return this.users.get<Users[]>(`${this.api}/${id}`);
}


adduser(newuser: any) :Observable<Users[]> {
return this.users.post<Users[]>(this.api,newuser)
}


log(x:any){
console.log(x);
}

refreshserv(){
  this.eventEmit.emit();
}

deluser(id:any): Observable<any> {
    return this.users.delete(`${this.api}/${id}`, { responseType: 'text' });
}

updateuser(id:any, value: any): Observable<Object> {
  return this.users.put(`${this.api}/${id}`, value);
}


}
