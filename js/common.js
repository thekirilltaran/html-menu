// 'aaassdddsaa'  -> '3a2s3d1s2a'
// mironenko@urancompany.com

// function dupl(string) {
// 	let arr = []
// 	let result = []
// 	for (let i = 0; i < string.length; i++) {
// 		if(string[i] === string[i + 1]) {
// 			arr.push(string[i])
// 		} else {
// 			result.push(arr.length + 1 + string[i]);
// 			arr = []
// 		}

// 	}
// 	return result.join('');
// } 

// dupl('aaassdddsaa')


// function getMiddle(s)
// {
//    console.log(Math.floor(s.length / 2))
//   //Code goes here!
//   if(s.length % 2 == 0) {
//     return s[s.length / 2 - 1] + s[s.length / 2]
//   } else {
//      return s[s.length / 2]
//   }
// }
// getMiddle("testing")


// function validatePIN (pin) {
// 	console.log(/^[0-9]+$/.test(pin));
// }


// console.log(validatePIN("1a234"))



// function removeExclamationMarks(s) {
//   return s.replace("!", "")
// }

// console.log(removeExclamationMarks("Hello World!!"))

// var number = function(busStops){
//   // Good Luck!
//   console.log(busStops)
//   let humans = busStops.reduce((prev, cur) => {
//     console.log(prev)
//     console.log(cur)
//     // return 
//   }, 0)
//   console.log(humans)
// }


// number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]])


function encrypt(text, n) {
    if (!text || n <= 0) return text; 
  
    for(let i = 0; n > i; i++) {
      let str = "";	
       
      for(let i = 1; text.length > i; i += 2) {
        str += text[i];
      }
      
      for(let i = 0; text.length > i; i += 2) {
         str += text[i];
      }
      text = str;
    }

    return text;
}

function toAlternatingCase(s) {
	let arr = s.split('')
	console.log(arr)
  	let result = arr.map(item => {
		    console.log(item)
		    if(item.toUpperCase() == item) {
		      return item.toLowerCase()
		    } else {
		       return item.toUpperCase()
		    }
		 }).join('')

  	return result;
}


console.log(toAlternatingCase("HeLLo WoRLD"))