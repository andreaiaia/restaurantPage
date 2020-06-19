const firstTab = () => {
  const container = document.querySelector('.container');
  const tabs = document.querySelector('.tabs');

  const title = document.createElement('h3');
  title.textContent = 'Location';
  title.classList.add('tab');
  title.classList.add('tab2');

  const text = document.createElement('p');
  text.textContent = "Matera è città capoluogo di Provincia della Basilicata, una regione dell’Italia del Sud. Si trova al margine orientale in prossimità della regione Puglia e sorge sull’altipiano della Murgia che caratterizza il paesaggio di quest’area fino alle coste del Mar Adriatico. Matera è una città dalle origini molto antiche con una storia millenaria unica e affascinante. I principali luoghi di interesso sono i Sassi di Matera, il centro storico e il Parco delle Chiese Rupestri. Matera è conosciuta in tutto il mondo per i Sassi, gli antichi rioni della città dichiarati nel 1993 dall’UNESCO Patrimonio dell’Umanità. A questo si aggiunge il riconoscimento conseguito il 17 Ottobre 2014 con il quale Matera è stata designata Capitale Europea della Cultura per il 2019."
  text.classList.add('text');
  text.classList.add('tab2Text');

  tabs.appendChild(title);
  container.appendChild(text);
}

export default firstTab;