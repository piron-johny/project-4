(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('backdrop--is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modalread-open]'),
    closeModalBtn: document.querySelector('[data-modalread-close]'),
    modal: document.querySelector('[data-modalread]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('backdrop--is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modallocaition-open]'),
    closeModalBtn: document.querySelector('[data-modallocaition-close]'),
    modal: document.querySelector('[data-modallocaition]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('backdrop--is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modalfranchise-open]'),
    closeModalBtn: document.querySelector('[data-modalfranchise-close]'),
    modal: document.querySelector('[data-modalfranchise]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('backdrop--is-hidden');
  }
})();