//Check whether a number is Prime or not
let count = 0
function prime(x){
    for (let i =0; i<=x; i++){
        if(x%i==0){
            count++;
        }
    }
        if(count==2){
            console.log("prime")
        }
        else{
            console.log("No prime")
  
        }
    
    
}

prime(1)

// this is from branch code_fix