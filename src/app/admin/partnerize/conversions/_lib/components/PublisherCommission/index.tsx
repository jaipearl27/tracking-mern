import React from "react";
import styles from "../ConversionsViewer/ConversionsViewer.module.scss";

type PublisherCommissionProps = {
    commissions: { [currency: string]: number };
};

const PublisherCommission: React.FC<PublisherCommissionProps> = ({ commissions }) => {
    return (
        <section className={styles.gridSection}>
            <h2>Total Publisher Commission</h2>
            <div className={styles.gridContainer}>
                {Object.entries(commissions).map(([currency, commission], index) => (
                    <div key={index} className={styles.card}>
                        <h3>{currency}</h3>
                        <p>Commission: {commission.toFixed(2)}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PublisherCommission;
