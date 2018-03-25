/**
 * TODO: Put this in a function and insert into products.js 
 */

// Initial Ratings
const ratings = {
  // change these to reflect product
  sony: 3.3,
  samsung: 3.4,
  panasonic: 3.6
};

// Total Stars
const starsTotal = 5;

// Run getRatings when DOM loads
document.addEventListener("DOMContentLoaded", getRatings);

// Get Ratings
function getRatings() {
  for (let rating in ratings) {
    // Get percentage
    const starPercentage = ratings[rating] / starsTotal * 100;

    // Round to nearest 10
    const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

    // Set width of stars-inner to percentage
    document.querySelector(
      `.${rating} .stars-inner`
    ).style.width = starPercentageRounded;
  }
}
