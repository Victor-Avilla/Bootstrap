const htmlElement = document.getElementById('htmlElement')

const savedTheme = localStorage.getItem('theme')
if (savedTheme) {
  htmlElement.setAttribute('data-bs-theme', savedTheme)
}

const toggle = () => {
  const newTheme = htmlElement.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark'
  htmlElement.setAttribute('data-bs-theme', newTheme)
  localStorage.setItem('theme', newTheme)
}