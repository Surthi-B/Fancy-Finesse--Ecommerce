import { Component ,Input,OnInit} from '@angular/core';
import{FancyService} from '../services/fancy/fancy.service';
import {Tag} from '../shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent  implements OnInit{
  @Input()
  fancyPageTags?:string[];

  @Input()
  justifyContent:string='center';

 tags?:Tag[];
 constructor(private fancyService:FancyService) { }

 ngOnInit(): void{
  if(!this.fancyPageTags)
  this.tags = this.fancyService.getAllTags();

 }



}
