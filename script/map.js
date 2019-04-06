var map;
    DG.then(function () {
        map = DG.map('map', {
            center: [55.430298, 65.34104500000001],
            zoom: 19,
            scrollWheelZoom: false
        });
        DG.marker([55.43036952960665, 65.34104768220902]).addTo(map).bindPopup('Рекламное агентство');
    });