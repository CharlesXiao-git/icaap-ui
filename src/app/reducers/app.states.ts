import { Article } from '../store/models/article';

export interface AppState {
  articleState: ArticleState;
}

export interface ArticleState {
  articles: Article[];
}
