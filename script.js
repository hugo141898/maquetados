const resultadosElement = document.getElementById('resultados');

// Petición Fetch a la API de Mercado Libre
fetch('https://api.mercadolibre.com/sites/MLA/search?q=ordenadores')
  .then(response => response.json())
  .then(data => {
    // Recorrer los resultados y mostrarlos en una lista
    data.results.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item.title;
      resultadosElement.appendChild(li);
    });
  })
  .catch(error => console.error(error));

// Petición Fetch a la API de PokéAPI
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(response => response.json())
  .then(data => {
    const li = document.createElement('li');
    li.textContent = `Nombre: ${data.name}, Tipo: ${data.types[0].type.name}`;
    resultadosElement.appendChild(li);
  })
  .catch(error => console.error(error));
