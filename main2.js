
var tablinks = document.getElementsByClassName("tabs-link");
var tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        Event.currentTarget.classList.add("active-link");
    }
    window.addEventListener('scroll', function() {
        var footer = document.getElementById('footer');
        var windowHeight = window.innerHeight;
        var bodyHeight = document.body.offsetHeight;
        var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    
        // Calculate the position of the bottom of the content sections
        var educationBottom = document.getElementById('education').offsetTop + document.getElementById('education').offsetHeight;
        var experienceBottom = document.getElementById('experience').offsetTop + document.getElementById('experience').offsetHeight;
        var skillsBottom = document.getElementById('skills').offsetTop + document.getElementById('skills').offsetHeight;
    
        // Check if the user has scrolled to the bottom of the content sections
        if (scrollTop >= educationBottom && scrollTop >= experienceBottom && scrollTop >= skillsBottom) {
            footer.style.display = 'block'; // Show the footer
        } else {
            footer.style.display = 'none'; // Hide the footer
        }
    });