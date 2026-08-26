let first= "vaishali";
let second= "patel" ;
let fullname =`${first} ${second}`;
document.getElementById("name").innerHTML= fullname;

let a="mango";
document.getElementById("head").innerHTML= a;
document.getElementById("len").innerHTML= a.length;

let name = ["ram"," shyam"," darsh" ," kashvi"];
document.getElementById("arrname").innerHTML= name;
document.getElementById("arrlength").innerHTML= name.length;

let arr = ["ram"," shyam"," darsh"," kashvi"," ashvi"];
let len= arr.length;
for(let a= 0; a<len; a++){
document.getElementById("for").innerHTML= arr;
}
 
for(let a= 0; a<arr.length; a++){
    document.getElementById("for").innerHTML= arr;
    document.getElementById("length").innerHTML= arr.length;
}

let ram = [`ram`,'shyam',`'darsh'` ,`"kashvi"`];
document.getElementById("ram").innerHTML= ram;


