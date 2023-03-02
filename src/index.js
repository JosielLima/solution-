import './styles.scss';

// Import fonts when you use customs
// import './fonts/BebasNeueRegular-gxj83.ttf';

document.addEventListener('DOMContentLoaded', initPage);

function initPage() {}

const openModalButton = document.getElementById("open-modal");
const modalWindowOverlay = document.getElementById("modal");
const closeModalButton = document.getElementById("close-modal");

const showModalWindow = () => {
  modalWindowOverlay.style.display = 'block';
}

openModalButton.addEventListener("click", showModalWindow);

const hideModalWindow = () => {
  modalWindowOverlay.style.display = 'none';
}

closeModalButton.addEventListener("click", hideModalWindow);
