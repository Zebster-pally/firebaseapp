import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IUser } from 'src/app/models/shared/interfaces/user';
import { AuthService } from 'src/app/models/shared/services/auth.service';
import { UsersService } from 'src/app/models/shared/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements AfterViewInit, OnInit, OnDestroy {
  private componentDestroyer = new Subject();

  displayedColumns: string[] = ['uid', 'email', 'role', 'actions'];
  dataSource: MatTableDataSource<IUser>;

  isAdmin: boolean;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private usersService: UsersService,
    private authService: AuthService) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    this.usersService.get()
      .pipe(takeUntil(this.componentDestroyer))
      .subscribe(data => this.dataSource.data = data)

    this.isAdmin = this.authService.isAdmin();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy() {
    this.componentDestroyer.next()
    this.componentDestroyer.complete()
  }

  delete(id: string) {
    this.usersService.delete(id);
  }
}
