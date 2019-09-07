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

const save = (title) => {
  const items = data.filter((item) => item.title == title);
  if (items.length) {
    let saved = localStorage.getItem('saved');
    saved = saved ? JSON.parse(saved) : [];
    const inSaved = saved.filter((item) => item.link == items[0].link);

    if (inSaved.length) {
      const combined = saved.filter((item) => item.link !== items[0].link);
      localStorage.setItem('saved', JSON.stringify(combined));
    }
    else {
      const combined = [...saved, items[0]];
      localStorage.setItem('saved', JSON.stringify(combined));
    }
  }
}

const onLoad = () => {
  const loading = document.querySelector('.loading');
  loading.style.opacity = 0;
}

const onLoadStart = () => {
  const loading = document.querySelector('.loading');
  loading.style.opacity = 1;
}

(() => {
  const index = localStorage.getItem('index');
  const item = data[index];

  document.title = item.title;

  const title = document.querySelector('.title');
  //title.innerHTML = item.title;
  title.innerHTML = `HN Reader (${JSON.parse(index) + 1}/${data.length})`

  const iframe = document.querySelector('.iframe');
  console.log(iframe)
  iframe.src = item.link;
})()