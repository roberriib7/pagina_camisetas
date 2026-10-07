document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.querySelector('.menuH');
    const navLinks = document.querySelector('nav ul');

    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

document.querySelectorAll('.producto img').forEach(img => {
    img.addEventListener('mouseenter', () => {
        img.classList.add('zoom');
    });

    img.addEventListener('mouseleave', () => {
        img.classList.remove('zoom');
    });
});

document.querySelectorAll('.oferta img').forEach(img => {
    img.addEventListener('mouseenter', () => {
        img.classList.add('zoom');
    });

    img.addEventListener('mouseleave', () => {
        img.classList.remove('zoom');
    });
});


document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('contacto').value;
    const password = document.getElementById('password').value;
    
    if (nombre.trim() === '') {
      alert('El nombre es obligatorio');
      return;
    }
    
    if (!email.includes('@')) {
      alert('Email inválido, necesita @');
      return;
    }
    
    if (password.length < 6) {
      alert('Contraseña mínimo 6 caracteres');
      return;
    }
    
    alert('¡Registro exitoso!');
    form.reset();
  });
});