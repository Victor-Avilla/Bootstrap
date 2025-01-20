const htmlElement = document.getElementById('htmlElement')

const theme = htmlElement.getAttribute("data-bs-theme")

const toggle = () => htmlElement.setAttribute('data-bs-theme', htmlElement.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark')
