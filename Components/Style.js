const menuLinks = document.querySelectorAll('.menu-link');

menuLinks.forEach((menuLink) => {
  const imagenTarea = menuLink.querySelector('.tarea');
  const text = menuLink.querySelector('li');
  menuLink.addEventListener('mouseenter', () => {
    imagenTarea.style.visibility = 'visible';
    text.style.color = '#4063FF';
  });

  menuLink.addEventListener('mouseleave', () => {
    imagenTarea.style.visibility = 'hidden';
    text.style.color = 'black';
  });
});


const divLinks = document.querySelectorAll('.div-link');
console.log(divLinks)

divLinks.forEach((divLinks) => {
  const imagenTarea = divLinks.querySelector('.img');
  const text = divLinks.querySelector('li');
  divLinks.addEventListener('mouseenter', () => {
    imagenTarea.style.visibility = 'visible';
    text.style.color = '#4063FF';
  });

  divLinks.addEventListener('mouseleave', () => {
    imagenTarea.style.visibility = 'hidden';
    text.style.color = 'black';
  });
});


const burguer = document.querySelector(".hamburguerBar");
const menu = document.querySelector(".menu");

// Función para manejar el clic en el menú
menu.addEventListener('click', () => {
    burguer.style.display = "flex";
    if (menu) {
        console.log("hola mundo");
    }
});

// Función para manejar clics en cualquier parte del documento
document.addEventListener('click', (event) => {
    if (event.target !== menu) {
        burguer.style.display = "none";
    }
});

// Función para manejar el evento de cambio de tamaño de la ventana
function handleResize() {
    if (window.innerWidth >= 1000) {
        burguer.style.display = "none"; // Ocultar hamburguesa en pantallas anchas
    }
    // No ocultar la hamburguesa en pantallas estrechas si ya está visible
}

// Llama a handleResize inicialmente para configurar el estado inicial
handleResize();

// Llama a handleResize cuando la ventana cambie de tamaño
window.addEventListener('resize', handleResize);


// Llama a handleResize inicialmente para configurar el estado inicial
handleResize();

// Llama a handleResize cuando la ventana cambie de tamaño
window.addEventListener('resize', handleResize);
