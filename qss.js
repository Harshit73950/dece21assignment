var n = parseInt(prompt("Enter the number"));
function x(num , call1 , call2){
    call1(num);
    call2(num);
    return [call1(num) , call2(num)];
}
function allby9(i){
    return i+9;
}
function mulby4(i){
    return i*4;

}
var m = x(n , allby9, mulby4);
document.write( "ADD BY 9 & MULL BY 4"+ m);
