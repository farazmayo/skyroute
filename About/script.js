document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const closeBtn = document.getElementById('close-btn');
    const sidebarLinks = document.querySelectorAll('.sidebar-links a');
  
    // Toggle sidebar
    menuToggle.addEventListener('change', () => {
      if (menuToggle.checked) {
        sidebar.classList.add('active');
      } else {
        sidebar.classList.remove('active');
      }
    });
  
    // Close sidebar when close button is clicked
    closeBtn.addEventListener('click', () => {
      sidebar.classList.remove('active');
      menuToggle.checked = false;
    });
  
    // Close sidebar when a link is clicked
    sidebarLinks.forEach(link => {
      link.addEventListener('click', () => {
        sidebar.classList.remove('active');
        menuToggle.checked = false;
      });
    });
  });
