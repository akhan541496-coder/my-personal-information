document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById('contactForm');
  const toast = document.getElementById('toast');
  const messageText = "🎉 Successful your form! Message sent.";

  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault(); 

      // Check karo ki saari required details bhari gayi hain ya nahi
      if (form.checkValidity()) {
        toast.textContent = messageText;
        
        // Toast show karein aur typing animation trigger ho
        toast.classList.add('show');
        
        // Form fields ko clear kar dein
        form.reset();

        // 4 seconds ke baad toast notification gayab ho jayega
        setTimeout(function() {
          toast.classList.remove('show');
        }, 4000);
      } else {
        // Agar fields khaali hain toh browser ki native validation message dikhayega aur form submit nahi hone dega
        form.reportValidity();
      }
    });
  }
});