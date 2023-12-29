import { Injectable } from '@angular/core';
import{Fancy} from '../../shared/models/Fancy';
import{Tag} from '../../shared/models/Tag';
@Injectable({
  providedIn: 'root'
})
export class FancyService {

  constructor() { }

  getFancyById(id: number): Fancy{
    return this.getAll().find(fancy => fancy.id == id)!;
  }

  getAllFancysBySearchTerm(searchTerm:string) :Fancy[]{
    return this.getAll().filter(fancy =>
      fancy.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  getAllTags():Tag[]{
    return[
      {name: 'All',count:9},
      {name: 'Gifts',count: 4},
      {name: 'Relaxing',count:2},
      {name: 'Photo',count:5},
      {name:'Cute',count:3},
    ];

  }
  getAllFancysByTag(tag: string): Fancy[] {
    return tag == "All" ? 
    this.getAll() :
    this.getAll().filter(food => food.tags?.includes(tag));

  }

  getAll():Fancy[]{
    return [
    {
      id:1,
      name:'CollegeBag',
      price:9,
      DeliveryTime:'1',
      imageUrl:'/assets/images/bag.jpg.jpg',
      tags:['Bag', 'Backpack'],
    },
    {
      id:2,
      name:'Waterbottle',
      price:16,
      DeliveryTime:'6-7',
      imageUrl:'/assets/images/bottle.jpg.jpg',
      tags:['Water', 'Storage','Gifts']
    },
    {
      id:3,
      name:'BTSgift ',
      price:14,
      DeliveryTime:'3-6',
      imageUrl:'/assets/images/bts gift.jpg.webp',
      tags:['Artist', 'korea','Photo','Gifts'],
    },
    {
      id:4,
      name:'Dad & Daughter',
      price:5,
      DeliveryTime:'4-7',
      imageUrl:'/assets/images/dad.jpg.webp',
      tags:['Gifts', 'DadDaughter','Photo','Gifts'],
    },
    {
      id:5,
      name:'Camera',
      price:17,
      DeliveryTime:'5-7',
      imageUrl:'/assets/images/ferrero.jpg.jpg',
      tags:['Photo', 'Ferrero Rocher','Relaxing','Gifts'],
    },
    {
      id:6,
      name:'FriendshipFrame',
      price:3,
      DeliveryTime:'2-4',
      imageUrl:'/assets/images/friends.jpg.jpg',
      tags:['Friends', 'Gift','Photo'],
    },
    
    {
      id:7,
      name:'BuddhaStatue',
      price:80,
      DeliveryTime:'3-9',
      imageUrl:'/assets/images/smokeflow.jpg.jpg',
      tags:['Cute', 'Relaxing','Photo'],
    },
    
    {
      id:8,
      name:'Umbrella',
      price:4,
      DeliveryTime:'3-4',
      imageUrl:'/assets/images/umbrella.jpg.webp',
      tags:['Rain', 'Safety','Cute'],
    },
    {
      id:9,
      name:'Couplestatue',
      price:15,
      DeliveryTime:'1-3',
      imageUrl:'/assets/images/winter couple.jpg.webp',
      tags:['Statues', 'Miniature','Cute'],
    },
  ]
    
}

}



    
      
    


