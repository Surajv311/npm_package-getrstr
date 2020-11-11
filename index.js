module.exports = function random(length) {
  var res = "";
  var randomchars =
    "Dde+[{<>,fghEcijk)-lm56UVW]};:'uv34FGHNO?/|P2KLMYZa*=bQRXn07#$%89opqrstSTABC(_1IJwx~`!@^&.yz";
  var lengthOfChar = randomchars.length;
  for (var i = 1; i <= length; i++) {
    res += randomchars.charAt(Math.ceil(Math.random() * lengthOfChar));
  }
  return res;
};

// console.log(random(10));
