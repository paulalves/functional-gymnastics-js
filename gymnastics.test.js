import { fact, add, sum, linked, head, tail, toArray } from './gymnastics.js' 

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
