import ChildEatingXS from "../../public/images/xs/childEatingXS.png";
import FoodPlateXS from "../../public/images/xs/foodPlateXS.png";
import WomanCookingXS from "../../public/images/xs/womanCookingXS.png";
import PregnantXS from "../../public/images/xs/WomenPregnantXS.png";
import ChildEatingS from "../../public/images/s/childEatingS.png";
import FoodPlateS from "../../public/images/s/foodPlateS.png";
import WomanCookingS from "../../public/images/s/womanCookingS.png";
import PregnantS from "../../public/images/s/WomenPregnantS.png";
import ChildEatingM from "../../public/images/m/childEatingM.png";
import FoodPlateM from "../../public/images/m/foodPlateM.png";
import WomanCookingM from "../../public/images/m/womanCookingM.png";
import PregnantM from "../../public/images/m/WomenPregnantM.png";
import ChildEatingL from "../../public/images/l/childEatingL.png";
import FoodPlateL from "../../public/images/l/foodPlateL.png";
import WomanCookingL from "../../public/images/l/womanCookingL.png";
import PregnantL from "../../public/images/l/WomenPregnantL.png";

export const AllServices = [
    {
        id: 0,
        title: "Perte de Poids",
        desc: "Réequilibrage alimentaire",
        imgXS: FoodPlateXS,
        imgS: FoodPlateS,
        imgM: FoodPlateM,
        imgL: FoodPlateL,
        left: true,
        alt: "plat healthy"
    },
    {
        id: 1,
        title: "Pathologie",
        desc: "Les conseils dont vous avez besoin pour prendre votre santé en main",
        imgXS: WomanCookingXS,
        imgS: WomanCookingS,
        imgM: WomanCookingM,
        imgL: WomanCookingL,
        left: false,
        alt: "femme qui cuisine"
    },
    {
        id: 2,
        title: "Femme Enceinte / Allaitante",
        desc: "Préparez l'arrivée de votre bébé en toute sérénité",
        imgXS: PregnantXS,
        imgS: PregnantS,
        imgM: PregnantM,
        imgL: PregnantL,
        left: true,
        alt: "femme enceinte"
    },
    {
        id: 3,
        title: "Enfant / Adolescent",
        desc: "Les clés pour une bonne croissance (-16ans)",
        imgXS: ChildEatingXS,
        imgS: ChildEatingS,
        imgM: ChildEatingM,
        imgL: ChildEatingL,
        left: false,
        alt: "enfant mange une pastèque"
    },
];

const [PdP, P, FEoA, EoA] = AllServices;
export const initialService = [PdP, P, FEoA, EoA];
