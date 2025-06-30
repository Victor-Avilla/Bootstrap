
# 🔐 Página de Login com Bootstrap | Bootstrap Login Page

Este projeto é uma página de login responsiva criada com Bootstrap, com personalização de tema (claro/escuro) persistente via LocalStorage.  
This project is a responsive login page built with Bootstrap, featuring light/dark theme customization persisted via LocalStorage.

O objetivo é demonstrar o uso de componentes, utilitários e customizações básicas do Bootstrap, além de recursos modernos de front-end para experiência do usuário.  
The goal is to demonstrate Bootstrap's components, utilities, and basic customizations, along with modern front-end features for user experience.

🔗 **Vizualize o projeto online (Vercel):**  
🔗 **View the project online (Vercel):**  
https://pagina-de-login-com-bootst-git-f2d861-victors-projects-86a43880.vercel.app

---

## 💡 Funcionalidades | Features

- Layout moderno e responsivo usando Bootstrap  
  Modern and responsive layout using Bootstrap  
- Formulário de login com campos de e-mail, senha e opção "Remember me"  
  Login form with email, password, and "Remember me" checkbox  
- Troca de tema (claro/escuro) com botão fixo no topo direito  
  Theme toggle (light/dark) via fixed button on top right  
- Tema salvo no navegador e mantido após recarregar a página  
  Selected theme is saved and persisted after reload

---

## ⚙️ Como funciona | How it Works

- Bootstrap carregado via CDN  
  Bootstrap loaded via CDN  
- Tema padrão: escuro (`data-bs-theme="dark"`)  
  Default theme: dark (`data-bs-theme="dark"`)  
- Botão chama função `toggle()` que alterna tema e salva no LocalStorage  
  Toggle button runs a function that switches theme and saves it in LocalStorage  
- No carregamento, o tema salvo é aplicado automaticamente  
  On load, the saved theme is automatically applied

---

## 📌 Observações | Notes

Este projeto é apenas front-end, **sem back-end**.  
This project is front-end only, **no back-end integration**.
