let images = [
    {
        src: './images/twitter.png',
        title: 'AOD New York @aod ',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus provident corporis repellat harum vero maiores autem, cumque necessitatibus soluta voluptas!',
        span: '/ 35 min'
    },
    {
        src: './images/facebook.png',
        title: 'Jason Statham @jason ',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus provident corporis repellat harum vero maiores autem, cumque necessitatibus.',
        span: '/ 3 hours'
    },
    {
        src: './images/instagram.png',
        title: 'Maksim Pokhiliy @makspooh ',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus provident corporis repellat harum vero maiores autem, cumque necessitatibus soluta voluptas! Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        span: '/ 1 day'
    }
];

let sliderImg = document.getElementById('slider__img');
let ellipsesBlock = document.getElementById('slider__ellipses');
let ellipses = document.getElementsByClassName('slider__ellipse');
let title = document.getElementById('slider__title');
let text = document.getElementById('slider__text');
let span = document.createElement('span');

ellipsesBlock.addEventListener('click', (event) => {
    for (let i = 0; i < ellipses.length; i++) {
        ellipses[i].setAttribute('src', './images/ellipse-white.png')
    }

    event.target.setAttribute('src', './images/ellipse-black.png')

    let index = event.target.getAttribute('id');

    if (index == 0 || index == 1 || index == 2) {
        sliderImg.src = images[index].src;
        title.textContent = images[index].title;
        text.textContent = images[index].text;
        span.textContent = images[index].span;
        title.appendChild(span);
    } else {
        return;
    }
})