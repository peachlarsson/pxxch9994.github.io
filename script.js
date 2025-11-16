(function(){
  // Theme toggle with localStorage
  var btn = document.getElementById('theme-toggle');
  var root = document.documentElement;
  function setTheme(t){
    if(t==='dark') root.setAttribute('data-theme','dark');
    else root.removeAttribute('data-theme');
    localStorage.setItem('theme', t);
    btn.textContent = (t==='dark') ? '☀️' : '🌙';
  }
  var saved = localStorage.getItem('theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark':'light');
  setTheme(saved);
  btn.addEventListener('click', function(){
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(next);
  });

  // Simple contact form handler (no real backend)
  var form = document.getElementById('contact-form');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    var name = form.elements['name'].value.trim();
    var email = form.elements['email'].value.trim();
    var message = form.elements['message'].value.trim();
    if(!name||!email||!message){
      alert('Please complete all fields before sending.');
      return;
    }
    // For now just show a friendly message
    alert('Thanks, ' + name + '! Your message was noted (this demo does not send emails).');
    form.reset();
  });
})();
