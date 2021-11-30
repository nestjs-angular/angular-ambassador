import { Component, OnInit } from '@angular/core';
import { Emitters } from 'src/app/emitters/emitters';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  user: any = null;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    Emitters.authEmitter.subscribe(
      (user: any) => {
        this.user = user;
      }
    );
  }

  logout(): void {
    this.authService.logout().subscribe(
      () => Emitters.user = null
    );
  }

}
