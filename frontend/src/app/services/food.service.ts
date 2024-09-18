import { Injectable } from '@angular/core';
import { sample_foods, sample_tags } from '../../data';
import { Food } from '../../app/shared/models/Food';
import { Tag } from '../shared/models/Tag';
import { HttpClient } from '@angular/common/http';
import { FOODS_BY_ID_URL, FOODS_BY_SEARCH_URL, FOODS_BY_TAG_URL, FOODS_TAGS_URL, FOODS_URL } from '../shared/constants/urls';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Food[]> {
    return this.http.get<Food[]>(FOODS_URL);
  }

  getAllFoodsBySearchTerm(searchTerm: string) {
    return this.http.get<Food[]>(FOODS_BY_SEARCH_URL + searchTerm);
  }

  getAllTags():Observable<Tag[]> {
    return this.http.get<Tag[]>(FOODS_TAGS_URL);
  }

  getAllFoodsByTag(tag: string): Observable<Food[]> {
    return tag === "All"?
    this.getAll() :
    this.http.get<Food[]>(FOODS_BY_TAG_URL + tag);
  }

  getFoodById(foodId:string): Observable<Food> {
    return this.http.get<Food>(FOODS_BY_ID_URL + foodId);
  }

}
