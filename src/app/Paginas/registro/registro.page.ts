import { Router } from '@angular/router';
import { UsuarioService } from './../../Servicios/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(private usuarioService:UsuarioService, private router:Router) { }

  ngOnInit() {
  }

  logout(){
    this.router.navigateByUrl('/home')
  }

  register(user: any, email: any, password: any){
    this.usuarioService.register(user.value, email.value, password.value).subscribe({
      next: (data: any) => {

        localStorage.setItem('user', data.users.user);
        localStorage.setItem('token', data.token);
        localStorage.setItem('idu', data.users.id);

        this.router.navigateByUrl('/principal')
        console.log(data);
      },
      error: (error: any) => {
        debugger
      }
    })
  }
}
