const firstTab = () => {
  const container = document.querySelector('.container');
  const tabs = document.querySelector('.tabs');

  const title = document.createElement('h3');
  title.textContent = 'Menù';
  title.classList.add('tab');
  title.classList.add('tab1');

  const text = document.createElement('p');
  text.textContent = 'I prodotti tipici lucani e dell’area limitrofa pugliese sono tra i più apprezzati sulle tavole di tutto il mondo. Nadì offre una accurata selezione di prodotti da gustare e acquistare sia direttamente presso la Bottega sia online attraverso questo sito web. I prodotti tipici lucani e dell’area limitrofa pugliese sono tra i più apprezzati sulle tavole di tutto il mondo. Nadì offre una accurata selezione di prodotti da gustare e acquistare sia direttamente presso la Bottega sia online attraverso questo sito web. I prodotti tipici lucani e dell’area limitrofa pugliese sono tra i più apprezzati sulle tavole di tutto il mondo. Nadì offre una accurata selezione di prodotti da gustare e acquistare sia direttamente presso la Bottega sia online attraverso questo sito web.'
  text.classList.add('text');
  text.classList.add('tab1Text');

  tabs.appendChild(title);
  container.appendChild(text);
}

export default firstTab;