
    document.addEventListener('DOMContentLoaded', function() {
    
        var myOffcanvas = document.getElementById('offcanvasExample');


        myOffcanvas.addEventListener('hidden.bs.offcanvas', function (event) {
            var target = event.relatedTarget;
            if (target && target.tagName === 'A') {
                var href = target.getAttribute('href');
                var targetElement = document.querySelector(href);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });

        var navLinks = document.querySelectorAll('#OffCanvas .nav-link');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                var href = link.getAttribute('href');
                var targetElement = document.querySelector(href);
                if (targetElement) {
                    myOffcanvas.addEventListener('hidden.bs.offcanvas', function () {
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                    }, { once: true });
                }
            });
        });
    });

