// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const superEventHandler = {
  handler: () => {
    const title = document.querySelector("h2");

    function handleMouseEnter() {
      title.style.color = colors[0];
      title.innerText = "The Mouse is here!";
    }

    function handleMouseLeave() {
      title.style.color = colors[1];
      title.innerText = "The Mouse is gone!";
    }

    function handleWindowResized() {
      title.style.color = colors[2];
      title.innerText = "You juse resized!";
    }

    function handleMouseClick(para) {
      if (para.button === 2) {
        title.style.color = colors[4];
        title.innerText = "That was a right click!";
      }
    }

    title.addEventListener("mouseenter", handleMouseEnter);
    title.addEventListener("mouseleave", handleMouseLeave);
    title.addEventListener("mousedown", handleMouseClick);

    window.addEventListener("resize", handleWindowResized);
    document.addEventListener("contextmenu", handleMouseClick);
  },
};

superEventHandler.handler();
