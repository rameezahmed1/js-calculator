function insert(num){
    document.form.textview.value = document.form.textview.value+num;
}

function cleanIt(num){
    document.form.textview.value = "";
}
function equal(){
    document.form.textview.value = eval(document.form.textview.value)
}
function backUp(){
    var exp = ocument.form.textview.value;
    ocument.form.textview.value = exp.toString(0,exp.length-1) 
}