window.addEventListener("load", () => {
  const womenDoll = document.getElementById("women-doll");
  const manDummy = document.getElementById("man-dummy");
  const doll = document.getElementById("doll");

  // Show the women doll first
  setTimeout(() => {
    womenDoll.style.opacity = 1;
  }, 500); // 500ms delay

  // Show the man dummy next
  setTimeout(() => {
    manDummy.style.opacity = 1;
  }, 1500); // 1500ms delay

  // Show the doll last
  setTimeout(() => {
    doll.style.opacity = 1;
  }, 2500); // 2500ms delay
});

// document.addEventListener("mousemove", (e) => {
//   const starsContainer = document.getElementById("stars-container");
//   const star = document.createElement("div");
//   star.classList.add("star");
//   starsContainer.appendChild(star);

//   // Position the star near the mouse pointer
//   const { clientX, clientY } = e;
//   star.style.left = `${clientX}px`;
//   star.style.top = `${clientY}px`;

//   // Make the star visible
//   star.style.opacity = 1;

//   // Fade out and remove the star after a delay
//   setTimeout(() => {
//     star.style.opacity = 0;
//     setTimeout(() => star.remove(), 900); // Remove after fade-out
//   }, 2200); // Visible for 300ms
// });

window.addEventListener("load", () => {
  const navBar = document.getElementById("navbar");

  setTimeout(() => {
    navBar.style.height = "70px"; // Correctly set height with px unit
  }, 1000);
});

const starsContainer = document.getElementById("stars-container");

// Generate random stars
function generateStars(count) {
  for (let i = 0; i < count; i++) {
    const star = document.createElement("div");
    star.classList.add("star");

    // Random position
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";

    // Random size (to add variety)
    const size = Math.random() * 3 + 1; // Between 1px and 4px
    star.style.width = size + "px";
    star.style.height = size + "px";

    // Random translation (1px to 5px)

    const translateX = (Math.random() * 10 + 1).toFixed(2); // Random between 1px and 5px
    const translateY = (Math.random() * 10 + 1).toFixed(2); // Random between 1px and 5px
    star.style.transform = `translate(${translateX}px, ${translateY}px)`;

    starsContainer.appendChild(star);
  }
}

generateStars(100);
setTimeout(() => {
  generateStars(100);
}, 1500);
