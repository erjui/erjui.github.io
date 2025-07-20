document.addEventListener('DOMContentLoaded', function() {
  // Make sure the toggle function is available globally
  window.toggleLanguage = function(contentId, buttonElement) {
    // Hide all language sections first
    const allLanguageSections = document.querySelectorAll('.language-section');
    allLanguageSections.forEach(section => {
      section.style.display = 'none';
    });
    
    // Reset all buttons to their default state
    document.querySelector('.spanish-btn').innerHTML = '🇪🇸 Ver en Español';
    document.querySelector('.chinese-btn').innerHTML = '🇨🇳 查看中文版';
    
    // Show the selected language section
    const selectedContent = document.getElementById(contentId);
    if (selectedContent.style.display === 'none' || selectedContent.style.display === '') {
      selectedContent.style.display = 'block';
      
      // Update the button text to show close/hide option
      if (contentId === 'spanish-content') {
        buttonElement.innerHTML = '❌ Cerrar';
      } else if (contentId === 'chinese-content') {
        buttonElement.innerHTML = '❌ 关闭';
      }
    }
  };
}); 