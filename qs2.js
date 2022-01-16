var n = 5;
var string = "";
for (var i = 1; i <= n; i++) {
  for (var j = 0; j < i; j++) {
    string += "*";
  }
  for (var k = 0; k < n - i; k++) {
    string += " ";
  }
  string += "<br/>";
}
document.write( string);
