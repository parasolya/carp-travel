interface Service {
    id: number;    
    number: string; 
    month: string;
    src: string;
    alt: string;
    slogan: string;
    description: string;
};

const services: Service[] = [
    { 
        id: 1, 
        number: '01', 
        month: '05', 
        src: "/photos/photo-ATVs.png", 
        alt: 'ATVs Traveling',
        slogan: 'Feel the adrenaline rush',
        description: 'Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.'
    },
    { 
        id: 2, 
        number: '02', 
        month: '05', 
        src: "/photos/photo-rock-climbing.png", 
        alt: 'Rock climbing',
        slogan: 'Destroy your limitations',
        description: 'Overcome the peaks of the Carpathians in a unique way - climbing. Make your own way to the heights and find inner peace in the embrace of the mighty rocks'
    },
    { 
        id: 3, 
        number: '03', 
        month: '05', 
        src: "/photos/photo-ballooning.png", 
        alt: 'Hot air ballooning',
        slogan: 'Get inspired',
        description: 'Feel Zen over the mountain peaks! Hot air ballooning gives you incredible impressions and panoramas of the Carpathians that seem endless.'
    },
    { 
        id: 4, 
        number: '04', 
        month: '05', 
        src: "/photos/photo-skydiving.png", 
        alt: 'Skydiving',
        slogan: 'Overcome your fears',
        description: 'Fly in the sky over the Carpathians! Experienced instructors will help you realize your dream of free flight. Remember the incredible emotions and panoramas from a bird`s eye view forever.'
    },
    { 
        id: 5, 
        number: '05', 
        month: '05', 
        src: "/photos/photo-rafting.png", 
        alt: 'Rafting',
        slogan: 'Trust the flow',
        description: 'Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.'
    },
];

export default services;

