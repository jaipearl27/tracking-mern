import React from "react";
import styles from "../ConversionsViewer/ConversionsViewer.module.scss";

type TotalValueProps = {
    values: { [currency: string]: number };
};

const TotalValue: React.FC<TotalValueProps> = ({ values }) => {
    return (
        <section className={styles.gridSection}>
            <h2>Total Value</h2>
            <div className={styles.gridContainer}>
                {Object.entries(values).map(([currency, value], index) => (
                    <div key={index} className={styles.card}>
                        <h3>{currency}</h3>
                        <p>Value: {value.toFixed(2)}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TotalValue;
