const postsContainer = document.getElementById("posts-container");
const loading = document.querySelector(".loader");
const filter = document.getElementById("filter");

// SET INITIAL VALUES
const limit = 5;
let page = 1;

// FETCH POSTS FROM API
async function getPosts() {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
  );
  const data = await res.json();
  console.log(data);
  return data;
}

// SHOW FETCH POSTS IN THE DOM
async function showPosts() {
  const posts = await getPosts();

  posts.forEach((post) => {
    const postEl = document.createElement("div");
    postEl.classList.add("post");
    postEl.innerHTML = `
         <div class="number">${post.id}</div>
        <div class="post-info">
          <h2 class="post-title">${[post.title]}</h2>
          <p class="post-body">
            ${post.body}
          </p>
        </div>
        `;

    console.log(postEl);

    postsContainer.appendChild(postEl);
  });
}

// FILTER POSTS
function filterPost(e) {
  const term = e.target.value.toUpperCase();
  const posts = document.querySelectorAll(".post");

  console.log(term);
  console.log(posts);

  posts.forEach((post) => {
    const title = post.querySelector(".post-title").innerText.toUpperCase();
    const body = post.querySelector(".post-body").innerText.toUpperCase();

    if (title.indexOf(term) > -1 || body.indexOf(term) > -1) {
      post.style.display = "flex";
    } else {
      post.style.display = "none";
    }
  });
}

function showLoading() {
  loading.classList.add("show");

  setTimeout(() => {
    loading.classList.remove("show");
    setTimeout(() => {
      page++;
      showPosts();
    }, 300);
  }, 1000);
}

// setting up scroll functionality
window.addEventListener("scroll", (e) => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (scrollHeight - scrollTop === clientHeight) {
    showLoading();
  }
});

getPosts().then((posts) => console.log(posts));
showPosts();
filter.addEventListener("input", filterPost);
