import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TeamService } from '../team.service';
import { Router } from '@angular/router';
import { MaterialModule } from '../Material-Module';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: TeamService,private route:Router) { }

  ngOnInit(): void {
    localStorage.clear();
  }
  respdata:any;

  ProdceedLogin(logindata: any) {
    if (logindata.valid) {
      this.service.ProceedLogin(logindata.value).subscribe(item => {
        this.respdata=item;
        console.log(this.respdata)
        if(this.respdata!=null){
          localStorage.setItem('token',this.respdata.jwtToken);
          this.route.navigate(['home']);

        }else{
          alert("Login Failed");
        }
      });

    }
  }

}
