document.addEventListener('DOMContentLoaded', function() {

    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);

    //Inicializamos todos los slider con esta configuración
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, {
        interval: 4000,
        height: 300
    });

    //Inicializamos el slider para movil con esta configuración
    var elems = document.querySelector('#sliderMovil');
    var instances = M.Slider.init(elems, {
        interval: 3000,
        height: 230
    });

    //Inicializamos el slider para ads con esta configuración
    var elems = document.querySelector('#sliderAds');
    var instances = M.Slider.init(elems, {
        interval: 4000,
        height: 600,
        indicators: false
    });
    
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
                
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);

    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems);

    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems);

    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);

    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      hoverEnabled: false
    });

    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems);

});
    