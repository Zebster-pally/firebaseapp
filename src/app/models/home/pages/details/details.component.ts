import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/models/shared/interfaces/user';
import { UsersService } from 'src/app/models/shared/services/users.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  user: IUser = { uid: null, email: null, roles: null };

  constructor(private usersService: UsersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.usersService.getById(id)
      .subscribe((data) => { this.user = data })
  }

  async update(): Promise<void> {
    await this.usersService.update(this.user);
    this.router.navigate(['/users']);
  }

}
