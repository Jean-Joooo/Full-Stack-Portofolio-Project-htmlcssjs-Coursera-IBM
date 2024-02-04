document.addEventListener('DOMContentLoaded', function () {
  const navbarToggle = document.getElementById('navbarToggle');
  const iconBars = navbarToggle.querySelectorAll('.icon-bar');
  const topDiv = document.querySelector('.topdiv');

  navbarToggle.addEventListener('click', function () {
    this.classList.toggle('collapsed');

    const isMenuOpen = this.classList.contains('collapsed');

    // Toggle the styles for the 'collapsed' class dynamically
    if (isMenuOpen) {
      resetStyles();
    } else {
      setCrossStyles();
    }

    // Toggle the top menu links visibility
    topDiv.style.display = isMenuOpen ? 'block' : 'none';
  });

  // Close the menu when clicking on a menu item
  const menuItems = document.querySelectorAll('.navbar-nav .nav-link');
  menuItems.forEach(item => {
    item.addEventListener('click', function () {
      navbarToggle.classList.remove('collapsed');
      resetStyles();
      topDiv.style.display = 'block'; // Show the top menu links
    });
  });

  function setCrossStyles() {
    iconBars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
    iconBars[1].style.opacity = '0';
    iconBars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
  }

  function resetStyles() {
    iconBars[0].style.transform = '';
    iconBars[1].style.opacity = '';
    iconBars[2].style.transform = '';
  }
});

function addRecommendation() {
  // Get the message of the new recommendation
  let recommendation = document.getElementById("new_recommendation");
  // If the user has left a recommendation, display a pop-up
  if (recommendation.value != null && recommendation.value.trim() != "") {
    console.log("New recommendation added");
   showPopup(true);
    
    // Create a new 'recommendation' element and set it's value to the user's message
    var element = document.createElement("div");
    element.setAttribute("class","recommendation");
    element.innerHTML = "\<span\>&#8220;\</span\>" + recommendation.value + "\<span\>&#8221;\</span\>";
    // Add this element to the end of the list of recommendations
    document.getElementById("all_recommendations").appendChild(element); 
    
    // Reset the value of the textarea
    recommendation.value = "";
  }
}

function showPopup(true) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible'
  } else {
    document.getElementById('popup').style.visibility = 'hidden'
  }
}
