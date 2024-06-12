import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  login(email: string, password: string){
    let datos = {
      email:email,
      password:password
    }

    return this.http.post('http://127.0.0.1:3000/api/login', datos)
  }

  register(user: string, email: string, password: string ){
    let datos = {
      user:user,
      email:email,
      password:password
    }
    return this.http.post('http://127.0.0.1:3000/api/register', datos)
  }

  getUser() {
    const header = new HttpHeaders()
    .set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.get('http://127.0.0.1:3000/api/user', {headers:header});
  }

  deleteUser(id: number){
    const header = new HttpHeaders()
    .set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.delete('http://127.0.0.1:3000/api/user/'+ id, {headers:header});
  }

  searchPerson(user: string){
    return this.http.get('http://127.0.0.1:3000/api/user/search/'+ user)
  }

}



















































