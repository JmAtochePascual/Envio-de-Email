const spinnerElement = document.querySelector('#spinner');

export const showSpinner = () =>
  new Promise((resolve) => {
    spinnerElement.classList.remove('hidden');

    setTimeout(() => {
      spinnerElement.classList.add('hidden');
      resolve();
    }, 3000);
  });
