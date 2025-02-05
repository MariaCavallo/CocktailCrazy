interface Cocktail {
    cocktail_id: string;
    name: string;
    description: string;
    country: string;
    image_url: string;
    instructions: string[];
}

export const cocktails: Cocktail[] = [
    {
        cocktail_id: "1",
        name: "Margarita",
        description: "Cóctel clásico a base de tequila y lima con borde de sal escarchada",
        country: "https://img.icons8.com/color/48/mexico-circular.png",
        image_url: "https://img.freepik.com/free-photo/homemade-margarita-drink-with-lime-palm-leaf-table-against-yellow-curtain_23-2148283665.jpg?t=st=1720818008~exp=1720821608~hmac=1c89bcb616b971da18c74843e4e0b053c3684b34af0e78696c4849c372b3a1ba&w=740",
        instructions: [
            "Frotar una rodaja de lima por el borde del vaso y luego pasarlo por un plato con sal para escarcharlo.",
            "Llenar la coctelera con hielo, añadir 50ml de tequila, 25ml de triple sec, y 25ml de zumo de lima fresco.",
            "Cerrar la coctelera y agitar vigorosamente durante 10-15 segundos para enfriar y mezclar bien.",
            "Colar la mezcla en un vaso escarchado.",
            "Decorar con una rodaja de lima en el borde del vaso.",
        ],
    },
    {
        cocktail_id: "2",
        name: "Mojito",
        description: "Refrescante bebida de menta y lima con ron blanco y soda o agua con gas",
        country: "https://img.icons8.com/color/48/cuba-circular.png",
        image_url: "https://img.freepik.com/free-photo/traditional-mojito-with-ice-mint-table_140725-867.jpg?t=st=1720818101~exp=1720821701~hmac=ee29cdb7c12632f3afaa0c4e4efe1ec9af602f4c4b80ad38af9299a99c58a33d&w=740",
        instructions: [
            "Colocar 8-10 hojas de menta fresca en el fondo de un vaso y añadir 2 cucharaditas de azúcar y el jugo de medio limón exprimido.",
            "Machacar suavemente las hojas de menta, el azúcar y el jugo de limón para liberar los aceites de la menta.",
            "Añadir 50ml de ron blanco al vaso.",
            "Llenar el vaso con hielo picado.",
            "Completar con agua con gas o soda y remover bien.",
            "Decorar con una ramita de menta y una rodaja de lima.",
        ]
    },
    {
        cocktail_id: "3",
        name: "Old Fashioned",
        description: "Cóctel tradicional de whisky o bourbon con azúcar y amargo de Angostura",
        country: "https://img.icons8.com/fluency/48/usa-circular.png",
        image_url: "https://img.freepik.com/free-photo/elegant-vegan-alcohol-arrangement_23-2149337765.jpg?t=st=1720818211~exp=1720821811~hmac=6c6022a5fb494f68c626994893833ab0d3c9f8ffe22f32ccfec72709b0911169&w=360",
        instructions: [
            "Colocar una cucharadita de azúcar en un vaso bajo.",
            "Añadir unas gotitas de amargo de Angostura y una cucharadita de agua.",
            "Mezclar hasta que el azúcar se disuelva por completo.",
            "Añadir un gran cubo de hielo al vaso.",
            "Añadir 50ml de whisky o bourbon y remover bien.",
            "Exprimir una cáscara de naranja sobre el vaso para liberar los aceites y colocarla como decoración.",
        ]
    },
    {
        cocktail_id: "4",
        name: "Piña Colada",
        description: "Dulce bebida de piña y coco con ron blanco y crema de coco o leche de coco",
        country: "https://img.icons8.com/color/48/puerto-rico-circular.png",
        image_url: "https://img.freepik.com/free-photo/milky-cocktail-glass-with-pinapple-slice-cherry_114579-2729.jpg?t=st=1720819547~exp=1720823147~hmac=53bf9c68dcc2aaec1097c55d00e342d573026aca051362cb6b964eab240d3b08&w=740",
        instructions: [
            "Colocar 100ml de ron blanco, 100ml de crema de coco (o leche de coco) y 200ml de jugo de piña en una licuadora.",
            "Añadir 2 tazas de hielo y licuar hasta obtener una mezcla homogénea.",
            "Verter la mezcla en un vaso alto y decorar con una rodaja de piña y una guinda.",
            "Agregar una sombrilla de cóctel como toque final si lo deseas.",
        ]
    },
    {
        cocktail_id: "5",
        name: "Dry Martini",
        description: "Elegante cóctel de ginebra y vermut seco con aceituna o limón",
        country: "https://img.icons8.com/fluency/48/usa-circular.png",
        image_url: "https://img.freepik.com/free-photo/vodka-martini-cocktail-with-vodka-vermouth-green-olives-wooden-table_123827-32809.jpg?t=st=1721759600~exp=1721763200~hmac=429559bc1834d89d963c6c8219f1d7761f1dade061e48f25eb5ca610f6b49eef&w=740",
        instructions: [
            "Enfriar una copa de martini en el congelador.",
            "Llenar una coctelera con hielo y añadir 60ml de ginebra y 10ml de vermut seco.",
            "Agitar la coctelera durante 10-15 segundos para enfriar y mezclar bien.",
            "Colar la mezcla en la copa de martini fría.",
            "Decorar con una rodaja de limón o una aceituna verde.",
        ]
    },
    {
        cocktail_id: "6",
        name: "Daiquiri",
        description: "Sencilla bebida de ron, lima y azúcar",
        country: "https://img.icons8.com/color/48/cuba-circular.png",
        image_url: "https://img.freepik.com/free-photo/cocktail_144627-22146.jpg?t=st=1721759665~exp=1721763265~hmac=9733a7bac641d5c13b5e7dc5083a8517d545eaff2deae9fa134b58056695160f&w=740",
        instructions: [
            "Llenar una coctelera con hielo y añadir 50ml de ron blanco, 25ml de zumo de lima fresco y 15ml de jarabe de azúcar.",
            "Agitar la coctelera durante 10-15 segundos para enfriar y mezclar bien.",
            "Colar la mezcla en una copa de cóctel fría.",
            "Decorar con una rodaja de lima en el borde de la copa.",
        ]
    },
    {
        cocktail_id: "7",
        name: "Negroni",
        description: "Cóctel amargo y aromático de ginebra, vermut rojo y Campari con naranja",
        country: "https://img.icons8.com/fluency/48/italy-circular.png",
        image_url: "https://img.freepik.com/free-photo/horizontal-view-fresh-delicious-juice-glass-with-orange-limes-dark-background_140725-140818.jpg?t=st=1721759720~exp=1721763320~hmac=5f6728781303b65cf67931aa3760f7b77ebb5721d72d45be12e4ec81cfe54ac4&w=740",
        instructions: [
            "Llenar una copa de vino con hielo para enfriarla.",
            "Llenar una coctelera con hielo y añadir 30ml de ginebra, 30ml de vermut rojo y 30ml de Campari.",
            "Agitar la coctelera durante 10-15 segundos para enfriar y mezclar bien.",
            "Colar la mezcla en la copa de vino fría.",
            "Decorar con una rodaja de naranja o una cáscara de naranja.",
        ]
    },
    {
        cocktail_id: "8",
        name: "Moscow Mule",
        description: "Vodka, cerveza de jengibre y lima en un vaso de cobre con menta",
        country: "https://img.icons8.com/fluency/48/usa-circular.png",
        image_url: "https://www.campariacademy.com/es-mx/wp-content/uploads/sites/12/2022/08/moscow-mule-banner-destaque-1200x800-1-480x600.jpg",
        instructions: [
            "Llenar un vaso de cobre con hielo.",
            "Añadir 50ml de vodka y 150ml de cerveza de jengibre (ginger beer).",
            "Exprimir el jugo de media lima en el vaso.",
            "Remover bien, decorar con una rodaja de lima y una ramita de menta.",
        ]
    },
    {
        cocktail_id: "9",
        name: "Cosmopolitan",
        description: "Elegante bebida de vodka y arándano con triple sec y limón",
        country: "https://img.icons8.com/fluency/48/usa-circular.png",
        image_url: "https://img.freepik.com/free-photo/side-view-red-martini-cocktail-glass-with-lemon-red-berries_176474-2509.jpg?t=st=1721760131~exp=1721763731~hmac=ed551837662df5f5e166976ae54fd2891d84ee83fac8dc60f3306a0a9ca49cd1&w=740",
        instructions: [
            "Llenar una coctelera con hielo y añadir 50ml de vodka, 25ml de triple sec, 25ml de jugo de arándano y 15ml de jugo de limón.",
            "Agitar la coctelera durante 10-15 segundos para enfriar y mezclar bien.",
            "Colar la mezcla en una copa de cóctel fría.",
            "Decorar con una rodaja de lima o una cáscara de limón.",
            "Opcional: decorar con una guinda.",
        ]
    },
    {
        cocktail_id: "10",
        name: "Bloody Mary",
        description: "Cóctel picante a base de tomate y vodka con limón, salsa Worcestershire y Tabasco",
        country: "https://img.icons8.com/fluency/48/usa-circular.png",
        image_url: "https://www.campariacademy.com/es-mx/wp-content/uploads/sites/12/2022/08/bloody-mary-banner-destaque-1200x800-1-480x600.jpg",
        instructions: [
            "Llenar un vaso alto con hielo.",
            "Añadir 50ml de vodka, 150ml de jugo de tomate, 15ml de jugo de limón, 5ml de salsa Worcestershire y unas gotas de Tabasco.",
            "Remover bien y decorar con una rodaja de limón, una rodaja de lima, una ramita de apio y una aceituna verde.",
        ]
    },
    {
        cocktail_id: "11",
        name: "Caipirinha",
        description: "Bebida brasileña de cachaça y lima con azúcar",
        country: "https://img.icons8.com/fluency/48/brazil-circular.png",
        image_url: "https://img.freepik.com/free-photo/delicious-beverage-with-mint-leaves_23-2148751852.jpg?t=st=1721767899~exp=1721771499~hmac=07989cd6e9e3542a289e9454adfb61512787568e434471773024311b3f841803&w=740",
        instructions: [
            "Cortar una lima en trozos y colocarlos en un vaso bajo.",
            "Añadir 2 cucharaditas de azúcar y machacar suavemente para extraer el jugo de la lima.",
            "Añadir 50ml de cachaça y remover bien.",
            "Llenar el vaso con hielo picado y remover de nuevo.",
            "Decorar con una rodaja de lima.",
        ]
    },
    {
        cocktail_id: "12",
        name: "Whiskey Sour",
        description: "Whisky, jugo de limón, azúcar, hielo y una rodaja de limón o cereza",
        country: "https://img.icons8.com/fluency/48/usa-circular.png",
        image_url: "https://img.freepik.com/free-photo/iced-beverage-cup-front-view_23-2148340059.jpg?t=st=1721767626~exp=1721771226~hmac=d8b66d45fea24e86d3b02321b24679434ef0a5c2c635305b3c515a94556baa43&w=740",
        instructions: [
            "Llenar una coctelera con hielo y añadir 50ml de whisky, 25ml de jugo de limón y 15ml de jarabe de azúcar.",
            "Agitar la coctelera durante 10-15 segundos para enfriar y mezclar bien.",
            "Colar la mezcla en una copa de cóctel fría.",
            "Decorar con una rodaja de limón o una cereza.",
        ]
    },
    {
        cocktail_id: "13",
        name: "Bellini",
        description: "Bebida espumosa de durazno y prosecco, originaria de Venecia (Italia)",
        country: "https://img.icons8.com/fluency/48/italy-circular.png",
        image_url: "https://img.freepik.com/free-photo/cocktails_1203-6730.jpg?t=st=1721768332~exp=1721771932~hmac=e6ead9db9b5bb65380afc765098872825fc57132bfa0fb42851a6b5149b6d1eb&w=740",
        instructions: [
            "Verter 50ml de puré de durazno en una copa de champán.",
            "Completar con prosecco bien frío.",
            "Remover suavemente y decorar con una rodaja de durazno.",
        ]
    },
    {
        cocktail_id: "14",
        name: "Tom Collins",
        description: "Refrescante cóctel de ginebra y limón con agua con gas o soda",
        country: "https://img.icons8.com/fluency/48/usa-circular.png",
        image_url: "https://img.freepik.com/free-photo/refreshing-citrus-cocktail-tall-drinking-glass-generated-by-ai_188544-15368.jpg?t=st=1721768000~exp=1721771600~hmac=08f088de2bee8c41cd9ddae5e459959b075b34dd1504b44e22dbeafdb7036d5b&w=740",
        instructions: [
            "Llenar un vaso alto con hielo.",
            "Añadir 50ml de ginebra, 25ml de jugo de limón y 15ml de jarabe de azúcar.",
            "Completar con agua con gas o soda y remover bien.",
            "Decorar con una rodaja de limón y una cereza.",
        ]
    },
    {
        cocktail_id: "15",
        name: "Mai Tai",
        description: "Cóctel tropical a base de ron blanco, ron oscuro, triple sec y almendra con limón",
        country: "https://img.icons8.com/color/48/usa-circular.png",
        image_url: "https://www.campariacademy.com/es-mx/wp-content/uploads/sites/12/2023/07/IMG_1182-480x600.jpeg",   
        instructions: [
            "Llenar una coctelera con hielo y añadir 50ml de ron blanco, 25ml de ron oscuro, 25ml de triple sec, 25ml de jugo de limón y 15ml de jarabe de almendra.",
            "Agitar la coctelera durante 10-15 segundos para enfriar y mezclar bien.",
            "Colar la mezcla en un vaso bajo con hielo picado.",
            "Decorar con una rodaja de limón y una ramita de menta.",
            "Opcional: decorar con una sombrilla de cóctel.",
        ]
    },
    {
        cocktail_id: "16",
        name: "Pisco Sour",
        description: "Cóctel peruano de pisco, limón con clara de huevo y amargo de Angostura",
        country: "https://img.icons8.com/color/48/peru-circular.png",
        image_url: "https://img.freepik.com/foto-gratis/bebida-verde-espuma-fondo-blanco_114579-3143.jpg?t=st=1738585299~exp=1738588899~hmac=8983c67ffb0360ab8c58db7677a27620c625a0e53f2f2317d5202892e535303d&w=360",
        instructions: [
            "Llenar una coctelera con hielo y añadir 50ml de pisco, 25ml de jarabe de azúcar y 25ml de jugo de limón.",
            "Agregar una clara de huevo y agitar la coctelera durante 10-15 segundos para enfriar y mezclar bien.",
            "Colar la mezcla en una copa de cóctel fría.",
            "Decorar con unas gotas de amargo de Angostura.",
            "Opcional: decorar con una rodaja de limón.",
        ]
    },
]