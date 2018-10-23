/* 
  Returns a color string in the form of "hsl(100, 50%, 50%)"
  For example, calling color(10, 100, 40);
  will return a string "hsl(10, 100%, 40%)"
*/
function hslColor(h, s, l) {  
  var hue = h;
  var saturation = s + "%";
  var luminance = l + "%";

  var color = "hsl(" + hue + "," + saturation + "," + luminance + ")";

  return color;
}
hslColor(20, 50, 50)
var color = hslColor(20, 50, 50)
hslColor (bordr70, -0, 70)
"hsl(70, 70%, 365)"
