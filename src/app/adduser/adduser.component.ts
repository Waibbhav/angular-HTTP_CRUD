import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from "@angular/forms";
import { UserserviseService } from '../userservise.service';
import { Users } from '../users';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  addForm !: FormGroup
  constructor(private usersr:UserserviseService) { }

  ngOnInit(): void {
    this.addForm = new FormGroup({
      user_name:new FormControl('',),
      designation:new FormControl('',),
      salary:new FormControl('',)
    })
  }
   newuser:any=[]
  dataSubmit(){
    // this.usersr.log(this.addForm.value)
    this.newuser=this.addForm.value
    this.usersr.adduser(this.newuser).subscribe((res)=>{
      // console.log('response after posting:' , res);
      this.usersr.refreshserv();
    })
    }
    

}
