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


export const checkEmptyUsername = (username: string) =>{
    return new Promise<string>((resolve, reject) =>{
       
        if (username.length < 3 ){
            reject ("Username too short!");
        }
        if ( username.length  > 32 ){
            reject ("Username too long!");
        }
        resolve ("Valid username")
  
}
    )
}

export const checkEmptyComment = (comment: string) =>{
    return new Promise<string>((resolve, reject) =>{
       
        if (comment.length < 10 ){
            reject ("Comment is too short!");
        }
        
        resolve ("Valid username")
  
}
    )
}


export const checkEmail = (email: string) =>{
    const [a]= [{name:"Valid email"}];
    var [b]= [{name:"Email not valid!"}];
    return new Promise<string>((resolve, reject) =>{
       
      
             if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) { 
              reject (b.name);}

            
             else{
                resolve (a.name);
             }
        
        
  
}
    )
}