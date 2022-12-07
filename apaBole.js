function apaBole(){
    let result=[]
    for(let i=1;i<=100;i++){
        if(i%3===0 && i%5===0){
            result.push("ApaBole")
        }else if(i%3===0){
            result.push("Apa")
        }else if(i%5===0){
            result.push("Bole")
        }else{
            result.push(i)
        }
    }
    return result
}

console.log(apaBole())