    document.addEventListener("DOMContentLoaded", () => {
      const greetings = [
        "שלום!",        // Hebrew
        "Hola!",         // Spanish
        "Bonjour!",      // French
        "Hallo!",        // German
        "Ciao!",         // Italian
        "नमस्ते!",       // Hindi
        "こんにちは!",    // Japanese
        "안녕하세요!",     // Korean
        "你好!",         // Chinese
        "নমস্কার!",      // Bengali
        "Здравствуйте!", // Russian
        "مرحبًا!"        // Arabic
      ];

      const index = Math.floor(Math.random() * greetings.length);
      const currentGreeting = greetings[index];

      const el = document.getElementById("greeting");

      if (el) {
        // Set initial styles inline
        el.innerText = currentGreeting;
        el.style.opacity = "0";
        el.style.transition = "opacity 1s ease-in-out";
        el.style.fontSize = "2rem";
        el.style.fontWeight = "bold";
        el.style.color = "#1E90FF"; // Dodger Blue
        el.style.marginTop = "2rem";
        el.style.textAlign = "center";

        // Trigger fade-in after rendering
        requestAnimationFrame(() => {
          el.style.opacity = "1";
        });
      }
    });
