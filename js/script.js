const numberElement = document.querySelector('.number');

const buttonsElement = document.querySelector('.buttons');

buttonsElement.addEventListener("mouseup", function (event) {
   const target = event.target;

   if (target.closest(".button_1")) {
      numberElement.innerHTML--;
   } else if (target.closest(".button_3")) {
      numberElement.innerHTML++;
   } else if (target.closest(".button_2")) {
      numberElement.innerHTML = 0;
   } 

   if (numberElement.innerHTML > 0) numberElement.style.color = "#00b664";
   if (numberElement.innerHTML < 0) numberElement.style.color = "red";
   if (numberElement.innerHTML == 0) numberElement.style.color = "";
});



