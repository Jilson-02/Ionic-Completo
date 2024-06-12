import { UsuarioService } from './../../Servicios/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  usuarios:any

  constructor(private router: Router, private usuarioService:UsuarioService) { }

  ngOnInit() {
    this.getUser();
  }

  logout(){
    localStorage.clear();
    this.router.navigateByUrl('/home')
  }

  getUser(){
    this.usuarioService.getUser().subscribe({
      next: (data: any) => {
       this.usuarios = data.users
      },
      error: (error: any) => {
        
      }
    })
  }

  deleteUser(id: number) {
    this.usuarioService.deleteUser(id).subscribe({
      next: (data: any) => {
        this.usuarios = this.usuarios.filter((user:any) => user.id !== id); // Actualiza la lista de usuarios
      },
      error: (error: any) => {
       
      }
    });
  }

  buscarP: any;
  buscarPerson(name: any){
    this.usuarioService.searchPerson(name.value).subscribe({
      next: (data: any) => {
        this.buscarP = data.users
      },
      error: (error: any) => {
        debugger
      }
    })
  }

}
