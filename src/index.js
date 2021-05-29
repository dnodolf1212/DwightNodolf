const wrapper = document.querySelector(".wrapper");

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
  })

})