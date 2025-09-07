// contactus.component.ts

import { Component, OnInit } from "@angular/core";
import { HttpService } from "../../../services/http.service";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  image = "https://images.freeimages.com/images/large-previews/7bc/bald-eagle-1-1400106.jpg";
  loading = false;
  buttonText = "Submit";
  
  nameFormControl = new FormControl("", [
    Validators.required,
    Validators.minLength(4)
  ]);

  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);

  messageFormControl = new FormControl("", [
    Validators.required
  ]);

  constructor(public http: HttpService) {}

  ngOnInit() {
    console.log(this.http.test);
  }

  register() {
    if (this.nameFormControl.invalid || this.emailFormControl.invalid || this.messageFormControl.invalid) {
      console.log("Please fill out all required fields correctly.");
      return;
    }

    this.loading = true;
    this.buttonText = "Submitting...";

    const user = {
      name: this.nameFormControl.value,
      email: this.emailFormControl.value,
      message: this.messageFormControl.value
    };

    this.http.sendEmailToAdmin(user).subscribe(
      () => {
        console.log(`👏 > 👏 > 👏 > 👏Email send  to admin `);
      },
      (error) => {
        console.error("Failed to send email to admin:", error);
      },
      () => {
        this.loading = false;
        this.buttonText = "Submit";
      }
    );
  }
}
