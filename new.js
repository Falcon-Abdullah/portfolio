document.addEventListener("DOMContentLoaded", function() {
  const made = document.getElementById("made");
  const name = document.getElementById("name");
  const developer = document.getElementById("developer");
  const also = document.getElementById("also");

  function delay(ms) {
      return new Promise((resolve,reject) => setTimeout(resolve, ms));
  }

  async function startAnimation() {
      // Reset the elements
      made.innerText = "";
      name.innerText = "";
      developer.innerText = "";
      also.innerText = "";
      made.classList.remove("animate__animated", "animate__bounceInLeft");
      name.classList.remove("animate__animated", "animate__bounceInLeft");
      developer.classList.remove("animate__animated", "animate__bounceInLeft");
      also.classList.remove("animate__animated", "animate__backInDown");
      made.style.opacity = 0;
      name.style.opacity = 0;
      developer.style.opacity = 0;
      also.style.opacity = 0;

      await delay(1000);
      made.innerText = "Made by:";
      made.classList.add("animate__animated", "animate__bounceInLeft");
      made.style.opacity = 0.8

      await delay(1000);
      name.innerText = "Muhammad Abdullah Bashir";
      name.classList.add("animate__animated", "animate__bounceInLeft");
      name.style.opacity = 0.8;

      await delay(1000);
      developer.innerText = "The Front-end Developer";
      developer.classList.add("animate__animated", "animate__bounceInLeft");
      developer.style.opacity = 0.8;

      await delay(1000);
      also.innerText = "Worked also in: Python, Java, C, C++";
      also.classList.add("animate__animated", "animate__backInDown");
      also.style.opacity = 0.8;
  }
  startAnimation() // For initial start
  setInterval(startAnimation, 7000);
});


const animatePara = () => {
  let paras = document.getElementsByClassName("para");
  for (let para of paras) {
    para.classList.remove("animate__animated", "animate__fadeInLeft");
    void para.offsetWidth; // Trigger a reflow to restart the animation
    para.classList.add("animate__animated", "animate__fadeInLeft");
  }
};

const animateImage = () => {
  let pictures = document.getElementsByClassName("picture");
  for (let picture of pictures) {
    picture.classList.remove("animate__animated", "animate__flip");
    void picture.offsetWidth; // Trigger a reflow to restart the animation
    picture.classList.add("animate__animated", "animate__flip");
  }
};

const animateThanks =()=>{
  let thanks = document.getElementById("thanks")
  thanks.classList.remove("animate__animated","animate__rollIn")
  void thanks.offsetWidth;
  thanks.classList.add("animate__animated","animate__rollIn")
}

setInterval(animateImage, 7000);
setInterval(animatePara, 16000);
setInterval(animateThanks, 5000);