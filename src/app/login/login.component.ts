import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login(userid: any, password: any) {
    if (userid == 'chandan' && password == '123') {
      localStorage.setItem("isloggedIn", "true");
    } else {
      localStorage.setItem("isloggedIn", "false");
    }
  }

}
