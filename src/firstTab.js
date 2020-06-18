const firstTab = () => {
  const container = document.querySelector('.container');

  const tab = document.createElement('div');
  tab.style.margin = 'auto';

  const title = document.createElement('h3');
  title.textContent = 'tab 1';
  const text = document.createElement('p');
  text.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, veritatis porro in saepe quasi nobis animi molestiae deleniti sit rerum facere nihil doloremque adipisci ipsum reprehenderit ut laboriosam quod ducimus.'
  
  tab.appendChild(title);
  tab.appendChild(text);
  
  container.appendChild(tab);
}

export default firstTab;