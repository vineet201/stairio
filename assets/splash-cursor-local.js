// Only activate splash cursor on the second section (features)
(function(){
  document.addEventListener('DOMContentLoaded', function() {
    var featuresSection = document.querySelector('.features');
    var splashCursor = document.getElementById('splash-cursor-canvas') || document.querySelector('.splash-cursor-layer');
    if (!featuresSection || !splashCursor) return;

    // Hide splash cursor by default
    splashCursor.style.display = 'none';

    featuresSection.addEventListener('mouseenter', function() {
      splashCursor.style.display = '';
    });
    featuresSection.addEventListener('mouseleave', function() {
      splashCursor.style.display = 'none';
    });
  });
})();
