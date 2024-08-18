import { Component, OnInit } from '@angular/core';
import { UserService } from '../users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  searchQuery: string = '';
  loading: boolean = false;
  totalUsers: number = 0;
  pageSize: number = 10;
  page: number = 1;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers(this.page);
  }

  loadUsers(page: number): void {
    this.loading = true;
    this.userService.getUsers(page).subscribe({
      next: (response) => {
        this.users = response.data;
        this.totalUsers = response.total;
        this.loading = false;
      },
      error: (err) => {
        console.error('Failed to load users', err);
        this.loading = false;
      }
    });
  }

  onPageChange(event: any): void {
    this.page = event.pageIndex + 1;
    this.loadUsers(this.page);
  }
}








