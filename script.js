function mudarPagina(tipo) {
  const pagPrincipal = document.getElementById('paginaPrincipal');
  const pagLivro = document.getElementById('paginaLivro');
  const btnPrincipal = document.getElementById('btnPrincipal');
  const btnLivro = document.getElementById('btnLivro');

  if (tipo === 'principal') {
    pagPrincipal.classList.add('active');
    pagLivro.classList.remove('active');
    btnPrincipal.classList.add('active');
    btnLivro.classList.remove('active');
  } else if (tipo === 'livro') {
    pagLivro.classList.add('active');
    pagPrincipal.classList.remove('active');
    btnLivro.classList.add('active');
    btnPrincipal.classList.remove('active');
  }
}