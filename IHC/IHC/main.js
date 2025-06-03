
document.querySelectorAll('.filtros input[type="checkbox"]').forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    const filtrosAtivos = Array.from(document.querySelectorAll('.filtros input[type="checkbox"]:checked')).map(cb => cb.value);
    document.querySelectorAll('.edital, .card').forEach(el => {
      const categoria = el.querySelector('.categoria')?.textContent?.toLowerCase() || el.querySelector('.tag')?.textContent?.toLowerCase();
      const visivel = filtrosAtivos.length === 0 || filtrosAtivos.some(f => categoria.includes(f));
      el.style.display = visivel ? 'block' : 'none';
    });
  });
});


const inputBusca = document.querySelector('.search-area input') || document.querySelector('.search-bar input');
const btnBusca = document.querySelector('.search-area button') || document.querySelector('.search-bar button');

if (inputBusca && btnBusca) {
  btnBusca.addEventListener('click', () => {
    const termo = inputBusca.value.toLowerCase();
    document.querySelectorAll('.edital, .card').forEach(el => {
      const texto = el.innerText.toLowerCase();
      el.style.display = texto.includes(termo) ? 'block' : 'none';
    });
  });
}
