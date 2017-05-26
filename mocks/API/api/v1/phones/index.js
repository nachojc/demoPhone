(function() {
    'use strict';

    const express = require('express');
    const router = express.Router();

    router
        .get('/:id', getIdFn)
        .get('/', getFn);

    exports = module.exports = router;



    const data = [
        { id: 1, name: "IPHONE 7 32 GB ORO", mark: "Apple", description: "Una cámara totalmente nueva. La pantalla de iPhone más brillante y con más colores hasta la fecha. Más velocidad y autonomía que nunca. Resistencia al agua y a las salpicaduras. Y altavoces estéreo. Es una belleza. Es una bestia. Es el 7", price: "700", img: "https://tienda.yoigo.com/pictures/14557/apple-iphone-7-oro-front.jpg" },
        { id: 2, name: "Samsung Galaxy J5 2016 Dorado", mark: "Samsung", description: "El Samsung Galaxy J5 2016 con su marco metálico robusto y sus 5,2” de pantalla parece un malote. Pero ¿sabes? al final hace lo que quieras. La batería es extraíble y en cualquier momento, ¡clac! La quitas y le pones otra de repuesto. Y sí, es un 4G, tiene 13 MP, y 16 GB de memoria interna. Para que digan que el cerebro y la dureza no casan… Llévatelo con cualquiera de nuestras Tarifas de móvil y abre tu corazón a este tipo duro.", price: "199", img: "https://tienda.yoigo.com/pictures/16081/samsung-galaxy-j5-2016-dorado.jpg" },
        { id: 3, name: "Samsung Galaxy S8 Negro", mark: "Samsung", description: "Un móvil así es para levantarse, sacar pecho y decir: “Ese de ahí es mi hijo”.", price: "789", img: "https://tienda.yoigo.com/pictures/16995/samsung-galaxy-s8-negro-front.jpg" },
    ];

    function getFn(req, res) {



        res.json(data);
    }

    function getIdFn(req, res) {
        let id = parseInt(req.params.id) || 0;
        var response = data.filter(phone => phone.id === id);

        res.json(response.length ? response[0] : {});
    }

}());