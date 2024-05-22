const datos = [
    {
        "id": 0,
        "direccion": "Av. Rivadavia 8328, CABA",
        "foto1": "../images/1_.jpeg",
        "foto2": "../images/1_2.jpeg",
        "foto3": "../images/1_3.jpeg",
        "foto4": "../images/1_4.jpeg",
        "reservas": [],
        "precio": "$5.80",
        "caracteristicas": [100, 1, false, true, true, true, true, true, true, true, true, true, true, true],
        "mapa": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.8305666287274!2d-58.483252023502274!3d-34.63372175908469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc9972f2d9ceb%3A0xb475066fb549cf97!2sAv.%20Rivadavia%208328%2C%20C1407%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1716146430546!5m2!1ses-419!2sar",
        "disponible": true,
        "descripcion": "Espacio Rivadavia. Salon de Eventos - Cumpleaños - Casamientos - Comuniones - Bautismos - Cumples XV - Despedidas",
    },
    {
        "id": 1,
        "direccion": "Av. Pres. Figueroa Alcorta 7285, CABA",
        "foto1": "../images/2_.jpeg",
        "foto2": "../images/2_2.jpeg",
        "foto3": "../images/2_3.jpeg",
        "foto4": "../images/2_4.jpeg",
        "reservas": [],
        "precio": "$10.80",
        "caracteristicas": [200, 2, true, false, true, true, true, true, true, true, true, true, true, true],
        "mapa": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.245048159491!2d-58.446926723505705!3d-34.54735045452495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb43716409723%3A0xc77f779b3f5ba7a4!2sAv.%20Pres.%20Figueroa%20Alcorta%207285%2C%20C1428%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1716146989406!5m2!1ses-419!2sar",
        "disponible": false,
        "descripcion": "Convite Eventos. Fiestas - Corporativos. Salón vidriado rodeado de arboles y luz natural, deck exterior y jardín.",
    },
    {
        "id": 2,
        "direccion": "Crámer 1428, CABA",
        "foto1": "../images/3_.jpeg",
        "foto2": "../images/3_2.jpeg",
        "foto3": "../images/3_3.jpeg",
        "foto4": "../images/3_4.jpeg",
        "reservas": [],
        "precio": "$15.80",
        "caracteristicas": [300, 3, true, true, false, true, true, true, true, true, true, true, true, true],
        "mapa": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.314586323171!2d-58.45688242350472!3d-34.57090575576732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5dafe5cdf87%3A0x79c6ae87c1256fcd!2sCr%C3%A1mer%201428%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1716147227649!5m2!1ses-419!2sar",
        "disponible": false,
        "descripcion": "Casa Cramer. Más de 20 años de experiencia en el segmento de eventos corporativos y sociales de mediano y alto volumen. Un espacio que ofrece un verdadero servicio integral a la altura de tus necesidades y expectativas.",
    },
    {
        "id": 3,
        "direccion": "Puan 644, CABA",
        "foto1": "../images/4_.jpeg",
        "foto2": "../images/4_2.jpeg",
        "foto3": "../images/4_3.jpeg",
        "foto4": "../images/4_4.jpeg",
        "reservas": [],
        "precio": "$20.80",
        "caracteristicas": [400, 4, true, true, true, false, true, true, true, true, true, true, true, true],
        "mapa": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.9673227320786!2d-58.44825722350225!3d-34.63026605890217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca36ad98ddeb%3A0xe9cd33651d086713!2sParque%20Chacabuco%2C%20Pu%C3%A1n%20644%2C%20C1406CQN%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1716147914748!5m2!1ses-419!2sar",
        "disponible": false,
        "descripcion": "Espacio Puan. Cumples XV - Casamientos - Post Civil - Cumples adultos - Bautismos - Comuniones - Despedidas - Egresados - Graduaciones"

    },
    {
        "id": 4,
        "direccion": "Av. Hipólito Yrigoyen 3304, CABA",
        "foto1": "../images/5_.jpeg",
        "foto2": "../images/5_2.jpeg",
        "foto3": "../images/5_3.jpeg",
        "foto4": "../images/5_4.jpeg",
        "reservas": [],
        "precio": "$25.80",
        "caracteristicas": [500, 5, true, true, true, true, false, true, true, true, true, true, true, true],
        "mapa": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.6580083970002!2d-58.416076923503084!3d-34.612808457979675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccaf6933f5827%3A0x1a8c8413cdfa2d0!2sAv.%20Hip%C3%B3lito%20Yrigoyen%203304%2C%20C1208ABN%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1716148191992!5m2!1ses-419!2sar",
        "disponible": false,
        "descripcion": "Palacio Almagro Eventos. Siempre en tus mejores momentos. Salon de eventos Sociales, Corporativos e Infantiles.",
    },
    {
        "id": 5,
        "direccion": "Valle 715, CABA",
        "foto1": "../images/6_.jpeg",
        "foto2": "../images/6_2.jpeg",
        "foto3": "../images/6_3.jpeg",
        "foto4": "../images/6_4.jpeg",
        "reservas": [],
        "precio": "$30.80",
        "caracteristicas": [600, 6, true, true, true, true, true, false, true, true, true, true, true, true],
        "mapa": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.1912347157327!2d-58.44057262350274!3d-34.62460735860297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca48661ba76b%3A0x185b4cad1c9c845!2sValle%20715%2C%20C1424%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1716148727908!5m2!1ses-419!2sar",
        "disponible": false,
        "descripcion": "Casa Valle. Podes realizar todo tipo de reuniones, festejos informal (civil, comunión, bautismo, cumpleaños).La casa se alquila Sábado, domingos y feriados durante el día y por la noche hasta las 22hs.",
    },
    {
        "id": 6,
        "direccion": "Av. Corrientes 1900, CABA",
        "foto1": "../images/7_.jpeg",
        "foto2": "../images/7_2.jpeg",
        "foto3": "../images/7_3.jpeg",
        "foto4": "../images/7_4.jpeg",
        "reservas": [],
        "precio": "$35.80",
        "caracteristicas": [700, 7, true, true, true, true, true, true, false, true, true, true, true, true],
        "mapa": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.9836755901106!2d-58.393748499999994!3d-34.604574299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac1dc9c0c89%3A0xb038bcc23da9b9f8!2sAv.%20Corrientes%201900%2C%20C1045AAO%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1716151833850!5m2!1ses-419!2sar",
        "disponible": false,
        "descripcion": "Salón Espacio 14. Lugar ideal para eventos coroporativos, civiles, cumpleaños y casamientos chicos. Capacidad hasta 70 personas.",
    },
    {
        "id": 7,
        "direccion": "Luis María Drago 151, CABA",
        "foto1": "../images/8_.jpeg",
        "foto2": "../images/8_2.jpeg",
        "foto3": "../images/8_3.jpeg",
        "foto4": "../images/8_4.jpeg",
        "reservas": [],
        "precio": "$40.80",
        "caracteristicas": [800, 8, true, true, true, true, true, true, true, false, true, true, true, true],
        "mapa": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0617324825084!2d-58.43853772350344!3d-34.60260045744035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca7272c22b5b%3A0x103bb69ef0a79dea!2sLuis%20Mar%C3%ADa%20Drago%20151%2C%20C1414%20Villa%20Crespo%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1716152153805!5m2!1ses-419!2sar",
        "disponible": false,
        "descripcion": "Rufino Eventos. 10 años acompañando a cada persona en su momento especial. Salones en Palermo y Villa Crespo elegidos y ambientados con mucho amor y dedicación",
    },


];

const noticias = [
    {
        "id": 0,
        "titulo": "La importancia de la música en los eventos",
        "imagen": "../images/noticias/fiesta.jpeg",
        "texto": "En el artículo de hoy, destacamos la importancia de la música en todo tipo de eventos. Consideramos que, tan importante es contar con un lugar especial para el evento o un delicioso catering, como escoger la música adecuada para cada momento.En algunos eventos estamos tan centrados en todas las partidas del mismo, que en ciertas ocasiones algunos detalles pueden pasar desapercibidos, y esos mismos son los que dan el toque de perfección y los que crean los grandes eventos.La música nos ha acompañado a lo largo de los años, evolucionando y ofreciendo nuevos ritmos y estilos, pero siempre con la intención de emocionar, cautivar y captar la atención de los que la están escuchando.La música transmite sensaciones y sentimientos, que variarán según el género de la misma, por ello es imprescindible escoger la mejor sección musical para cada momento del evento, a través de la cual conseguiremos diferentes objetivos.A continuación, comentamos algunos consejos para escoger la mejor música para cada ocasión:Para coffee breaks, copas de bienvenida, comidas o cenas tipo cóctel, o pequeñas pausas, recomendamos listas de reproducción con canciones actuales, en acústico o chill out. Son momentos en los que los asistentes aprovechan para juntarse, hacer networking e intercambiar ideas, por ello, recomendamos contar con un hilo musical que incite a la comunicación entre los mismos.En cambio, para comidas o cenas en formato banquete, recomendamos utilizar músicas más relajadas y tranquilas. Un hilo musical de fondo que permita a los asistentes comunicarse sin problemas y disfrutar de la cena.Entrada y salida de los invitados. Uno de los momentos en los que más tiempo se invierte, sobre todo en eventos de grandes grupos. Para agilizar las entradas y salidas a diferentes salones o el sitting de un gran grupo recomendamos utilizar una música animada, que incite al movimiento, para así intentar reducir al máximo los tiempos invertidos en este proceso.Si el evento lo permite y concuerda con el mismo, no hay nada mejor que contar con música en directo para ofrecer una nueva experiencia a los asistentes. Durante el catering, en los momentos de networking y desconexión... ¡Cualquier momento es bueno para disfrutar de buena música!",
        "fecha": "03/03/2024"
    },
    {
        "id": 1,
        "titulo": "¿Cómo agilizar la entrada de asistentes a tu evento?",
        "imagen": "../images/noticias/entrada.jpeg",
        "texto": "¡Nuestro mayor reto o nuestra peor pesadilla! Es imprescindible tener un registro de asistentes ligero, ágil y que no entorpezca la organización de todo el evento.No nos gusta esperar; ni en el supermercado, ni en una tienda, ni para comprar las entradas de esa película que tanto deseas ver. Si esperar una cola ya es horroroso para todos, no hay nada peor que tener un registro de asistentes lento y torpe.La primera impresión del evento es imprescindible, y si esa se resume a esperar, ¡no es buena señal! Pero tenemos soluciones.¿Cómo puedes agilizar la entrada de asistentes a tu evento? Te damos algunos consejos a continuación: *Establece varios puntos de entrada: Dependiendo de la  numeración de los tiquets, establecer una puerta u otra; permite agilizar mucho el proceso y evitar colapsos. En el caso de tener 1 única puerta, podemos plantear la opción de citar a los asistentes por franjas horarias, siempre que el desarrollo del evento lo permita.*¡Divide y vencerás! Crea cuantas más filas y colas de registro mejor. Eso sí, por supuesto bien organizadas y colocadas en un lugar estratégico Es imprescindible que el flujo y paso de la gente sea lo más limpio posible, sin impedimentos ni obstáculos que puedan paralizar el paso.*Mantener una señalización simple y clara desde el registro hasta la sala principal del evento. Del mismo modo que, contar con personal de apoyo en este recorrido también puede ser primordial y evitará que tengamos gente perdida por los pasillos.",
        "fecha": "04/03/2024"
    },
    {
        "id": 2,
        "titulo": "cómo escoger un buen catering y tener un evento de exito",
        "imagen": "../images/noticias/catering.jpeg",
        "texto": "Todos sabemos que el catering es uno de los elementos más importantes de un evento, y seguro que alguna vez te has sentido en un aprieto cuando te han “obligado” a trabajar con uno en concreto. En ciertas ocasiones algunos espacios trabajan en exclusividad con 1, 2 o 3 caterings; algunos clientes nos piden que en su evento utilicemos un catering en concreto… y probablemente no conocemos cómo trabajan.Y con esa decisión te juegas todo el evento, ya que si a los asistentes no les gusta el catering, el recuerdo que tendrán es que toda la organización del evento no fue la adecuada:comida escasa, mala calidad y lentitud.A continuación, te damos algunos consejos para tener éxito en la elección de tu catering:*TENER REFERENCIAS PREVIAS, IMPRESCINDIBLE! Si personalmente no has probado ese catering pero sí tienes varios compañeros de profesión que lo han hecho y siempre con buenas referencias, adelante! Puedes valorar su propuesta y proponerla a tu cliente.*PRUEBA EL MENU, Siempre sería recomendable hacer una prueba de menú previa, pero en ciertas ocasiones no es tan sencillo. Por supuesto, en eventos de mayor magnitud, es imprescindible solicitarla para evitar futuros problemas con el cliente.*CONTROLA EL TIEMPO, Como hemos comentado al principio del post, la lentitud es uno de los mayores problemas que nos podemos encontrar. Tanto si tenemos una comida o cena sentados como si es tipo cóctel. El hecho de que el servicio y la cocina sea lento puede convertirse en nuestro peor enemigo! Si ves que eso empieza a suceder,  pon remedio e intenta agilizarlo antes de que sea demasiado tarde.",
        "fecha": "05/03/2024"
    },
    {
        "id": 3,
        "titulo": "Organizá tu evento saludable",
        "imagen": "../images/noticias/salon.jpeg",
        "texto": "En una sociedad cada vez más consciente de la importancia de la salud y el bienestar físico y mental, es imprescindible encontrar un equilibrio, también en los eventos.El término wellness ya ha empezado a revolucionar el sector, intentando adaptarse a las necesidades del cliente y a ofrecerle un evento que realmente se preocupe por su salud y bienestar. Un término que lo que intenta conseguir es un equilibrio saludable entre el estado físico, mental y emocional, obteniendo resultados de bienestar general.LA IMPORTANCIA DEL BIENESTAR:Trabajadores con un ritmo de vida acelerado, directivos acostumbrados a viajar y a no parar, son algunos de los asistentes a nuestros eventos. Para todos ellos, es un día de desconexión, de cambios, de eliminar las etiquetas y las corbatas y por fin respirar.Por ello, también es importante adaptar la cultura del evento, además de cada detalle para conseguir que los asistentes se sientan protegidos y cuidados por su empresa. ¡Y cada vez son más los que se suman a esta iniciativa!A continuación, te dejamos algunas ideas que pueden ser útiles para organizar tus eventos wellness:EL CATERING Eliminamos las comidas pesadas y las transformamos en menús ligeros.Imprescindible estar bien hidratados! El agua no debe faltar en ningún momento del día, además, recomendamos ofrecer smoothies saludables a los asistentes (Una propuesta que funciona muy bien es incluir un corner con smoothies y que los propios asistentes puedan escoger los ingredientes. ¡Éxito asegurado!)¡Los snacks saludables son imprescindibles, no te olvides de ellos! TIEMPO OFFLINE Nos pasamos casi 24h pegados a las pantallas entre ordenadores, móviles, tablets y relojes inteligentes varios… Está comprobado que reducir el tiempo frente a las pantallas reduce la ansiedad y el estrés, mejora la calidad del sueño y la atención, entre otros beneficios. DESCANSOS Breaks y paradas para desconectar y conectar con el resto de asistentes, hacer esa llamada urgente que has dejado pendiente y necesitas solucionar, entre otras cosas. Es imprescindible ofrecer momentos relajados para que los asistentes se evadan y cojan energía para volver al evento.ACTIVIDADES: Un taller de cocina saludable es una experiencia en la que los asistentes disfrutarán cocinando y que después podrán aplicar en su día a día Experiencias sobre hábitos saludables. Todos tenemos unas nociones básicas sobre lo que es y no saludable, pero no hay nada como que un experto nos haga experimentar estos hábitos con nuestro propio cuerpo y nos muestre el mejor camino para seguir una rutina saludable.EL LUGAR DEL EVENTO:Escoger un lugar adecuado para el evento, que concuerde y se preocupe por la cultura wellness es algo imprescindible. Para transmitir esta cultura debemos conseguir una unión entre todas las partidas del evento, y el venue o espacio donde se realiza, finalmente es lo que engloba todo. Los asistentes no sentirán lo mismo si el evento se celebra en un edificio acristalado con vistas a una gran ciudad, que si se celebra en una finca rodeada de naturaleza. En este caso, lógicamente, escogemos sin duda la segunda opción.",
        "fecha": "06/03/2024"
    },
    {
        "id": 4,
        "titulo": "Razones para crear una App para tu evento",
        "imagen": "../images/noticias/eventos.jpeg",
        "texto": "¿Estás pensando en crear una aplicación para tu evento? Nuestra recomendación es que no lo pienses más.La organización de cualquier tipo de evento siempre es una tarea muy compleja. Lidiar con todos los proveedores, satisfacer las necesidades del cliente y conseguir que el evento sea un éxito es un gran reto, pero debemos ir más allá.Desde el primer minuto de la organización debemos pensar también con la visión del asistente y crear cada detalle para que disfrute de la jornada. ¿Cuál es el mayor problema en algunos eventos? Que el asistente dispone de la información en múltiples lugares; entre el correo, la página web del evento, los folletos informativos que se entregan… la dispersión es máxima y no es una situación cómoda para los que intentan disfrutar del evento pero no recuerdan donde está la información que necesitan en cada momento.¡Con la creación de una aplicación solucionamos ese problema! De una forma más simple o más compleja, agrupa toda la información y es un lugar donde el usuario podrá disponer de cada detalle.Una aplicación puede utilizarse en cualquier tipo de evento para mejorar la experiencia del usuario, pero es imprescindible contar con ellas en eventos de muchos asistentes: grandes ferias, congresos y festivales son algunos de los ejemplos en los que no deberían faltar.A continuación, te damos 5 razones para tener una aplicación en tus eventos:1.AVISO A TIEMPO REAL:Con una agenda que puede detallar todo lo que ocurre minuto a minuto en el evento (ponencias, charlas, workshops…), la aplicación permite recibir notificaciones  y avisos de lo que va a suceder próximamente; 2.MAPAS Y MAYOR FACILIDAD EN LA BÚSQUEDA DE ESPACIOS:En eventos realizados en grandes espacios, en ciertas ocasiones es difícil para el asistente ubicarse y encontrar los stands o salas a las que quiere llegar. ¡Con una App para eventos los localizarán con mucha más facilidad!;3.MEJORA LA COMUNICACIÓN:La comunicación suele ser un aspecto complejo en grandes eventos. Mantener a todos los asistentes informados en todo momento supone un gran coste de personal si no se utiliza la tecnología. Con una aplicación, conseguimos mantener informados a todos los asistentes y organizadores del evento;4.ARCHIVOS ADJUNTOS:En ponencias y charlas es interesante poder contar con la presentación expuesta, que normalmente debe enviarse por correo a todos los asistentes una vez acabado el evento. Tener una aplicación, permite adjuntar archivos que todos los asistentes podrán descargar en sus dispositivos al momento;5.EVENTO MÁS SUSTENTABLE:Puesto que toda la información está en la aplicación (acreditaciones, programa, información de patrocinadores...), se reduce el consumo de papel, creando un evento más sostenible y ecológico.Hasta aquí nuestras 5 razones para crear una aplicación para tu evento, ya sea de menor o mayor es la solución perfecta para mejorar la experiencia del usuario y la organización. Una opción que además se puede personalizar con colores, logotipos e imágenes de cada evento.Debemos ver la tecnología como un complemento que nos ayuda a seguir mejorando. ¿Te animas a utilizarla en tu próximo evento?",
        "fecha": "07/03/2024"
    },

];

