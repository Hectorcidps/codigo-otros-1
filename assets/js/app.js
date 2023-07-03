// Hector Cid Del Prado Soto. Calificacion 4

const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const userName = document.querySelector('name'); // corregi el nombre de la constante para hacerla mas entendible
const blog = document.querySelector('#blog'); // corregi el nombre de la constante para hacerla mas entendible
const location = document.querySelector('.location'); // corregi el nombre de la constante para hacerla mas entendible

function displayUser(username) {
  userName.textContent = 'cargando...';
  const response = fetch(`${usersEndpoint}/${username}`); // se elimino el await debido a que no es una funcion async
  console.log(data);
  userName.textContent = '${data.name}';
  blog.textContent = '${data.blog}';
  location.textContent = '${data.location}';
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);