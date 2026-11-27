const email = "keza.divine@sos.rw";
console.log(email.includes("@"));    //true    
console.log(email.indexOf("@"));     //11    
console.log(email.startsWith("keza"));  //true
console.log(email.endsWith(".rw"));     //true 
console.log(email.slice(0, email.indexOf("@"))); //keza.divine
//Searching in a string
