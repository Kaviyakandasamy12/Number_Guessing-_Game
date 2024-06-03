import React from "react";
function Result({secretNum , term}){
    let res;
    if(term) {
        if(term > secretNum){
            res = 'Higher';
        }
        else if(term<secretNum){
            res = 'Lower';
        }
        else if(term == secretNum){
            res = 'Yahoo! correct answer';
        }
        else {
            res = 'Enter valid input';
        }
    }
    return <h3>You Guessed: {res} </h3>
        
}
export default Result;