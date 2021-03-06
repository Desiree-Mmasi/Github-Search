import { Component, OnInit } from '@angular/core';
import { GitsearchService } from '../Gitsearch/gitsearch.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {

  searchstring = '';
  results = [];

  constructor( private searchservice: GitsearchService) { }

  searchuser(){
    this.searchservice.getusers(this.searchstring).then((data :JSON)=>{
      this.results=data['items'];
    });
  }
  
  ngOnInit() {
  }

}
