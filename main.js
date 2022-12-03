function openNav() {
  document.getElementById('myNav').style.display = 'block';
}

function closeNav() {
  document.getElementById('myNav').style.display = 'none';
}

document.querySelector('#open-nav').addEventListener('click', openNav);
document.querySelector('#close-nav').addEventListener('click', closeNav);
document.querySelectorAll('.mobile-link').forEach((link) => {
  link.addEventListener('click', () => {
    document.getElementById('myNav').style.display = 'none';
  });
});

const guestSpeakers = document.querySelector('.guest-speakers');

const speakerList = [
  {
    name: 'Beyonce',
    description:
      'Beyoncé Giselle Knowles-Carter is an American singer, songwriter, and actress.',
    Image: './images/beyonce2.jpeg',
    nickName: ['Queen Bey the queen of pop'],
  },
  {
    name: 'Andre Romelle Young',
    description:
      'Andre Romelle Young, known professionally as Dr. Dre, is an American rapper and record producer.',
    Image: './images/dr-dre1.jpeg',
    nickName: ['Dr Dre'],
  },
  {
    name: 'Céline Marie Claudette Dion',
    description:
      'Céline Marie Claudette Dion CC OQ is a Canadian singer. Noted for her powerful and technically skilled vocals,.',
    Image: './images/celideon1.jpeg',
    nickName: ['Celine Dion'],
  },
  {
    name: 'Plácido Domingo',
    description:
      'José Plácido Domingo Embil is a Spanish opera singer, conductor, and arts administrator.',
    Image: './images/domingo1.jpeg',
    nickName: ['Domingo'],
  },
  {
    name: 'Harry Edward Styles',
    description:
      'Harry Edward Styles is an English singer, songwriter, and actor.',
    Image: './images/harry2.jpeg',
    nickName: ['Harry Styles'],
  },
];

guestSpeakers.innerHTML = '';
for (let x = 0; x < speakerList.length; x += 1) {
  guestSpeakers.innerHTML += `
    <div class='speakers'>
    <div class='speakers_image'>
    <img src='${speakerList[x].Image}' alt='speaker 1' class='image1'/>
    </div>
    <div class='speakerDescription'><h3>${speakerList[x].name}</h3>
    <div class='short_desc'><h4>${speakerList[x].nickName}</h4>
    <span></span>
    </div>
    <div class='long_desc'>
    <p>${speakerList[x].description}</p>
    </div>
    </div>
  `;
}