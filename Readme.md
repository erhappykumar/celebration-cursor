
# 🎊 Confetti Explosion on Click

A simple yet engaging vanilla JavaScript snippet that creates a visually appealing **confetti-like explosion** at the exact cursor location whenever the user clicks anywhere on the webpage.

---

## 💡 Overview

This script works by:
1.  **Listening** for a `click` event on the window.
2.  **Injecting** a tiny, fixed-position container element at the mouse coordinates (`clientX`, `clientY`).
3.  The `celebration()` function then **populates** this container with 500 randomly colored micro-dots.
4.  Finally, a **timed animation** scatters, rotates, scales, and fades out these dots, creating the "explosion" effect.

---

## ⚙️ Technical Breakdown

### 1. `div_container` Constant

This string holds the initial structure and CSS for the confetti particles.

* The main wrapper (`.div_container`) is **$2\text{px} \times 2\text{px}$** and transparent.
* The individual particles (`.div_in`) are extremely small: **$0.1\text{px} \times 0.1\text{px}$**.

### 2. `injectTextAtCoordinate(x, y, text)`

This function handles the placement of the main element.

* It uses `position: fixed` and a high `zIndex` to ensure the confetti always appears above other content.
* **Crucial Note:** The line applying the `newElement.className` (with **Tailwind CSS classes**) is a relic that **gets immediately replaced** by the smaller element's content, but it also contains a **`disappear()`** function that sets a timer to remove the element after 2 seconds. This is what handles the cleanup.

### 3. `celebration()`

This is the animation engine.

| Step | Action | Description |
| :--- | :--- | :--- |
| **1. Selection** | `document.querySelector(".div_container")` | **⚠️ Potential Bug:** This selects the *first* matching container in the DOM. If the user clicks rapidly, the animation may target the wrong, already disappearing container. |
| **2. Population** | `for (let i = 0; i < 500; i++)` | Appends 500 `.div_in` elements to the container and assigns them a **random RGB background color**. |
| **3. Animation** | `setTimeout(() => { ... }, 50)` | After a brief delay, it iterates through all 500 dots and applies complex, random `transform` and `transition` properties: |
| | **Translation** | `translate(RANDOM_12vw, RANDOM_12vw)` scatters them randomly across the viewport. |
| | **Scaling** | `scale(7, 5)` makes the tiny dots visibly larger as they move. |
| | **Rotation** | `rotate(RANDOM_360deg)` adds a spinning effect. |
| | **Fading** | `opacity = "0.0"` and a random `transition` duration (up to 4 seconds) creates the smooth fade-out. |

---

## 🛠️ Usage

To use this script:

1.  Place the entire code block within `<script>` tags, preferably at the end of your HTML body.
2.  Open the HTML file in any modern web browser.
3.  **Click anywhere** on the page.

---
