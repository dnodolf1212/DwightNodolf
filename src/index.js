const api = "https://dev.to/api/articles?";
const wrapper = document.querySelector(".wrapper");
const blogPost = document.querySelector("#blog");
  //Dev.to username and api
  const username = "notmuchnotmuch";

  createNode = (el) => {
    return document.createElement(el);
  };

  append = (parentEl, childEl) => {
    return parentEl.appendChild(childEl);
  };

  const ul = createNode('ul');
  ul.classList.add("blog-feed");

  makeURL = (userName) => {
    return`${api}username=${userName}`;
  }

  const myURL = makeURL(username);
  fetch(myURL)
  .then(res => res.json())
  .then(posts => {
    posts.length = 3;

    posts.forEach(post => {
      let li = createNode('li'), a = createNode('a');
      let h2 = createNode('h2'), p = createNode('p');
      let small = createNode('small');

      a.target = "_blank";
      p.classList.add("to-connecter");
      a.href = post.url;
      a.innerText = post.title;
      p.innerText = post.description;

      append(h2, a);
      append(li, h2);
      append(ul, li);
    })
    append(blogPost, ul);
  })

document.addEventListener("DOMContentLoaded", () => {
  
  console.log("We're writing javascript!!");

  const pic = document.querySelector(".myImg");
  const imageText = document.querySelector(".hover-text");
  console.log(imageText)
  console.log(pic)
  pic.addEventListener("mouseenter", (e) => {
    console.log(imageText.innerText);
    let newText = imageText.innerText = "I hail from Madison, WI!";
    imageText.append.newText
  });



})

  

  

