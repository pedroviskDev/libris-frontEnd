function toggleDescricao() {
    const descricao = document.getElementById('card__livro__sinopse__texto');
    const btn = document.getElementById('btnDescricao');
  
    descricao.classList.toggle('expandida');
  
    if (descricao.classList.contains('expandida')) {
      btn.textContent = 'Menos detalhes...';
    } else {
      btn.textContent = 'Mais detalhes...';
    }
  }
  