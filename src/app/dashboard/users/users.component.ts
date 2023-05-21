import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users:any = [];
  constructor( private usersService:UsersService) { }
  ngOnInit() {
    // read data within products collection
    this.usersService.read_users().subscribe((data:any)=>{
      this.users=data;
      console.log(this.users);
    }
    )};

  // delete product
  deleteUser(id:any) {
    if (window.confirm('êtes vous sûre de vouloir supprimer?')) {
      this.usersService.delete_user(id)
    }

  }
}
