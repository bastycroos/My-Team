import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArrayName, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TeamService } from '../team.service';
import { TeammodelModule } from '../teammodel/teammodel.module';


@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.css']
})
export class CreateListComponent implements OnInit {
  listForm!: FormGroup;
  teamlist: TeammodelModule[] | undefined;

  constructor(private fb: FormBuilder, private TeamService: TeamService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.listForm = this.fb.group({
      name: ['', [Validators.required]],
      adders: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
    });
  }

  editUser(listForm: TeammodelModule) {
    this.listForm = new FormGroup({
      id: new FormControl(listForm.id),
      name: new FormControl(listForm.name),
      adders: new FormControl(listForm.adders),
      phoneNumber: new FormControl(listForm.phoneNumber)
    });
    console.log(this.editUser);
  }

 /* save() {
    let index = this.teamlist?.findIndex(listForm => listForm.id === this.listForm.value.id);
    this.teamlist ? [index] = this.listForm.value;
  }*/

  onSubmit() {
    // this.submitted = true;

    if (this.listForm.valid) {
      console.log(this.listForm.value);
      this.TeamService.PostTeam(this.listForm.value).subscribe(data => {
        // this.submitted = false;
        console.log("suceeded");
        console.log(data);
        this.router.navigate(['home']);

        // let element: HTMLElement = document.getElementById('closeModel') as HTMLElement;
        // element.click();

      });
    }
  }

  onCancel() {
    this.router.navigate(['home']);
  }






}
