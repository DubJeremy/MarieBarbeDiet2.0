import { useEffect, useRef } from 'react';
import styles from "./header.module.scss";
import { getDocHeight } from  '../../styles/utils/docSize.utils';


function Header() {
    const appRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (appRef.current) {
			appRef.current.style.height = getDocHeight();
		}
	}, []);

    return (
        <div ref={appRef}  className={styles.header}>
            <h1>
                
            </h1>
        </div>
    );
}

export default Header;