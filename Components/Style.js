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