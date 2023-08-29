//Problem 2 : Check whether a string is palindrome or not.

let revStr = ""
function palindrome(str){
    for(let i = str.length; i>0; i--){
        revStr+=str[i]
    }
    console.log(str,revStr)

    if(str==revStr){
        console.log("palindrome")
    }
    else{
        console.log("no palindrome")
    }

}
palindrome("1221")