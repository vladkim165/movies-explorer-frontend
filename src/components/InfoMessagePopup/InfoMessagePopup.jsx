import React, { memo, useContext } from "react";
import "./InfoMessagePopup.scss";
import PropTypes from "prop-types";
import CurrentInfoMessageContext from "../../contexts/CurrentInfoMessageContext";
import useOutsideClick from "../../hooks/useOutsideClick";

const InfoMessagePopup = ({ isInfoMessage, onInfoMessage }) => {
  const { success, message } = useContext(CurrentInfoMessageContext);
  const { ref } = useOutsideClick(isInfoMessage, onInfoMessage);

  return isInfoMessage ? (
    <div className="message-popup" ref={ref}>
      <button
        className="message-popup__close-button"
        type="button"
        alt="Закрыть"
        onClick={() => onInfoMessage(false)}
      ></button>
      <h3
        className={`message-popup__title ${
          success
            ? "message-popup__title_success"
            : "message-popup__title_error"
        }`}
      >
        {`${success ? "Все прошло успешно" : "Произошла ошибка"}`}
        <span role="img" aria-label="sheep">
          {success ? ` 🎉` : ` ❌`}
        </span>
      </h3>
      <p className="message-popup__message">{message}</p>
    </div>
  ) : null;
};

InfoMessagePopup.propTypes = {
  isInfoMessage: PropTypes.bool.isRequired,
  onInfoMessage: PropTypes.func.isRequired,
};

export default memo(InfoMessagePopup);
