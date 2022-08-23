import { Component } from '@angular/core';
import { TeamService } from './team.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My-Team';
  constructor(private route: Router, private service: TeamService) { }
  
  isMenuVisible = true;
  isadmin = false;
  ngDoCheck(): void {
    const currentroute = this.route.url;
    if (currentroute == '/login' || currentroute == '/access/register') {
      this.isMenuVisible = false
    } else {
      this.isMenuVisible = true
    }

  
  }

  myDate=Date();
}
