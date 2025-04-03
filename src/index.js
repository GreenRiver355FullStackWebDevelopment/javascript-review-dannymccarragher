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
};


const renderReview = () => {

  let reviewSection= document.querySelector(".reviews");

  reviews.forEach((review) => {

    const reviewContainer = document.createElement("div");
    reviewContainer.className = "review_container";
    let image = document.createElement("p");
    let username = document.createElement("p");
    let star = document.createElement("p");

    username.textContent = review.username;
    

    reviewContainer.appendChild(username);
  });

  reviewSection.appendChild(reviewContainer);
};


{/* <div class="review_container">
    <img src="img url here"/>
    <div>
      <p> username here </p>
      <p> star rating here </p>
      <p> review here </p>
    <div>
  </div> */}
