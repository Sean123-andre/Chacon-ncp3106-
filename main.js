// ---------------------------------------------------------
// Simple client-side form validation (same behavior)
// ---------------------------------------------------------
(function () {
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name    = document.getElementById('name').value.trim();
    const email   = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      alert('Please fill out all fields before sending.');
      return;
    }

    // Replace with your real submission logic or service
    alert('Thanks, ' + name + '! Your message was (simulated) sent.');
    form.reset();
  });
})();

// ---------------------------------------------------------
// Helper: quickly change About image from the console
// Usage: changeAboutImage('https://yourdomain.com/yourphoto.jpg')
// ---------------------------------------------------------
function changeAboutImage(url) {
  const img = document.getElementById('aboutImage');
  if (img && url) img.src = url;
}
