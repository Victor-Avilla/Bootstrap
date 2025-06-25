## Pagina de Login com Bootstrap 

Este projeto é uma página de login responsiva criada com Bootstrap, com personalização de tema (claro/escuro) persistente via LocalStorage. O objetivo é demonstrar o uso de componentes, utilitários e customizações básicas do Bootstrap, além de recursos modernos de front-end para experiência do usuário.

**Vizualize o projeto online atraves do link (deploy feito através do Vercel): https://pagina-de-login-com-bootst-git-f2d861-victors-projects-86a43880.vercel.app**

## Demonstração de Responsividade

<img src=https://github.com/user-attachments/assets/31e64be8-2478-423b-a9e4-0d12ccbcefeb width=1000> <img src=https://github.com/user-attachments/assets/b887e25a-63b1-400c-856e-dc3ce21bca32
 width=230>


## Funcionalidades

- Layout moderno e responsivo usando Bootstrap.
- Formulário de login com campos de e-mail, senha e opção "Remember me".
- Troca de tema (claro/escuro) por botão fixo no topo direito.
- O tema escolhido é salvo no navegador e permanece após recarregar ou fechar a página.

## Como funciona

- O Bootstrap é carregado via CDN.
- O tema padrão é escuro (`data-bs-theme="dark"`).
- Ao clicar no botão de troca de tema, a função `toggle()` alterna entre claro e escuro e salva a escolha no LocalStorage.
- No carregamento da página, verifica-se se já existe um tema salvo e aplica automaticamente.

## Observações

- O projeto é apenas front-end, não há integração com back-end.
