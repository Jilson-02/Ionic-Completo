import { Router } from '@angular/router';
import { UsuarioService } from './../Servicios/usuario.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private usuarioService:UsuarioService, private router: Router) {}

  usuario: any;

  login(email: any, password: any){
    this.usuarioService.login(email.value, password.value).subscribe({
      next: (data: any) => {
          localStorage.setItem('user', data.dataUser.user);
          localStorage.setItem('token', data.token);
          localStorage.setItem('idu', data.dataUser.id);
          this.router.navigateByUrl('/principal')
        
      },
      error: ()=> {
        
      }
    })

  }

}
