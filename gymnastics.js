export const fact = ( n ) => 
      n === 0 ? 1 : n * ( fact ( n - 1 ) ) ; 

export const add = ( x ) => ( y ) => x + y; 

export const sum = ( n ) => 
             n <= 0 ? 0 : n + sum ( n - 1 ); 

