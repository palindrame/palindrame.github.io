document.addEventListener("DOMContentLoaded", () => {
  const greetings = [
    "Hello",        // English
    "Hola",         // Spanish
    "Bonjour",      // French
    "Hallo",        // German
    "Ciao",         // Italian
    "नमस्ते",       // Hindi
    "こんにちは",    // Japanese
    "안녕하세요",     // Korean
    "你好",         // Chinese
    "নমস্কার",          // Bengali
    "Здравствуйте", // Russian
    "Salam"         // Arabic
  ];

  const index = new Date().getHours() % greetings.length;
  const currentGreeting = greetings[index];

  const el = document.getElementById("greeting");
  if (el) {
    el.innerText = currentGreeting;
  }
});

