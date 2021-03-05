import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ImageSearchOptions, PIXABAY_CONFIG } from './config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ImageSearchService {
  basePath = 'https://pixabay.com/api';

  constructor(private http: HttpClient) {}

  public init(options: ImageSearchOptions){

    Object.entries(options).forEach(([key, value]) => {
      PIXABAY_CONFIG[key] = value;
    });
  }

  public search(q: string): Observable<ImageSearchResult> {
    return this.http.get(this.basePath + this.createQuery(q)).pipe(
      map((result: ImageSearchResult) => {
        return result;
      })
    );
  }

  private createQuery(search: string): string {
    let query: string = '?q=' + search;


    Object.entries(PIXABAY_CONFIG).forEach(([key, value]) => {
      query += '&' + key + '=' + value;
    });
    return query;
  }
}

export interface ImageSearchResult {
  total: number;
  totalHits: number;
  hits: ImageSearchHit[];
}

export interface ImageSearchHit {
  id?: number;
  pageURL?: string;
  type?: string;
  tags?: string;
  previewURL?: string;
  previewWidth?: number;
  previewHeight?: number;
  webformatURL?: string;
  webformatWidth?: number;
  webformatHeight?: number;
  largeImageURL?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageSize?: number;
  views?: number;
  downloads?: number;
  favorites?: number;
  likes?: number;
  comments?: number;
  user_id?: number;
  user?: string;
  userImageURL?: string;
}
