import React from "react";
import styles from "./errorIndicator.module.scss";
import icon from "../../assets/images/death-star-icon.png";

const ErrorIndicator = () => {
    return (
        <div className={styles.errorIndicator}>
            <div className={styles.container}>
                <img className={styles.deathStarIcon} src={icon} alt="error icon" />
                <h2 className={styles.boom}>Внимание!</h2>
                <p>1) Сработал обработчик ошибок. Это предохранитель. Не волнуйтесь. Мы уже отправили к Вам дронов, что исправить это</p>
                <p>2) Перезагрузите страницу (возможно это нужно сделать несколько раз из-за нестабильности сервера)</p>
            </div>
        </div>
    );
};

export default ErrorIndicator;