import { Component, OnInit } from '@angular/core';
import {FancyService} from '../services/fancy/fancy.service';

import { Fancy } from '../shared/models/Fancy';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fancys:Fancy[] = [];
  constructor(private fancyService:FancyService, private route:ActivatedRoute) { }


  ngOnInit(): void {
    this.fancys= this.fancyService.getAll();
    this.route.params.subscribe(params => {
      if (params.searchTerm)
        this.fancys = this.fancyService.getAllFancysBySearchTerm(params.searchTerm);
          else if(params.tag)
          this.fancys = this.fancyService.getAllFancysByTag(params.tag);
      else
        this.fancys = this.fancyService.getAll();
    })
  }

}

