import { Component, OnInit } from '@angular/core';
import { TeammodelModule } from 'src/app/teammodel/teammodel.module';
import { TeamService } from 'src/app/team.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-team',
  templateUrl: './list-team.component.html',
  styleUrls: ['./list-team.component.css']
})
export class ListTeamComponent implements OnInit {
 
  teamlist: TeammodelModule[] = [];

  constructor(private teamService: TeamService, private router: Router) {
    console.log('constructor.......');
    console.log(this.teamlist.length);
   }

  ngOnInit(): void {
    console.log('ngOnInit........')
    this.getTeam();
  }

  getTeam() {

    console.log('Basty');
    this.teamService.getTeam().subscribe(data => {
      this.teamlist = data;
      console.log('Jathu')
    });
    console.log('thevapriyan');
  }

  onDelete(team: any) {
    this.teamService.DeleteTeam(team.id).subscribe(data => {
      console.log(data);
      this.getTeam();
    })
  }


}




