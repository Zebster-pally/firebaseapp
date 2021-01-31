import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DefaultStateMatcher } from 'src/app/models/shared/mathcers/matcher';
import { AuthService } from 'src/app/models/shared/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  hide: Boolean = true;

  emailFormControl = new FormControl('', [Validators.required, Validators.email,]);
  passFormControl = new FormControl('', [Validators.required]);

  matcher = new DefaultStateMatcher();

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router) { }

  async login() {
    if (this.emailFormControl.valid && this.passFormControl.valid) {
      await this.authService.signIn(this.emailFormControl.value, this.passFormControl.value);
      this.router.navigate(['']);
    } else {
      this.emailFormControl.markAsTouched();
      this.passFormControl.markAsTouched();
      this.toastr.warning('Incorrect data!', 'Error!');
    }
  }

}
