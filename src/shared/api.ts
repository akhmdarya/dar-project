import axios from "axios"
import { Article, Category } from "./types"

export const getCategories = () =>{
    return axios.get<Category[]>(`https://media-api.dar-dev.zone/api/categories`) 
}


export const getArticle = (id: string) => {
    return axios.get<Article>(`https://media-api.dar-dev.zone/api/articles/${id}`)
}

export const getArticles = (categoryId?: string) => {
    const params: any = {
        sort: 'id:DESC',
        limit: 10
    }

    if (categoryId) {
        params['category'] = categoryId;
    }

    return axios.get<Article[]>(`https://media-api.dar-dev.zone/api/articles`, {
        params,
    })
      .then(res => res.data);
};
