// Inicio de sesión de promotor y cliente
document.getElementById('login-promotor').addEventListener('click', function () {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  // Validación para promotor
  if (username === 'promotor' && password === '1234') {
      document.body.style.backgroundColor = 'green';
      alert('Bienvenido empleado');
  } else {
      document.getElementById('error-message').innerText = 'Usuario o contraseña incorrectos para promotor';
  }
});

document.getElementById('login-cliente').addEventListener('click', function () {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Validación para cliente
  if (username === 'cliente' && password === '1234') {
      document.body.style.backgroundColor = 'red'; 
      alert('Bienvenido cliente');
  } else {
      document.getElementById('error-message').innerText = 'Usuario o contraseña incorrectos para cliente';
  }
});

// Funcionalidad de "Olvidé mi contraseña"
document.getElementById('forgot-password').addEventListener('click', function() {
  document.getElementById('login-form').classList.add('hidden');
  document.getElementById('email-container').classList.remove('hidden');
});

document.getElementById('send-code').addEventListener('click', function() {
  const email = document.getElementById('email-input').value;
  if (email) {
      alert('Correo enviado, ingresa el código de verificación');
      document.getElementById('email-container').classList.add('hidden');
      document.getElementById('code-container').classList.remove('hidden');
  } else {
      alert('Por favor, ingresa un correo válido.');
  }
});

document.getElementById('verify-code').addEventListener('click', function() {
  const code = document.getElementById('code-input').value;
  if (code === '123') {
      document.getElementById('code-container').classList.add('hidden');
      document.getElementById('reset-container').classList.remove('hidden');
  } else {
      alert('Código incorrecto, intenta nuevamente.');
  }
});

document.getElementById('save-password').addEventListener('click', function() {
  const newPassword1 = document.getElementById('new-password1').value;
  const newPassword2 = document.getElementById('new-password2').value;

  if (newPassword1 && newPassword1 === newPassword2) {
      alert('Contraseña guardada correctamente');
      document.getElementById('reset-container').classList.add('hidden');
      document.getElementById('login-form').classList.remove('hidden');
  } else {
      alert('Las contraseñas no coinciden o están vacías, intenta nuevamente.');
  }
});
