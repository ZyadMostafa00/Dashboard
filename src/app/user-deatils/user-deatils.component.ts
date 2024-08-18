import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
UserService

import { UserService } from '../users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-deatils.component.html',
  styleUrls: ['./user-deatils.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: any | null = null;
  item: any | null = null;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser(): void {
    const userId = Number(this.route.snapshot.paramMap.get('id'));
    if (userId && !isNaN(userId)) {
      this.userService.getUserById(userId).subscribe({
        next: (response) => {
          this.user = response.data;
          this.item = response.support;
        },
        error: (err) => {
          console.error('Failed to load user details', err);
          this.router.navigate(['/users']);
        }
      });
    } else {
      console.error('Invalid user ID');
      this.router.navigate(['/users']);
    }
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
