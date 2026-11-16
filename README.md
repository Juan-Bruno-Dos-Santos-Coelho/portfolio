Portfólio Pessoal

Juan Bruno dos Santos Coelho

# Descrição do portfólio:
Site de apresentação com meu perfil, meus projetos do curso e formas de contato.

# Tecnologias utilizadas:
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="50"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" height="50"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="50"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="50"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" height="50"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" height="50"/>


# Link do site publicado:
https://juan-bruno-dos-santos-coelho.github.io/portfolio/

# Como o projeto funciona
O site tem as seções Perfil, Projetos e Contato, com menu fixo no topo. Os cards de projeto são criados pelo JavaScript a partir de uma lista (array de objetos). O layout responsivo usa Bootstrap.

# Recurso novo adicionado:
Filtro de projetos por categoria (Todos, Sites e python), com efeito hover nos cards.

# Como o recurso foi implementado
Cada projeto tem o campo `categoria`, que vira o atributo `data-categoria` no card. Ao clicar em um botão, o JavaScript lê o `data-filtro` dele e usa `classList.toggle("d-none")` para esconder os cards de outras categorias. O efeito hover usa `transition` e `transform` no CSS.
