import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

document.querySelector('.form').addEventListener('submit', function(event) {
  event.preventDefault();

  const delay = parseInt(document.querySelector('input[name="delay"]').value);
  const state = document.querySelector('input[name="state"]:checked').value;
  console.log(delay);
  console.log(state);

  const promise = new Promise((resolve, reject) => {
    if (state === 'fulfilled') {
      setTimeout(() => {
        resolve(delay);
      }, delay);
    } else {
      setTimeout(() => {
        reject(delay);
      }, delay);
    }
  });

  promise.then((delay) => {
    iziToast.success({
      title: 'Success',
      message: `✅ Fulfilled promise in ${delay}ms`,
      position: 'bottomCenter',
      
    });
  }).catch((delay) => {
    iziToast.error({
      title: 'Error',
      message: `❌ Rejected promise in ${delay}ms`,
      position: 'bottomCenter',
    });
   
  });
});