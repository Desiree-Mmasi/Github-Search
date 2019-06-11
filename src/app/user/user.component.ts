import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';
import { GitsearchService } from '../Gitsearch/gitsearch.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  login: string;
  user: User;

  constructor( private route: ActivatedRoute, private gitsearch: GitsearchService ) { }


  enumerate(data){
    this.user= new User(data);
    this.user.info=data;
    this.gitsearch.fetchrepos(this.user.reposurl).then(
      (data: JSON[])=>{
        this.user.repos=data;
      }
    );
  }

  get(){
    this.gitsearch.fetchuserinfo(this.login).then(
      (data: JSON)=>{this.enumerate(data);}
    );
  }
  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.login = params['uname'];
      this.get();
    });
    this.get();
  };

};
  
