import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import iconClose from '../img/bi_x-octagon.png';
import iconOk from '../img/bi_check2-circle.svg';

const form = document.querySelector('.form');
const delay = Number(document.querySelector('[name="delay"]').value);
const state = form.state.value;
const submitBtn = document.querySelector('[type="submit"]');

form.addEventListener('submit', createPromise);

function createPromise(state, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(
          iziToast.show({
            message: `Fulfilled promise in ${delay}ms`,
            messageColor: '#FFF',
            backgroundColor: '#59A10D;',
            position: 'topRight',
            iconUrl: iconOk,
          })
        );
      } else {
        reject(
          iziToast.show({
            message: `Rejected promise in ${delay}ms`,
            messageColor: '#FFF',
            backgroundColor: '#EF4040;',
            position: 'topRight',
            iconUrl: iconClose,
          })
        );
      }
    }, delay);
  });
  return promise;
}
