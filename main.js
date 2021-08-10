var student_array=[];
function submit(){
var display_array=[];
for (var j=1; j<=4; j++){
var student_name=document.getElementById("name_of_the_student_"+j).value;
console.log(student_name);
student_array.push(student_name);
}
console.log(student_array);
var length_array=student_array.length;
for (var k=0; k<length_array; k++){
display_array.push("<h4>NAME- "+student_array[k]+"</h4>");
console.log(display_array);
}
console.log(display_array);
document.getElementById("display_name_with_commas").innerHTML=display_array;

var remove_commas=display_array.join(" ");
console.log(remove_commas);
document.getElementById("display_name_without_commas").innerHTML=remove_commas;

document.getElementById("submit_button").style.display = "none";
document.getElementById("sort_button").style.display = "inline-block";
}

function sorting(){
student_array.sort();
console.log(student_array);
var display_sort_array=[];
var length_array=student_array.length;
for (var k=0; k<length_array; k++){
display_sort_array.push("<h4>NAME- "+student_array[k]+"</h4>");
console.log(display_sort_array);
}
console.log(display_sort_array);
document.getElementById("display_name_with_commas").innerHTML=display_sort_array;

var remove_commas=display_sort_array.join(" ");
console.log(remove_commas);
document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}

