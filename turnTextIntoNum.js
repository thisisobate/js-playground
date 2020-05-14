//Turn Text into Numbers

var input = 'javascript is awesome';
var output = '';

for (let i = 0; i < input.length; i++) {
  output += input;
  if (input[i] == 'a') {
    output += input[i] = '4';
  } else if (input[i] == 'e') {
    output += 3;
  } else if (input[i] == 'i') {
    output[i] += 1;
  } else if (input[i] == 'o') {
    output[i] += 0;
  } else {
    output[i] += input[i];
  }
}
console.log(output);
