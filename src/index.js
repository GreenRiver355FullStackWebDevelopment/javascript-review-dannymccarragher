import { calculateStarAverage } from "./logic.js";

//Do not change //////////////////////////////////
const reviews = [
  {
    username: "Rose",
    image: "./images/rose.png",
    star: 5,
    review: "Great coffee and ambiance",
  },
  {
    username: "butterfly2222",
    image: "./images/avatar2.png",
    star: 3,
    review: "Coffee was okay, took way to long to make.",
  },
  {
    username: "Sandy Tuna",
    image: "./images/avatar1.png",
    star: 1,
    review:
      "The coffee was great but the employees didn't let me stay past closing! ): Worst experience ever.",
  },
];
/////////////////////////////////////////////////////////////////////

//Your Code Below Here////

window.onload = () => {
  renderReview();
  handleFormData();
  starAverage();
};

const starAverage = () => {
  let rating = document.querySelector(".starRating");

  rating.textContent = "Star Rating: " + calculateStarAverage(reviews);
}

const renderReview = () => {
  let reviewSection = document.querySelector(".reviews");

  reviews.forEach((review) => {
    const reviewContainer = document.createElement("div");
    // create DOM Elements
    reviewContainer.className = "review_container";
    let image = document.createElement("img");
    // set image src to url from reviews
    image.src = review.image;
    let reviewDiv = document.createElement("div");
    let username = document.createElement("p");
    let star = document.createElement("p");
    let reviewText = document.createElement("p");

    // set newly created DOM elements to the corresponding value from revies
    username.textContent = "Username: " + review.username;
    star.textContent = "Stars: " + review.star;
    reviewText.textContent = "Review: " + review.review;

    // correctly append each created element in the DOM Hiearchy

    // image is appended to reviewContainer as is the highest object in the DOM for the section
    reviewContainer.appendChild(image);
    reviewDiv.appendChild(username);
    reviewDiv.appendChild(star);
    reviewDiv.appendChild(reviewText);

    reviewSection.appendChild(reviewContainer);
    reviewContainer.appendChild(reviewDiv);
  });
};

const handleFormData = () => {
  // select form and gather the input values
  let form = document.querySelector("form");


  form.addEventListener("submit", function (event) {

    event.preventDefault();

    let username = document.getElementById("username").value;
    let image = document.getElementById("image").value;
    let star = document.getElementById("star").value;
    let review = document.getElementById("review").value;

    let newReview = {
      username,
      image,
      star,
      review,
    }

    reviews.push(newReview);
    // console.log(newReview)

    // this clears review section to not allow duplicates on each reload
    document.querySelector(".reviews").innerHTML = "";

    //rerender the new review Array
    renderReview();
  });
};

/* <div class="review_container">
    <img src="img url here"/>
    <div>
      <p> username here </p>
      <p> star rating here </p>
      <p> review here </p>
    <div>
  </div> */
