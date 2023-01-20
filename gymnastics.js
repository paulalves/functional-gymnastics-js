export const fact = ( n ) => 
      n === 0 ? 1 : n * ( fact ( n - 1 ) ) ; 

export const add = ( x ) => ( y ) => x + y; 

export const sum = ( n ) => 
             n <= 0 ? 0 : n + sum ( n - 1 ); 

export const linked = ( head ) => ( tail ) => { 
   return { 
       head: head, 
       tail: tail
   }
}

export const head = ( linked ) => linked.head; 
export const tail = ( linked ) => linked.tail; 

export const toArray = ( xs ) => { 
   let result = [];
   
   while ( xs !== null ) { 
      result.push ( head ( xs ) ); 
      xs = tail ( xs ); 
   }
   return result; 
}
