import { Component , OnInit} from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthuserService } from 'src/app/views/services/authuser.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  implements OnInit {
  datatoken:any
  messageError:any
  constructor(private aus:AuthuserService,private route:Router) { }

  ngOnInit(): void {
  }


  login(f:any){
    let data=f.value
    this.aus.login(data).subscribe(data=>{
      this.datatoken=data
      this.aus.saveToken(this.datatoken.token)
      this.route.navigate(['/user'])


    },(err:HttpErrorResponse)=>this.messageError=err.error.error)
  }
}
