import axios from "axios"
import { Category } from "./types"
import { CardsCathegory } from "./types"
export const getCategories = () =>{
    return axios.get<Category[]>(`https://media-api.dar-dev.zone/api/categories`) 
}

export const getCardsCategories = () =>{
    return axios.get<CardsCathegory[]>(`https://media-api.dar-dev.zone/api/articles?limit=10&sort=id:DESC`) 
}