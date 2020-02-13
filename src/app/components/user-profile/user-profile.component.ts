import { Component, OnInit } from '@angular/core';
//
import { User } from '../../shared/user';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './../../shared/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  //currentUser: Object = {};
  currentUser = new User();

  constructor(
    public authService: AuthService,
    private actRoute: ActivatedRoute
  ) {
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.authService.getUserProfile(id).subscribe(res => {
      //console.log(res);
      this.currentUser = res.msg;
    })
  }

  ngOnInit(): void {
  }

}
