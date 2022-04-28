function snapCrackle(maxValue){
    
/*     let multiple = maxValue % 5 === 0;
    let impar = maxValue % 2 !== 0; */
    let counter = '';
    
    for(let value = 1; value <= maxValue; value++){

             if( value % 2 !== 0 && value % 5 === 0){
                counter += 'SnapCrackle!, ';
                continue;
            } 
                if(value % 2 !== 0 ){
                    counter += 'Snap!, '
                    continue;
            }
                if(value % 5 === 0){
                 counter += 'Crackle!, ';
                 continue;
                }
                counter += value + ', ';
            }
           return `${counter}`; 
} 



