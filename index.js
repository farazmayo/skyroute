 //For Sidebar
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



    document.addEventListener('DOMContentLoaded', () => {
      const playButton = document.querySelector('.background-video .play');
      const videoOverlay = document.querySelector('.video-overlay');
      const closeButton = document.querySelector('.video-overlay .close-btn');

      playButton.addEventListener('click', () => {
        videoOverlay.classList.add('active');
      });

      closeButton.addEventListener('click', () => {
        videoOverlay.classList.remove('active');
      });

      videoOverlay.addEventListener('click', (e) => {
        if (e.target === videoOverlay) {
          videoOverlay.classList.remove('active');
        }
      });

      // Add event listener to document to close video if clicked outside
      document.addEventListener('click', (e) => {
        if (!videoOverlay.contains(e.target) && e.target !== playButton) {
          videoOverlay.classList.remove('active');
        }
      });
    });





    //Project Details 

    document.addEventListener('DOMContentLoaded', () => {
      const counters = document.querySelectorAll('.number');
      const speed = 100; // Change animation speed here

      counters.forEach(counter => {
        const updateCount = () => {
          const target = +counter.getAttribute('data-target');
          const count = +counter.innerText;

          const increment = target / speed;

          if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 10);
          } else {
            counter.innerText = target;
          }
        };

        updateCount();
      });
    });



    /* What can We Do */
    // JavaScript to move the hover image along with the cursor
    document.querySelectorAll('.para-port h4 a, .uniplus').forEach(item => {
      item.addEventListener('mouseover', function (event) {
        const hoverImg = document.getElementById('hover-img');
        hoverImg.style.display = 'block';
        hoverImg.style.top = event.pageY + 'px';
        hoverImg.style.left = event.pageX + 'px';
      });
      item.addEventListener('mousemove', function (event) {
        const hoverImg = document.getElementById('hover-img');
        hoverImg.style.top = event.pageY + 'px';
        hoverImg.style.left = event.pageX + 'px';
      });
      item.addEventListener('mouseout', function () {
        document.getElementById('hover-img').style.display = 'none';
      });
    });


    //Testoniomal 

    var slideIndex = 1;
    showSlides(slideIndex);
    var slideInterval = setInterval(function () {
      plusSlides(1);
    }, 3000); // Change slide every 3 seconds

    function plusSlides(n) {
      showSlides(slideIndex += n);
    }

    function currentSlide(n) {
      showSlides(slideIndex = n);
    }

    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) { slideIndex = 1 }
      if (n < 1) { slideIndex = slides.length }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
    }



    document.addEventListener('DOMContentLoaded', () => {
      const playButton = document.querySelector('.video .play-slide');
      const videoOverlay = document.querySelector('.video-overlay');
      const closeButton = document.querySelector('.video-overlay .close-btn');

      playButton.addEventListener('click', () => {
        videoOverlay.classList.add('active');
      });

      closeButton.addEventListener('click', () => {
        videoOverlay.classList.remove('active');
      });

      videoOverlay.addEventListener('click', (e) => {
        if (e.target === videoOverlay) {
          videoOverlay.classList.remove('active');
        }
      });
    });



    //dropdown content
    document.addEventListener('click', function (e) {
      const dropdowns = document.querySelectorAll('.dropdown-content');

      dropdowns.forEach(function (dropdown) {
        if (!dropdown.parentElement.contains(e.target)) {
          dropdown.style.transform = 'translateY(-100%)'; // Hide dropdown if clicked outside
          dropdown.parentElement.classList.remove('active');
        }
      });
    });

    function toggleDropdown(element) {
      const isActive = element.classList.toggle('active');
      const dropdown = element.querySelector('.dropdown-content');

      document.querySelectorAll('.dropdown-content').forEach(function (content) {
        if (content !== dropdown) {
          content.style.transform = 'translateY(-100%)'; // Close other dropdowns
          content.parentElement.classList.remove('active');
        }
      });

      if (isActive) {
        dropdown.style.transform = 'translateY(0)'; // Show dropdown
      } else {
        dropdown.style.transform = 'translateY(-100%)'; // Hide dropdown
      }
    }



    // Move slideshow buttons along with cursor
    const circle = document.querySelector('.circle');
    const slideshowContainer = document.querySelector('.slideshow-container');

    slideshowContainer.addEventListener('mousemove', (e) => {
      const rect = slideshowContainer.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      circle.style.left = `${x - circle.clientWidth / 2}px`;
      circle.style.top = `${y - circle.clientHeight / 2}px`;
    });

    // Drag to navigate slides
    let isDown = false;
    let startX;
    let scrollLeft;

    const slider = document.querySelector('.slideshow-container');
    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3; //scroll-fast
      slider.scrollLeft = scrollLeft - walk;
      if (walk > 0) {
        plusSlides(1);
      } else {
        plusSlides(-1);
      }
    });





    new Typed(".text", {
      strings: ["creativity", "innovation", "passion", "dedication"],
      typeSpeed: 100,
      backSpeed: 40,
      loop: true,
    });



    //Drag Back To Home

    document.addEventListener('DOMContentLoaded', () => {
      const backToTopButton = document.getElementById('footer-home');
      
      // Scroll to top function
      backToTopButton.addEventListener('click', (e) => {
          e.preventDefault();
          window.scrollTo({
              top: 0,
              behavior: 'smooth'
          });
      });

      // Toggle button visibility on scroll
      window.addEventListener('scroll', () => {
          if (window.scrollY > 100) {
              backToTopButton.style.display = 'block';
          } else {
              backToTopButton.style.display = 'none';
          }
      });
  });



  //Blogs Show More 
  document.querySelectorAll('.show-more').forEach(element => {
    element.addEventListener('mouseover', () => {
      const arrow = element.querySelector('.arrow');
      const text = element.querySelector('.text');
      
      // Move the arrow to the right and reveal the text
      arrow.style.left = '100%';
      text.style.opacity = '1';
    });

    element.addEventListener('mouseout', () => {
      const arrow = element.querySelector('.arrow');
      const text = element.querySelector('.text');
      
      // Move the arrow back to its original position and hide the text
      arrow.style.left = '0';
      text.style.opacity = '0';
    });
  });

