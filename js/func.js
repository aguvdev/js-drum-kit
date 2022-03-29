function playSound(e) {
  const audio = document.querySelector(`audio[data-key=${e.key}]`),
        key = document.querySelector(`.key[data-key=${e.key}]`);

  if(!audio) return; //frena la funcion para que no corran todas a la vez.


  audio.currentTime = 0;
  audio.play();

  key.classList.add('playing');
}

const keys = document.querySelectorAll('.key');

function removeTransition(e) {
  if (e.propertyName !== 'transform') return; //lo salta si no es un transform.
  this.classList.remove('playing'); //esto va a hacer que la transition se termine cuando el transform cumpla su tiempo;
}

keys.forEach(key => key.addEventListener('transitionend',  removeTransition));
window.addEventListener('keydown', playSound);