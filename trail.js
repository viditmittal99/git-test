document.addEventListener("mousemove", (e) => {
  const dot = document.createElement("div");
  dot.classList.add("trail-dot");

  dot.style.left = `${e.pageX}px`;
  dot.style.top = `${e.pageY}px`;

  document.body.appendChild(dot);

  // Remove the dot after animation completes
  setTimeout(() => {
    dot.remove();
  }, 600); // same as animation duration
});
