const api = new ApiService("https://dev.to/api/articles?");
const wrapper = document.querySelector(".wrapper");
const blogPost = document.querySelector("#blog");
  //Dev.to username and api
  const username = "notmuchnotmuch";

  createNode = (el) => {
    return document.creeateElement(el);
  };

  append = (parentEl, childEl) => {
    return parentEl.appendChild(childEl);
  };

  const ul = createNode('ul');
  ul.classList.add("blog-feed");

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

  

  

