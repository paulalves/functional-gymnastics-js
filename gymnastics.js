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

export const link = ( array ) => { 
   let result = null; 
   let xs = Array.from ( array ).reverse ( );
   
   for (let pos = 0; pos < xs.length; ++pos) {  
      result = linked ( xs [ pos ] ) ( result ); 
   } 

   return result; 
}

export const range = ( min ) => ( max ) => 
      min > max 
      ? null
      : linked ( min ) ( range ( min + 1 ) ( max ) );

export const map = ( fn ) => ( xs ) => 
      xs === null 
      ? null 
      : linked ( fn ( head ( xs ) ) ) ( map ( fn ) ( tail ( xs ) ) );

export const fizzbuzz = ( n ) => 
       ( n % 3 === 0 ? 'Fizz' : '') +
       ( n % 5 === 0 ? 'Buzz' : '') || n;

export const aggregate = ( fn ) => ( xs ) => { 
   let array = [];
   
   while ( xs ) { 
      array.push ( fn ( head ( xs ) ) ); 
      xs = tail ( xs ); 
   }
   return array; 
}

export const end = ( fn ) => ( xs ) => { 
   while ( xs && tail ( xs ) ) { 
      xs = tail ( xs ); 
   } 
   return fn ( xs ); 
}
