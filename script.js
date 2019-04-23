'use strict'

let str = "урок-3-был слишком легким",
    strSlice = "легким";

// 1)
str = str[0].toUpperCase() + str.slice(1);

// 2)
while ( ~str.indexOf("-") ) {
    str = str.slice( 0, str.indexOf("-") ) + " " + str.slice( str.indexOf("-") + 1 );
}
console.log(str);

// 3)
str = str.slice( 0, str.indexOf(strSlice) ) + str.slice( str.indexOf(strSlice) + strSlice.length );
strSlice = strSlice.slice(0, -2) + "о";
alert(strSlice);

// 4)
let arr = [20, 33, 1, "Человек", 2, 3],
    total = 0;

for (let i = 0; i < arr.length; i++) {
    if ( typeof(arr[i]) === 'number' ) {
        total = total + Math.pow(arr[i], 3);
    }
}
console.log(Math.sqrt(total));

// 5)
function beautifyString (string) {
    if ( typeof(string) !== 'string' ) {
        alert("Была введена не строка");
    } else {
        
        string = string.trim();

        if (string.length > 50) {
            string = string.slice(0, 51) + "...";
        }
        alert(string);
    }
}
beautifyString("   Пр ивhgf ет   вап   ");