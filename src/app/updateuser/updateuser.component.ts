import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from "@angular/forms";
import { UserserviseService } from '../userservise.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {
  singleuser:any=[];
  id:any;

  username:any;
  designation:any;
  salary:any;

  addForm !: FormGroup
  updateduser:any=[]

      // user_name=new FormControl()
      // designation=new FormControl()
      // salary=new FormControl()
  
  constructor(private usersr:UserserviseService , private actrout:ActivatedRoute) {
   }

  ngOnInit(): void {

    this.addForm = new FormGroup({
      user_name:new FormControl(),
      designation:new FormControl(),
      salary:new FormControl()
    })
   
 this.actrout.paramMap.subscribe(param =>{
  this.id= param.get('id')
  // console.log(this.id);

  
  this.usersr.singleuse(this.id).subscribe(user =>{
    this.singleuser= user
    // console.log(this.singleuser); 

    this.addForm = new FormGroup({
      user_name:new FormControl(this.singleuser.user_name),
      designation:new FormControl(this.singleuser.designation),
      salary:new FormControl(this.singleuser.salary)
    })
   })
 
 })
  }

  
   
  dataSubmit(){
    // this.usersr.log(this.addForm.value)
    this.updateduser=this.addForm.value
    this.usersr.updateuser(this.id,this.updateduser).subscribe((res)=>{
      // console.log('response after posting:' , res);
      this.usersr.refreshserv();
    })
    }


}

