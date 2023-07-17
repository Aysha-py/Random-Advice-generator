const dice = document.querySelector(".dice-button")
const advicetext = document.querySelector(".advice-text")
const advicenumber = document.querySelector(".adivce-hash")




dice.addEventListener("click", () => {
    
 fetch("https://api.adviceslip.com/advice")
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not OK');
    }
    return response.json();
  })
  .then(data => {
    const adviceData = data.slip; 
   console.log(adviceData.advice)
   advicetext.innerText = adviceData.advice
   advicenumber.innerText = adviceData.id
  })
  .catch(error => {
    console.error('Error:', error);
  });
 console.log("rolled");
  })

  