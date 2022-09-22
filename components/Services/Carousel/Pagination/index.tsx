import { AnimatePresence } from "framer-motion";

import { AllServices } from "../../AllServices";
import Dot from "./dot";

type Props = {
    currentPage: number;
    paginate: any;
    idService: number;
};

export default function Pagination({
    currentPage,
    paginate,
    idService,
}: Props) {
    return (
        <AnimatePresence>
            {AllServices.map((service, id) => (
                <Dot
                    key={id}
                    onClick={() => paginate(id - currentPage)}
                    isSelected={service.id === idService}
                />
            ))}
        </AnimatePresence>
    );
}
