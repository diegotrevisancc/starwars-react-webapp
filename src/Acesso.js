let contador = 1;
if (localStorage.getItem("acessos") >= 1) {
  contador = parseInt(localStorage.getItem("acessos")) + 1;
}
localStorage.setItem("acessos", contador);
