// Problem-1

function mindGame(number){
    if(typeof number !==  'number') {
        return 'Input a number!'
    }
    let sum = ((((number*3)+10)/2)-5)
    return sum;
}
const result = mindGame(5);
console.log(result);

// again 
{
    function mindGame(number){
        if(typeof number !==  'number') {
            return 'Input a number!'
        }
        let multiply = number*3;
        let sum = multiply+10;
        let divide = sum / 2;
        let substract = divide - 5;
        return substract;
    }
    const result = mindGame(5);
    console.log(result);
     
}
// Problem-2
{
    function evenOdd(character){
        if(typeof character !== 'string'){
            return 'Please input a string!'
        }
        let count = 0;
        for(let i = 1; i<=character.length; i++){
            count = i;
        }
        if(count % 2 == 0){
            return 'even'
        } else {
            return 'odd'
        }
         
    }
    const result = evenOdd('Phero');
    console.log(result);
    
}