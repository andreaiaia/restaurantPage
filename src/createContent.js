const setUpPage = () => {
  const content = document.getElementById('content');

  const logo = document.createElement("img");
  logo.src = "img/logo.png";
  logo.classList.add('logo');

  const headline = document.createElement("h1");
  headline.textContent = "Welcome to the realm of the taste";

  const text = document.createElement("p");
  text.textContent = "Behold! Our dishes are cooked with the loving hand of the best chefs, with the best ingredients, served to you by the best waiters Everything, for the best clients possible!";
  text.classList.add('baseline');
  
  const container = document.createElement('div');
  container.classList.add('container');
  const navigation = document.createElement('div');
  navigation.classList.add('tabs');

  content.appendChild(logo);
  content.appendChild(headline);
  content.appendChild(text);
  container.appendChild(navigation);
  content.appendChild(container);
}

export default setUpPage;