
export var PIXABAY_CONFIG: ImageSearchOptions = {
  key: '',
  lang: 'en',
  image_type: 'all',
  orientation: 'all',
  min_width: 0,
  min_height: 0,
  per_page: 20,
  safesearch: false,
  order: 'popular',
  page: 1,
  editors_choice: false,
  pretty: false,
};

export interface ImageSearchOptions {
  key: string;
  lang?:
    | 'cs'
    | 'da'
    | 'de'
    | 'en'
    | 'es'
    | 'fr'
    | 'id'
    | 'it'
    | 'hu'
    | 'nl'
    | 'no'
    | 'pl'
    | 'pt'
    | 'ro'
    | 'sk'
    | 'fi'
    | 'sv'
    | 'tr'
    | 'vi'
    | 'th'
    | 'bg'
    | 'ru'
    | 'el'
    | 'ja'
    | 'ko'
    | 'zh';
  id?: string;
  image_type?: 'all' | 'photo' | 'illustration' | 'vector';
  orientation?: 'all' | 'horizontal' | 'vertical';
  category?:
    | 'backgrounds'
    | 'fashion'
    | 'nature'
    | 'science'
    | 'education'
    | 'feelings'
    | 'health'
    | 'people'
    | 'religion'
    | 'places'
    | 'animals'
    | 'industry'
    | 'computer'
    | 'food'
    | 'sports'
    | 'transportation'
    | 'travel'
    | 'buildings'
    | 'business'
    | 'music';

  min_width?: number;
  min_height?: number;
  colors?:
    | 'grayscale'
    | 'transparent'
    | 'red'
    | 'orange'
    | 'yellow'
    | 'green'
    | 'turquoise'
    | 'blue'
    | 'lilac'
    | 'pink'
    | 'white'
    | 'gray'
    | 'black'
    | 'brown';

  per_page?: number;
  safesearch?: boolean;
  order?: 'popular' | 'latest';
  page?: number;
  editors_choice?: boolean;
  callback?: string;
  pretty?: boolean;
}
