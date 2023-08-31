let carrucelContent = document.getElementsByClassName("carousel-container")[0];
let blogData; // Variable para almacenar los datos de los blogs

// Realizar la petición a la API
fetch('../blog.json')
  .then(response => response.json())
  .then(data => {
    blogData = data.Blog; // Almacena los datos en la variable
    
    // Generar el contenido del carrusel para cada blog
    blogData.forEach(blog => {
      const divContainer = document.createElement("div");
      divContainer.id = blog.id;
      divContainer.className = "div-container";

      const innerDiv = document.createElement("div");
      innerDiv.innerHTML = `
        <h1>${blog.title}</h1>
        <p>${blog.author}</p>
      `;

      const img = document.createElement("img");
      img.src = "../Image/imagenes-13.png";
      img.alt = blog.title;

      divContainer.appendChild(innerDiv);
      divContainer.appendChild(img);

      // Agregar el elemento al carrusel
      carrucelContent.appendChild(divContainer);

      // Agregar el manejador de eventos para el clic
      divContainer.addEventListener("click", () => handleElementClick(blog.id));
    });

    // Seleccionar y mostrar por defecto el primer blog
    if (blogData.length > 0) {
      handleElementClick(blogData[0].id);
    }
  })
  .catch(error => console.error('Error:', error));

// Función para manejar el clic en el elemento
function handleElementClick(id) {
    // Buscar el blog correspondiente al ID
    const selectedBlog = blogData.find(blog => blog.id === id);

    const blogSubtitle = document.querySelector(".blog-subtitle");
    const text = document.querySelector(".text");
    const spanAutor = document.querySelector(".span-autor");
    
    blogSubtitle.textContent = selectedBlog.title;
    text.textContent = selectedBlog.description;

    // Actualizar solo el nombre del autor y mantener la imagen por defecto
    spanAutor.innerHTML = `
      ${selectedBlog.author}
      <img
        src="https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg"
        alt=""
      />
    `;

    // Mostrar la información del blog
    console.log("Información del blog:", selectedBlog);
    // Aquí puedes mostrar la información en el lugar que necesites en tu página
}

