document.addEventListener('DOMContentLoaded', function() {
  // Make sure the toggle function is available globally
  window.toggleLanguage = function(contentId, buttonElement) {
    const selectedContent = document.getElementById(contentId);
    const isCurrentlyVisible = selectedContent.style.display === 'block';
    
    // Hide all language sections first
    const allLanguageSections = document.querySelectorAll('.language-section');
    allLanguageSections.forEach(section => {
      section.style.display = 'none';
    });
    
    // Reset all buttons to their default state
    document.querySelector('.spanish-btn').innerHTML = '🇪🇸 Ver en Español';
    document.querySelector('.chinese-btn').innerHTML = '🇨🇳 查看中文版';
    
    // If the section was already visible, keep it hidden (toggle off)
    // Otherwise show the selected section (toggle on)
    if (!isCurrentlyVisible) {
      selectedContent.style.display = 'block';
      
      // Update the button text
      if (contentId === 'spanish-content') {
        buttonElement.innerHTML = '🇺🇸 Hide Spanish';
      } else if (contentId === 'chinese-content') {
        buttonElement.innerHTML = '🇺🇸 Hide Chinese';
      }
    }
  };
}); 