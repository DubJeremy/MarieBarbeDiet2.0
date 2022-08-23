import { motion } from "framer-motion";

import styles from "./pagination.module.scss";

type Props = {
    isSelected: boolean
    onClick: any
}

function Dot({ isSelected, onClick }: Props) {
    return (
        <div className={styles.dotContainer} onClick={onClick}>
            <div className={styles.dot}>
                {isSelected && (
                    <motion.div
                        className={styles.dotHighlight}
                        layoutId="highlight"
                    />
                )}
            </div>
        </div>
    );
}

export default Dot;
