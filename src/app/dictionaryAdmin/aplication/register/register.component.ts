import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, RouterLinkActive} from "@angular/router";
import {SessionService} from "../../../core/session/session.service";
import {User} from "../../model/interfaces";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm: boolean = true;
  public userForm: FormGroup;

  constructor(private rutaActiva: ActivatedRoute, private sessionService: SessionService) {
  }

  ngOnInit(): void {
    this.userForm = this.initForm();
  }

  private initForm(): FormGroup {
    return new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-z0-9_\\.]+@[a-zA-z0-9_\\.]+\\.[a-zA-Z]{2,5}$")]),
      pass: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9@_%$]{6,15}$")])
    })
  }

  public register(): void {
    let user: User = this.userForm.value;
    this.sessionService.register(user).subscribe(token => this.sessionService.isLogged(token).subscribe(logged=>{
      console.log(logged)
    }));

    this.registerForm = !this.registerForm;
  }

  public checkData(): void {
    let user: User = this.userForm.value;
    this.sessionService.login(user).subscribe(token => console.log(token));
    this.registerForm = !this.registerForm;
  }
}
