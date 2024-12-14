document.querySelectorAll('.hero-navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });


const text = 'I strive to build reliable and scalable web applications.';
let index = 0;

function typeText() {
  if (index < text.length) {
    document.querySelector('.hero-content p').textContent += text.charAt(index);
    index++;
    setTimeout(typeText, 100);
  }
}

typeText();
