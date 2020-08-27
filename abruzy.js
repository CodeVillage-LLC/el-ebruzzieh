const navEl = document.querySelector('.navbar')
let lastScrollPosition = window.pageYOffset

function effect1 () {
  const scrollHeight = window.pageYOffset

  document.getElementById('debug').textContent = `
    scrollHeight: ${scrollHeight}, before: ${lastScrollPosition}
  `

  if (scrollHeight >= 1200) {
    navEl.style.top = 0
  } else if (scrollHeight > 150) {
    navEl.style.top = '-4rem'
  } else {
    navEl.style.top = 0
  }
}

function effect2 () {
  const scrollHeight = window.pageYOffset

  document.getElementById('debug').textContent = `
    scrollHeight: ${scrollHeight}, before: ${lastScrollPosition}
  `

  const difference = scrollHeight - lastScrollPosition
  lastScrollPosition = scrollHeight

  if (Math.abs(difference) < 5) return

  if (scrollHeight <= 150 || difference < 0) {
    navEl.style.top = 0
    navEl.classList.add('shadow-xs')
  } else {
    navEl.style.top = '-4rem'
    navEl.classList.remove('shadow-xs')
  }  
}

window.addEventListener('scroll', () => effect2())