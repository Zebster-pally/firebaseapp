import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DefaultStateMatcher } from 'src/app/models/shared/mathcers/matcher';
import { AuthService } from 'src/app/models/shared/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  constructor(public authService: AuthService, private toastr: ToastrService, private router: Router) { }

  hide: Boolean = true;

  emailFormControl = new FormControl('', [Validators.required, Validators.email,]);
  passFormControl = new FormControl('', [Validators.required]);

  matcher = new DefaultStateMatcher();

  async signUp() {
    if (this.emailFormControl.valid && this.passFormControl.valid) {
      await this.authService.signUp(this.emailFormControl.value, this.passFormControl.value)
      this.router.navigate(['']);
      this.toastr.success('You are registered successfully!', 'Welcome!');
    } else {
      this.emailFormControl.markAsTouched();
      this.passFormControl.markAsTouched();
      this.toastr.warning('Invalid data!', 'Error!');
    }
  }

}
