const next_page = () => {
   const pass = document.getElementById("password").value;

   let len = pass.length >= 8;
   let special = /[!@#$%^&*(),.?":{}|<>]/.test(pass);
   let small = /[a-z]/.test(pass);
   let number = /\d/.test(pass);

   const lettersDiv = document.getElementById("letters");
   const numberDiv = document.getElementById("number");
   const specialDiv = document.getElementById("special");

   // Utility function to reset and apply animation and text color
   const resetAndAnimate = (element, text, colorClass) => {
      element.classList.remove("animate__animated", "animate__fadeInLeft", "text-green-600", "text-red-600");
      void element.offsetWidth; // Trigger a reflow to restart the animation
      element.classList.add("animate__animated", "animate__fadeInLeft", colorClass);
      element.innerText = text;
   };

   if (len) {
      resetAndAnimate(lettersDiv, "1. Length is correct", "text-green-600");
   } else {
      resetAndAnimate(lettersDiv, "1. Length is incorrect", "text-red-600");
   }

   if (number && small) {
      resetAndAnimate(numberDiv, "2. Number and letter are correct", "text-green-600");
   } else {
      resetAndAnimate(numberDiv, "2. Number or letter are incorrect", "text-red-600");
   }

   if (special) {
      resetAndAnimate(specialDiv, "3. Special character is correct", "text-green-600");
   } else {
      resetAndAnimate(specialDiv, "3. Special character is incorrect", "text-red-600");
   }

   
   if (len && special && small && number) {
      setTimeout(() => {
         window.location.href = "./new.html";
      }, 2000);
   } else {
      const img = document.getElementById("img");
      img.classList.remove("animate__animated", "animate__wobble");
      void img.offsetWidth; // Trigger a reflow to restart the animation
      img.classList.add("animate__animated", "animate__wobble");
   }
   
}
