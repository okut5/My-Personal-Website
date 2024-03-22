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
    var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    // Apply a simple non-linear effect: square the scroll percentage
    var effect = scrollPercentage * scrollPercentage;

    var colorStart = [52, 47, 47]; // RGB for #342F2F
    var colorEnd = [51, 78, 175]; // RGB for #334EAF
    var colorInterpolated = colorStart.map((start, i) => Math.round(start + (colorEnd[i] - start) * effect));

    document.body.style.backgroundColor = `rgb(${colorInterpolated.join(',')})`;
});

