const setUpPage = () => {
  const content = document.getElementById('content');

  const logo = document.createElement("img");
  headline.src = "../img/logo.png";
  const headline = document.createElement("h1");
  headline.textContent = "Welcome to the realm of the taste";
  const text = document.createElement("p");
  text.textContent = "Behold! Our dishes are cooked with the loving hand of the best chefs, with the best ingredients, served to you by the best waiters Everything, for the best clients possible!";

  content.appendChild(logo);
  content.appendChild(headline);
  content.appendChild(text);
}

export default setUpPage;