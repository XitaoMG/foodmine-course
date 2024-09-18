import { Component, OnInit } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../services/food.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';
import { StarRatingComponent } from "../../partials/star-rating/star-rating.component";
import { SearchComponent } from "../../partials/search/search.component";
import { FoodPageComponent } from '../food-page/food-page.component';
import { TagsComponent } from '../../partials/tags/tags.component';
import { NotFoundComponent } from "../../partials/not-found/not-found.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, NgFor, StarRatingComponent, CommonModule, SearchComponent, FoodPageComponent, TagsComponent, NotFoundComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

    foods:Food[] = [];
    constructor(private foodService:FoodService, activatedRoute:ActivatedRoute){
      activatedRoute.params.subscribe((params)=>{
        if(params.searchTerm)
          this.foods = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
        else if(params.tag)
          this.foods = this.foodService.getAllFoodsByTag(params.tag);
        else
        this.foods = foodService.getAll();
      })
    }

    ngOnInit(): void {

    }
}


