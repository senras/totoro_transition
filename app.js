const loader = document.querySelector('.loader');
const page1 = document.querySelector('.page1');
const page2 = document.querySelector('.page2');
const pageBtns = document.querySelectorAll('.page-btn');

pageBtns.forEach((btn) => {
  btn.addEventListener('click', appearPage);
});

function appearPage() {
  loader.style.left = '0';
  setTimeout(() => {
    loader.style.left = '-100%';
    if (page1.style.display != 'none') {
      page1.style.display = 'none';
      page2.style.display = 'block';
    } else {
      page1.style.display = 'block';
      page2.style.display = 'none';
    }
  }, 1500);
}
