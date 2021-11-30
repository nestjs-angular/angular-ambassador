import { Component, OnInit } from '@angular/core';
import { StatsService } from 'src/app/services/stats.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  links: any = [];

  constructor(private statsService: StatsService) {
  }

  ngOnInit(): void {
    this.statsService.stats().subscribe(
      stats => {
        this.links = stats;
      }
    );
  }

  checkoutLink(code: string): string {
    return `${environment.checkout_url}/${code}`;
  }
}
