//3
const printResult = (result) => {
  const p = document.querySelector(".result-text")
  p.innerText = result
}
//2
const convert = (inputValue) => {

  let actualMight = 0
  let result = 0
  for ( let i = 0; i < inputValue.length; i++) {
    let number = parseInt(inputValue[i])
    if (number === 1) {
      result += 2 ** actualMight
    }
    actualMight++
  }
  printResult(result)
}

//1
const check = () => {
  let inputValue = document.querySelector(".input-area").value

  if ( inputValue.length > 8) {
    alert("Liczba jest za długa")
    return
  }

  function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
      newString += str[i];
    }
    return newString;
  }
  inputValue = reverseString(inputValue)

  let isCorrect = true
  for ( let i = 0; i < inputValue.length; i++ ) {
    if (inputValue[i]  !== "1") {
      if (inputValue[i] !== "0") {
        isCorrect = false
        alert("Wprowadzono nieprawidłową liczbę")
      }
    }
  }

  if (isCorrect) {
    convert(inputValue)
  }
}
document.querySelector(".button-area").addEventListener("click", check)