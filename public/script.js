document.addEventListener('DOMContentLoaded', function() {
    console.log("Script loaded and DOM fully loaded.");

    // Handle burger menu clicks
    document.getElementById('burger-menu').addEventListener('click', function() {
        console.log("Burger menu clicked."); // Additional log for debugging
        // Attempt to retrieve an existing mobile-nav element
        var mobileNav = document.querySelector('.mobile-nav');
        if (!mobileNav) {
            // Create the mobile-nav element if it does not exist
            mobileNav = document.createElement('div');
            mobileNav.classList.add('mobile-nav');
            mobileNav.style.width = '0'; // Explicitly set initial width
            document.body.appendChild(mobileNav);

            // Clone and append each link to the mobile-nav
            document.querySelectorAll('#navbar a').forEach(function(link) {
                mobileNav.appendChild(link.cloneNode(true));
            });
        }

        // Toggle the visibility and animation of the mobile-nav
        if (mobileNav.style.width === '250px') {
            mobileNav.style.width = '0';
            console.log("Closing mobile-nav.");
        } else {
            mobileNav.style.width = '250px';
            console.log("Opening mobile-nav.");
        }
    });
});

document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const colors = [
        'rgb(52, 47, 47)', // #342F2F for Section 1
        'rgb(51, 78, 175)', // #334EAF for Section 2
        'rgb(78, 25, 111)', // #4E196F for Section 3
        'rgb(68, 68, 65)'  // #444141 for Section 4
    ];

    let currentSectionIndex = 0;
    sections.forEach((section, index) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.getBoundingClientRect().height;
        if (sectionTop < window.innerHeight / 2 && sectionTop + sectionHeight > window.innerHeight / 2) {
            // This section is currently in the middle of the viewport
            currentSectionIndex = index;
        }
    });

    // Ensure the color is applied smoothly without abrupt changes
    document.body.style.transition = 'background-color 0.8s ease';
    document.body.style.backgroundColor = colors[currentSectionIndex];
});


