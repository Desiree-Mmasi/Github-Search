import { Component, OnInit, Input } from '@angular/core';
import { Repository } from '../repository';

@Component({
  selector: 'app-repository-display',
  templateUrl: './repository-display.component.html',
  styleUrls: ['./repository-display.component.css']
})
export class RepositoryDisplayComponent implements OnInit {

  repository: Repository;
  @Input() repo:JSON;
  constructor() { }

  ngOnInit() {
    this.repository = new Repository(this.repo);
  }
}
