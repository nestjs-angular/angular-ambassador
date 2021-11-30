import { Component, OnInit } from '@angular/core';
import { Emitters } from 'src/app/emitters/emitters';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = 'Welcome';
  description = 'Share links to earn money';
  user: any = null;

  constructor() {
  }

  ngOnInit(): void {
    this.user = Emitters.user;
    this.title = this.user ? '$' + this.user.revenue : 'Welcome';
    this.description = this.user ? 'You have earned this far' : 'Share links to earn money';
    Emitters.authEmitter.subscribe(
      (user: any) => {
        this.user = user;
        this.title = user ? '$' + user.revenue : 'Welcome';
        this.description = user ? 'You have earned this far' : 'Share links to earn money';
      }
    );
  }


}
