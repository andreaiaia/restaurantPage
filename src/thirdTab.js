const firstTab = () => {
  const container = document.querySelector('.container');
  const tabs = document.querySelector('.tabs');

  const title = document.createElement('h3');
  title.textContent = 'Reservation';
  title.classList.add('tab');
  title.classList.add('tab3');

  const text = document.createElement('p');
  text.textContent = 'Per prenotare chiamare il numero 555-555555'
  text.classList.add('text');
  text.classList.add('tab3Text');

  tabs.appendChild(title);
  container.appendChild(text);
}

export default firstTab;