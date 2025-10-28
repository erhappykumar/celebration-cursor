const div_container = ` <style>.div_container{width: 2px;height: 2px;background-color: transparent; display: flex;flex-wrap: wrap;justify-content: center;align-items: center;
    }
    
        .div_in{background-color: red;width: 0.1px;height: 0.1px;opacity: 1;}

    </style><div class="div_container"></div>`;

window.addEventListener("click", (e) => {
  injectTextAtCoordinate(e.clientX, e.clientY, div_container);
  celebration();
});

///////////////////////////////////////////////////////////////////
function injectTextAtCoordinate(x, y, text) {
  /////////////////////////////////////////////////////////////

  // 1. Create the new element
  const newElement = document.createElement("div");

  // 2. Set the text content
  newElement.innerHTML = text;

  // 3. Apply necessary styles for positioning and visibility
  newElement.style.position = "fixed"; // 'fixed' positions it relative to the viewport
  newElement.style.left = `${x}px`;
  newElement.style.top = `${y}px`;
  newElement.style.zIndex = "10000"; // Super high Z-index to ensure it is always on top

  // 4. Apply Tailwind classes for appearance
  newElement.className =
    "p-3 bg-red-500 text-white font-mono text-xl font-bold rounded-lg shadow-xl animate-pulse cursor-pointer";

  // Optional: Add a smooth exit animation on click
  function disappear() {
    newElement.classList.add("transition-opacity", "duration-500", "opacity-0");
    // Remove the element after the animation finishes
    setTimeout(() => newElement.remove(), 2000);
  }
  disappear();

  // 5. Append the new element to the document body
  document.body.append(newElement);
}

injectTextAtCoordinate(100, 100, div_container);

////////////////////////////////////////////

function celebration() {
  const div_container = document.querySelector(".div_container");

  for (let i = 0; i < 500; i++) {
    div_container.innerHTML += `<div class='div_in'></div>`;
    document.querySelectorAll(".div_in")[
      i
    ].style.background = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
      Math.random() * 255
    )},${Math.floor(Math.random() * 255)})`;
  }

  //  start onClick work on div_container element

  const div_in = document.querySelectorAll(".div_in");

  //div_container.addEventListener("click",()=>///

  setTimeout(() => {
    for (let j = 0; j < 500; j++) {
      div_in[j].style.transform = `translate(${
        (-1) ** Math.floor(Math.random() * 100) * Math.floor(Math.random() * 12)
      }vw,${
        (-1) ** Math.floor(Math.random() * 100) * Math.floor(Math.random() * 12)
      }vw) scale(7 , 5) rotate(${Math.floor(
        Math.random() * 360
      )}deg)rotate(${Math.floor(Math.random() * 360)}deg)`;
      div_in[j].style.transition = ` all ${Math.floor(
        Math.random() * 4
      )}s ease-in-out`;
      div_in[j].style.opacity = "0.0";
    }
  }, 50);

  ///)
}

celebration();
