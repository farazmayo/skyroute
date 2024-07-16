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
  
 
  function navigateToHome() {
    window.location.href = '../index.html';
}

function navigateToAbout() {
    window.location.href = '../About/about.html';
}

function navigateToService() {
    window.location.href = '../Service/sindex.html';
}

function navigateToContact() {
    window.location.href = '../Pages/contactus.html';
}
function openModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "block";
  document.body.classList.add('modal-open'); // Add class to body
}

function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "none";
  document.body.classList.remove('modal-open'); // Remove class from body
}

// Function to close modal when clicking outside of it (optional)
window.onclick = function(event) {
  if (event.target.className === 'modal') {
    event.target.style.display = "none";
    document.body.classList.remove('modal-open'); // Remove class from body
  }
};
