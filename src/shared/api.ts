import axios from "axios"
import { Article, Category } from "./types"

const apiBase = 'http://localhost:3333';


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

// export const loadState = () => {
//     try {
//       const state = localStorage.getItem('profile');
//       if (state === null) {
//         return {};
//       }
  
//       return JSON.parse(state)
//     } catch (err) {
//       console.warn('%c load state error', 'color: #b00', err);
//     }
//   };
export const loadState = () => {
  try {
    const state =localStorage.getItem('authToken');
    if (state === null) {
      return {};
    }

     return JSON.parse(state);
  } catch (err) {
    console.warn('%c load state error', 'color: #b00', err);
  }
};


  export const login = (username: string, password: string) => {
    return axios.post(`${apiBase}/auth/login`, {
        username,
        password
    })
    // .then(res => res.data.token);
}

export const getProfile = () => {
    const token = localStorage.getItem('authToken');
    return axios.get(`${apiBase}/auth/profile`, {
       headers: {
           'Authorization': token
       } 
    })
}


