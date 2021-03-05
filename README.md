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

```
// using Rxjs Observable

onSearch(q: string){
    const  config: ImageSearchOptions = {
      key: 'PIXABAY KEY', // required, subscribe to the pixabay site to get it. It's free
      lang: 'pt',
      per_page: 10
    }
    this.imageSearch.init(config);
    this.imageSearch.search(q).subscribe(
      (result: ImageSearchResult) => {
        this.hits = result.hits;
      }
    );
  };
```

