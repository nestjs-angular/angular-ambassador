import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Emitters } from 'src/app/emitters/emitters';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  infoForm!: FormGroup;
  passwordForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.infoForm = this.formBuilder.group({
      first_name: '',
      last_name: '',
      email: ''
    });

    if (Emitters.user) {
      this.infoForm.patchValue(Emitters.user);
    }

    this.passwordForm = this.formBuilder.group({
      password: '',
      password_confirm: ''
    });

    Emitters.authEmitter.subscribe(
      user => {
        this.infoForm.patchValue(user);
      }
    );
  }

  infoSubmit(): void {
    this.authService.updateInfo(this.infoForm.getRawValue())
      .subscribe(user => Emitters.user = user);
  }

  passwordSubmit(): void {
    this.authService.updatePassword(this.passwordForm.getRawValue())
      .subscribe(user => console.log(user));
  }

}
