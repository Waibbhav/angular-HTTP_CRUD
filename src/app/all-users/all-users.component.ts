import { Component, OnInit } from '@angular/core';
import { UserserviseService } from '../userservise.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  currentRow: any;
  allusers: any = [];
  userid: any;
  constructor(private users: UserserviseService) { }

  ngOnInit(): void {
    this.users.allusers().subscribe(alluser => {
      this.allusers = alluser
      // console.log(this.allusers);

      if (this.users.subVar == undefined) {
        this.users.subVar = this.users.eventEmit.subscribe((namee: any) => {
          this.refresh()
        })
      }
    })
  }
  refresh() {
    this.users.allusers().subscribe(alluser => {
      this.allusers = alluser
      // console.log(this.allusers);
    })
  }

  delet(x:any) {
    this.userid=x.id
    // console.log(this.userid);
    this.users.deluser(this.userid).subscribe(alluser => {
      this.users.refreshserv();
    })
  }


  


}


