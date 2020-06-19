import setUpPage from './createContent';
import firstTab from './firstTab';
import secondTab from './secondTab';
import thirdTab from './thirdTab';

(function initPage() {
  setUpPage();
  firstTab();
  secondTab();
  thirdTab();
  const tab1 = document.querySelector('.tab1');
  tab1.classList.add('active');
  const text2 = document.querySelector('.tab2Text');
  text2.classList.add('inactive');
  const text3 = document.querySelector('.tab3Text');
  text3.classList.add('inactive');
})();

function switchTab(e) {
  if (e.target.classList[1] === 'tab1') {
    tabs.forEach(tab => tab.classList.remove('active'));
    texts.forEach(text => text.classList.remove('inactive'));
    tabs[0].classList.add('active');
    texts[1].classList.add('inactive');
    texts[2].classList.add('inactive');
  } else if (e.target.classList[1] === 'tab2') {
    tabs.forEach(tab => tab.classList.remove('active'));
    texts.forEach(text => text.classList.remove('inactive'));
    tabs[1].classList.add('active');
    texts[0].classList.add('inactive');
    texts[2].classList.add('inactive');
  } else if (e.target.classList[1] === 'tab3') {
    tabs.forEach(tab => tab.classList.remove('active'));
    texts.forEach(text => text.classList.remove('inactive'));
    tabs[2].classList.add('active');
    texts[0].classList.add('inactive');
    texts[1].classList.add('inactive');
  } else {
    console.log('houston, we have a problem');
  }
}

const texts = document.querySelectorAll('.text');
const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => addEventListener('click', switchTab));