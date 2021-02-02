import React from "react";
import "./errorIndicator.module.scss";
import icon from "../../assets/images/death-star-icon.png";

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <img className="death-star-icon" src={icon} alt="error icon" />
            <span className="boom">Внимание!</span>
            <span>1) Сработал обработчик ошибок. Это предохранитель. Не волнуйтесь. Мы уже отправили к Вам дронов, что исправить это</span>
            <span>2) Перезагрузите страницу (возможно это нужно сделать несколько раз из-за нестабильности сервера)</span>
        </div>
    );
};

export default ErrorIndicator;