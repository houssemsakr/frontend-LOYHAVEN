import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthuserService } from 'src/app/views/services/authuser.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent  implements OnInit {
  messageErr:any
  constructor(private aus:AuthuserService,private router:Router) { }

  ngOnInit(): void {
  }

  register(f:any){
    let data=f.value

    this.aus.register(data).subscribe(data=>{
        this.router.navigate(['/user/loginuser'])
      
     console.log(data)
    },(err:HttpErrorResponse)=>{
      console.log(err)
      this.messageErr="hjbgvehjbhvbsdhbv"})

  }

}


