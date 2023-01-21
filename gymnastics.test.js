import { fact, add, sum, linked, head, tail, toArray, link, range, map, fizzbuzz, aggregate, end } from './gymnastics.js' 

// fact 
console.log ( fact ( 50 ) );
 
// add 
console.log ( add ( 2 ) ( 2 ) ); 

// sum 
console.log ( sum ( 50 ) );  

// linked 
console.log( head ( linked ( 3 ) ( linked ( 2 ) ( linked ( 1 ) ( null) ) ) ) ); 
console.log( tail ( linked ( 3 ) ( linked ( 2 ) ( linked ( 1 ) ( null) ) ) ) ); 

// toArray
console.log ( toArray ( linked ( 3 ) ( linked ( 2 ) ( linked ( 1 ) ( null ) ) ) ) );

// link 
console.log ( link ( [1, 2, 3, 4, 5 ] ) ); 

// range 
console.log ( range ( 1 ) ( 100 ) );
console.log ( toArray ( range ( 1 ) ( 100 ) ) ); 
 
// map 
console.log ( toArray ( map ( fact ) ( range ( 1 ) ( 100) ) ) ) ; 
console.log ( toArray ( map ( ( x ) => x * x ) ( range ( 1 ) ( 10 ) ) ) ); 

// fizzbuzz 
console.log ( fizzbuzz ( 10 ) ) 
console.log ( toArray ( map ( fizzbuzz ) ( range ( 1 ) ( 100 ) ) ) ); 

// aggregate 
console.log ( aggregate ( x => x * 2 ) ( link ( [1, 2, 3, 4, 5] ) ) );

// end
console.log ( end ( head ) ( range ( 1 ) ( 999 ) ) ); 
