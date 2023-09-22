// Variable para almacenar los datos de los blogs
let blogData;

// Realizar la petición a la API
fetch('http://localhost:3000/') // Asegúrate de que esta URL sea correcta y apunte a tu API
  .then(response => response.json())
  .then(data => {
    blogData = data; // Almacena los datos en la variable
    console.log(blogData);

    // Generar el contenido del carrusel para cada blog
    const carrucelContent = document.getElementsByClassName("contenedor")[0];
    blogData.forEach(blog => {
      const divContainer = document.createElement("div");
      divContainer.id = blog._id; // Utiliza _id en lugar de id
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

      divContainer.addEventListener("click", () => {
        // Llamar a la función para manejar el clic y hacer el desplazamiento
        handleElementClick(blog._id);
    
        // Realizar el desplazamiento hacia arriba
        window.scrollTo({
          top: 0,
          behavior: "smooth" // Esto hará que el desplazamiento sea suave
        });
      });
      

      // Agregar el manejador de eventos para el clic
      divContainer.addEventListener("click", () => handleElementClick(blog._id)); // Utiliza _id en lugar de id
    });

    // Seleccionar y mostrar por defecto el primer blog
    if (blogData.length > 0) {
      handleElementClick(blogData[0]._id); // Utiliza _id en lugar de id
    }
  })
  .catch(error => console.error('Error:', error));

// Función para formatear la fecha
function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

// Función para manejar el clic en el elemento
function handleElementClick(id) {
  // Buscar el blog correspondiente al ID
  const selectedBlog = blogData.find(blog => blog._id === id); // Utiliza _id en lugar de id

  const blogSubtitle = document.querySelector(".blog-subtitle");
  const text = document.querySelector(".text");
  const spanAutor = document.querySelector(".span-autor");
  const img = document.querySelector(".img-services");
  img.src = selectedBlog.img;
  blogSubtitle.textContent = selectedBlog.title;
  text.textContent = selectedBlog.description;

  // Formatear la fecha de creación
  const formattedDate = formatDate(selectedBlog.createdAt);

  // Actualizar el nombre del autor y mostrar la fecha formateada
  spanAutor.innerHTML = `
    ${selectedBlog.author}
    <img
      src="https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg"
      alt=""
    /> <br><br>
    <span>${formattedDate}</span>
  `;

  // Mostrar la información del blog
  console.log("Información del blog:", selectedBlog);
  // Aquí puedes mostrar la información en el lugar que necesites en tu página
}


