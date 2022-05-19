const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n
  .addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  }));

const speakers = [{
  photo: './img/speaker_01.png',
  name: 'Carlos Garcia',
  profession: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
  description: 'Suscipit aliqua and enim corporis dolore nulla. Numquam odit tempor. Tempor sequi. Ea iste eius quis so dolor.',
}, {
  photo: './img/speaker_02.png',
  name: 'Denis Ramos',
  profession: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
  description: 'Commodi non, yet magni for elit aspernatur yet deserunt nequeporro. Ipsam aut dolores si fugit for quo. Nisi.',

}, {
  photo: './img/speaker_03.png',
  name: 'Jhon Castillo',
  profession: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
  description: 'Labore modi sint or id yet numquam. Dolore eiusmod aliqua. Odit commodi so natus nihil and eos quo yet dolore.',
}, {
  photo: './img/speaker_04.png',
  name: 'Gabriela De la Cruz',
  profession: 'Aute fugit and nisi but fugit and laboris natus',
  description: 'Elit beatae voluptatem and totam. Irure labore corporis but et pariatur but perspiciatis. Commodi rem doloremque so error quae yet autem for dolores.',
}, {
  photo: './img/speaker_05.png',
  name: 'Milagros Romero',
  profession: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
  description: 'Nesciunt incidunt, aute so iure. Quia veritatis yet sit dolore beatae but voluptatem minima. Aspernatur. Lorem amet.',
}, {
  photo: './img/speaker_06.png',
  name: 'Maria Zambrana',
  profession: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
  description: 'Ad magnam for sunt so esse numquam and cupidatat but sit. Lorem amet. Adipisicing ratione and do so veritatis quo adipisci excepteur. Dolorem consequat.',
}];

const loadSpeakers = () => {
  let showSpeakers = '';
  const large = speakers.length;

  for (let i = 0; i < large; i += 1) {
    showSpeakers += `<article class="speaker">
   <img src="${speakers[i].photo}" alt="speaker_01">
   <div class="curriculum">
   <h3>${speakers[i].name}</h3>
   <h4>${speakers[i].profession}</h4>
   <div class="grey-line"></div>
   <p>${speakers[i].description}</p>
   </div>
   </article>`;
    document.getElementById('speaker').innerHTML = showSpeakers;
  }
};

loadSpeakers();
