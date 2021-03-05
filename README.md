This library has a service class, which searches for images, using the PIXABAY Images API.

## Installation

npm i pdeio-image-search

## Parameters

PIXABAY documention : https://pixabay.com/api/docs/

## Result types
```
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
```


## Usage

# In a Angular project

```
//app.module.ts

@NgModule({
  declarations: [ ...],
  imports: [
    ...
    BrowserModule,
    ImageSearchModule,
    HttpClientModule,
    ...
  ],
  providers: [],
  bootstrap: [ ... ]
})
```



```
//app.component.ts

import { ImageSearchHit, ImageSearchResult, ImageSearchService, ImageSearchOptions } from 'image-search';

...

constructor(private imageSearchService : ImageSearchService) {}

// using Rxjs Observable

  hits: ImageSearchHit[];
  onImageSearch(q : string){
    const  config: ImageSearchOptions = {
      key: 'API_KEY' // required, sign up at pixabay site to get it. It's free
      lang: 'pt',
      per_page: 10
    }
    this.imageSearchService.init(config);
    this.imageSearchService.search(q).subscribe(
      (result: ImageSearchResult) => {
        this.hits = result.hits;
      }
    );
  };

```

