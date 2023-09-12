function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }const typedTextSpan = document.querySelector(".typed-text");
  const cursorSpan = document.querySelector(".cursor");
  
  const titleElement = document.querySelector('.title');
  const text = "Mohamed Abukar";
  let index = 0;
  
  function typeText() {
      if (index < text.length) {
          titleElement.textContent += text.charAt(index);
          index++;
          setTimeout(typeText, 150);  // Adjust this time for faster/slower typing
      } else {
          titleElement.style.animation = 'blink 1s step-end infinite';  // Once typing is done, begin cursor blink animation
      }
  }
  
  typeText();
  