import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';
import { UserService } from '../../services/user/user.service';
import { createSecureServer } from 'http2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private title = "Seja bem vindo ao quiz da Zup Quiz"

  constructor(private loginService: LoginService, private router: Router, private userService: UserService) {}

  ngOnInit() {
  }

createUser(user){
    this.userService.createUser(user.id).subscribe(response2 =>{
      console.log('google', user.id, user)
  });
  }  
  

  login() {
    this.loginService.login().then((response1)=>{
      console.log(response1)
      this.router.navigateByUrl("question")

    //   this.userService.getUser(response1.id).subscribe(response2 =>{
  
    //     if(!this.checkifHasUser(response1, response2)) {
    //       this.createUser(response2)
            
    //     } else {
  
    //       console.log('nao cria usuario')
    //     }    
    // });
  });
}

    
      
   


        // if(response1.id === googleId) {
        //   console.log('tem usuario', )
        // } else {

      

}
