// Adding functionality.

// Navigation
function navBar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }
  
  // Skills
  function showSkills() {
      // Get selected category
      const selectedCategory = document.getElementById("skills-select").value;
      
      // Skill categories and their respective skills
      const skillsData = {
          programming: "Python, Java, C++, SQL",
          webdev: "HTML, CSS, JavaScript, Flask, React",
          databases: "MySQL, SQLite, MongoDB",
          datascience: "R, Pandas, NumPy, Matplotlib, Seaborn",
          machinelearning: "Scikit-learn, TensorFlow, Keras, PyTorch, OpenCV"
      };
  
      // Get the display box
      const skillsDisplay = document.getElementById("skills-display");
  
      // Update the displayed skills based on selection
      if (selectedCategory && skillsData[selectedCategory]) {
          skillsDisplay.innerHTML = `<p><strong>${selectedCategory.replace(/([A-Z])/g, ' $1').toUpperCase()}</strong>: ${skillsData[selectedCategory]}</p>`;
      } else {
          skillsDisplay.innerHTML = "<p>Select a category to view skills.</p>";
      }
  }
  
  // Dark and Light mode Toggle 
  document.getElementById("theme-toggle").addEventListener("click", function() {
      document.body.classList.toggle("dark-mode");
  
      // Change button text based on mode
      if (document.body.classList.contains("dark-mode")) {
          this.textContent = "Light Mode";
      } else {
          this.textContent = "Dark Mode";
      }
  });
  