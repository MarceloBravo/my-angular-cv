export const portfolio = [
    {
        title: 'Backend tienda - Shop-backend',
        image: 'API - Shop-backend.png',
        video: null,
        mouse_move_title: 'Endpoint tienda',
        mouse_move_description: 'Click aquí para ir a Swagger para revisar la API',
        description: [
            'Backend para una aplicación de tienda online básica, dockerizada y con un flujo de trabajo de Integración Continua usando GitHub Actions (test unitarios, test de integración, análisi de código con SonarQube y deploy automatico en Railway).',
            'El proyecto está desarrollado en <b>Node.js </b>, se encuentra alojado en <b>Railway</b> y su base de datos esta ubicada en Hosting gratuito de<b> Neon.tech</b>',
            'Entre las tecnología utilizadas se encuentran: Node.js, Express, PostgreSQL, Sequelize, Docker y Docker Compose, Jest y Supertest.',
            'EL endpoint se puede probar en <b><a href="https://shop-backend-production-acc2.up.railway.app/api-docs/" target="_blank">https://shop-backend-production-acc2.up.railway.app/api-docs/</a></b>',
            'El proyectop se encuentra almacebado en <b><a href="https://github.com/MarceloBravo/shop-backend" target="_blank">mi repositorio de GitHub</a></b>'
        ],
        paragraph: 'Este backend se carácteriza por implementar:API Rest, Autenticación JWT (Token y Refresh token), ORM Sequelize, Docker, Docker compose, optimizaciones para producción (multi-stage build) y soporte para ejecutar tests dentro de contenedores, Testing (Jest y Supertest), implementación de principios SOLID y Clean Code, integración Continua, despliegue continuo, GitHub, GitHub Actions, uso de secrets en GitHub, SonarQube para evaluación de calidad de código y Swagger para documentación de la API Rest.',
        link: 'https://shop-backend-production-acc2.up.railway.app/api-docs/'
    },
    {
        title: 'Catálogo de fotos unsplash',
        image: 'unsplash.png',
        video: null,
        mouse_move_title: 'Catálogo de fotos unsplash',
        mouse_move_description: 'Click aquí para ir a la aplicación',
        description: [
            'Pequeña aplicación que ofrece un catálogo de fotos online en el cual se pueden realizar búsquedas de fotos por tema u otro criterio, se muestra una grilla con el resultado de la búsqueda y al seleccionar una foto, se accede a la página de detalle de la misma, allí se puede agregar la foto a una colección, eliminar la foto de una colección y además crear colecciones para agregar en ella la foto seleccionada.',
            'La aplicación fue desarrollada en <b>React 18.3.1</b>, se encuentra alojada en <b>Netlify</b> y su base de datos de fotografías se obtiene desde <b> <a href="https://unsplash.com" target="_blank">Unsplash.com</a> </b>',
            'La aplicación se origina como un desafío propuesto en la página <a href="https://devchallenges.io" target="_blank">devchallenges.io</a> </b>. La solución puede verificarse <a href="https://devchallenges.io/solution/37177" target="_blank">aquí</a>.',
            'Nombre de la aplicación: <b>unsplashcol</b>'
        ],
        paragraph: null,
        link: 'https://willowy-boba-67faa7.netlify.app/'
    },
    {
        title: 'Catálogo de Películas',
        image: 'Cinema.png',
        video: null,
        mouse_move_title: 'Catálogo de Películas',
        mouse_move_description: 'Click aquí para ir a la aplicación',
        description: [
            'Pequeña aplicación que ofrece un catálogo de películas online en el cual se pueden buscar películas, seleccionar y ver el detalle de la película seleccionada, además de acceder a una descripción, Posters, actores y su triller.',
            'La aplicación fue desarrollada en <b>Vuejs</b>, se encuentra alojada en <b>Github pages</b> y se alimenta de la API <b> <a href="https://developers.themoviedb.org/3/getting-started/introduction" target="_blank">The Movie DB API</a> </b>',
            'Nombre de la aplicación: Cinema_vue'
        ],
        paragraph: '',
        link: 'https://marcelobravo.github.io/cinema_vue/#/'
    },
    {
        title: 'Indicadores económicos',
        image: 'exchange-trakcer.png',
        video: null,
        mouse_move_title: 'Indicadores económicos de Chile',
        mouse_move_description: 'Click aquí para ir a la aplicación',
        description: [
            'Pequeña aplicación que muestra los valores de los principales indicadores económicos en chile, tales cómo, UF, IPC, Dolar, Bitcoin, entre otros, además muestra un detalle de cada indicador, también permite observar su evolución en el último mes, su evolución en los últimos 20 años y realizar una proyección de su comportamiento esperado para los proximos 10 años. ',
            'La aplicación fue desarrollada en <b>React 18</b>, se encuentra alojada en <b>Netlify</b> y se alimenta de la API <b> <a href="https://mindicador.cl/" target="_blank">Miindicador.cl</a> </b>',
            'Nombre de la aplicación: React_exchange'
        ],
        paragraph: null,
        link: 'https://exchange-tracker-mab.netlify.app/'
    },
    {
        title: 'Tienda online desarrollada en Angular, Laravel y Mysql',
        image: null,
        video: 'https://marcelo-antonio-bravo-castillo.netlify.app/videos/tienda-angular-laravel.mp4',
        mouse_move_title: null,
        mouse_move_description: null,
        description: [
            'Proyecto que simula una tienda online, en el cual se pueden realizar busqueda de productos para ver su descripción y ser agregados a un carrito de compras, además de simular pagos utilizando WebPay en modo <i>developer</i>, además posee módulo de administración donde se pueden gestionar los productos y configurar las distintas secciones existentes en la sala de ventas de la tienda.',
            'Nombre de la aplicación: mabcapp'
        ],
        paragraph: null,
        link: null
    },
    {
        title: 'Tienda online desarrollada en React, Node y Mysql',
        image: null,
        video: 'https://marcelo-antonio-bravo-castillo.netlify.app/videos/tienda-react-node.mp4',
        mouse_move_title: null,
        mouse_move_description: null,
        description: [
            'Poyecto realizado principalmente en React 17, Node js  y MySql, que simula una tienda online, en el cual se pueden realizar búsquedas de productos, para ver su descripción y ser agregados a un carrito de compras, además de efectuar pagos simulados en la plataforma de Webpay en modo developer. También posee un módulo de administración donde se pueden gestionar los productos, configurar la sala de ventas de la tienda, entre otras cosas.',
            'Nombre de la aplicación: market_react_node'
        ],
        paragraph: null,
        link: null
    },
]
