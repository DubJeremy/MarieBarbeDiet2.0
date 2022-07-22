import ChildEating from "../svgs/childEating.svg";
import FoodPlate from "../svgs/foodPlate.svg";
import WomanCooking from "../svgs/womanCooking.svg";
import Pregnant from "../svgs/pregnant.svg";

export const AllServices = [
    {
        title: "Perte de Poids",
        desc: "Réequilibrage alimentaire",
        img: <FoodPlate />,
        left: true,
    },
    {
        title: "Pathologie",
        desc: "Les conseils dont vous avez besoin pour prendre votre santé en main",
        img: <WomanCooking  />,
        left: false,
    },
    {
        title: "Femme Enceinte/Allaitante",
        desc: "Préparez l'arrivée de votre bébé en toute sérénité",
        img: <Pregnant  />,
        left: true
    },
    {
        title: "Enfant/Adolescent",
        desc: "Les clés pour une bonne croissance (-16ans)",
        img: <ChildEating  />,
        left: false
    },
]

const [PdP, P, FEoA, EoA] = AllServices;
export const initialService = [PdP, P, FEoA, EoA];