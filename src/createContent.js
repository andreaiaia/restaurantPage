const setUpPage = () => {
  const content = document.getElementById('content');

  const logo = document.createElement("img");
  logo.src = "../img/logo.png";
  logo.style.marginLeft = '42%';
  logo.style.width = '250px';
  

  const headline = document.createElement("h1");
  headline.textContent = "Welcome to the realm of the taste";
  headline.style.textAlign = 'center';

  const text = document.createElement("p");
  text.textContent = "Behold! Our dishes are cooked with the loving hand of the best chefs, with the best ingredients, served to you by the best waiters Everything, for the best clients possible!";
  text.style.textAlign = 'center';

  const container = document.createElement('div');
  container.classList.add('container');
  container.style.margin = 'auto';

  content.appendChild(logo);
  content.appendChild(headline);
  content.appendChild(text);
  content.appendChild(container);
}

export default setUpPage;