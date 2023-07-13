const API = 'https://opentdb.com/api.php?amount=10&type=boolean';

let triviaData = null

const form = document.querySelector("form");

const categorySelect = document.getElementById("category-select");


fetch(API)
.then((response) => response.json())
.then((data) => {
  
  triviaData = data.results
  console.log("DATA RESULTS:", triviaData)
  for (let i=0; i<triviaData.length; i++){
    const category = triviaData[i].category
    const option = document.createElement('option');
    option.textContent = category;
    categorySelect.append(option);
  }

})
.catch((error) => console.error(error));





form.addEventListener("submit", (e)=>{
  e.preventDefault();
  console.log("hello world")
})

   




function displayTriviaQuestions(questions) {
    const questionsContainer = document.getElementById("questions-container");
    questionsContainer.innerHTML = "";
  
    questions.forEach((question) => {
      const article = document.createElement("article");
      article.classList.add("card");
  
      const category = document.createElement("h2");
      category.textContent = question.category;
  
      const questionText = document.createElement("p");
      questionText.textContent = question.question;
  
      const showAnswerButton = document.createElement("button");
      showAnswerButton.textContent = "Show Answer";
  
      const answer = document.createElement("p");
      answer.classList.add("hidden");
      answer.textContent = question.correct_answer;
  
      showAnswerButton.addEventListener("click", () => {
        answer.classList.toggle("hidden");
      });
  
      article.append(category, questionText, showAnswerButton, answer);
      questionsContainer.appendChild(article);
    });
  }
  

function handleFormSubmit(event) {
    event.preventDefault();
   
    const selectedCategory = categorySelect.value;
    fetchTriviaQuestions(selectedCategory)
      .then((questions) => {displayTriviaQuestions(questions)})
      .then(console.log('SUBMIT WAS CLICKED'))
      .catch((error) => console.error(error));
  }
  





  