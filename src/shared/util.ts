export const checkLikes = (count: number) =>{
    return new Promise<string>((resolve, reject) =>{
        setTimeout( ()=> {
        if (count > 5 || count <0){
            reject ("Lime LIMIT!");
        }
        resolve ("Like count has changed")
    },3000);
}
    )
}