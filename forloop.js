var json = [{
   "id" : "Rama", 
   "task" : "zen portal task",
   "mail": "ramabe1079@gmail.com"
},
{
   "id" : "Kani", 
   "task" : "zen portal task",
   "mail": "kani2678@gmail.com"
}];
//for loop:
for(var i = 0; i < json.length; i++) {
   var obj = json[i];

   console.log(obj.id);
   console.log(obj.task);
   console.log(obj.mail);

}
//for Each.:
json.forEach(function(obj) { 
   console.log(obj.id); 
   
});

//for In:
for (var key in json) {
if (json.hasOwnProperty(key)) {
 console.log(json[key].mail);
 //console.log(json[key].msg);
}
}
//for Of
let text="";
for (let x of json[key].id) {
text += x; 
}
console.log(text);