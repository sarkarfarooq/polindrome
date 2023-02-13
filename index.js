let showResult = document.querySelector("#div1");

function polindromCheck() {
  let word = document.getElementById("txt").value;
  let getNumber = word.toString().split("").reverse().join("");
  let getWord = word.split("").reverse().join("").toLowerCase();

  if (!isNaN(word)) {
    if (getNumber === word.toString()) {
      showResult.innerHTML = "It is palindrome";
    } else {
      showResult.innerHTML = "It is not palindrome";
    }
  } else {
    if (getWord === word.toLowerCase()) {
      showResult.innerHTML = "It is palindrome";
    } else {
      showResult.innerHTML = "It is not palindrome";
    }
  }
}
