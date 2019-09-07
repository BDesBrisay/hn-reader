const next = (localStorage, location) => {
  const index = localStorage.getItem('index');
  localStorage.setItem('index', `${JSON.parse(index) + 1}`);
  location.reload();
}

const prev = (localStorage, location) => {
  const index = localStorage.getItem('index');
  if (index > 0) { 
    localStorage.setItem('index', `${JSON.parse(index) - 1}`);
    location.reload();
  }
}

(() => {
  const index = localStorage.getItem('index');
  const item = data[index];

  console.log(item);

  const title = document.querySelector('.title');
  title.innerHTML = item.article;

  const iframe = document.querySelector('.iframe');
  console.log(iframe)
  iframe.src = item.link;
})()