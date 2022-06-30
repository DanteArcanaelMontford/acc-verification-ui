const codes = document.querySelectorAll('.code')

codes[0].focus()

codes.forEach((code, idx) => {
  code.addEventListener('keydown', (e) => {
    if (e.key >= 0 && e.key <= 9) {
      codes[idx].value = ''
      if (idx === codes.length - 1) return
      setTimeout(() => codes[idx + 1].focus(), 10)


    } else if (e.key === 'Backspace') {
      if (idx === 0) return
      setTimeout(() => codes[idx - 1].focus(), 10)

    }
  })
})

const typeWriter = (textElem) => {
  let arrayText = textElem.innerHTML.split('');
  textElem.innerText = '';
  arrayText.forEach((letter, i) => {
    setTimeout(() => {
      textElem.innerHTML += letter;
    }, 75 * i)
  })

}

const info = document.querySelector('.info');

typeWriter(info)