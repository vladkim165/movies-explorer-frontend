import React, { memo, useContext } from "react";
import "./InfoMessagePopup.scss";
import PropTypes from "prop-types";
import useOutsideClick from "../../hooks/useOutsideClick";
import CurrentInfoMessageContext from "../../contexts/CurrentInfoMessageContext";

const InfoMessagePopup = ({ isInfoMessage, onInfoMessage, infoMessage }) => {
  const setInfoMessage = useContext(CurrentInfoMessageContext);
  const { ref } = useOutsideClick(isInfoMessage, onInfoMessage);
  const { message = "", success = "false" } = infoMessage;
  const handleClose = () => {
    onInfoMessage(false);
    setInfoMessage(null);
  };

  return (
    <div className="message-popup" ref={ref}>
      <button
        className="message-popup__close-button"
        type="button"
        alt="Закрыть"
        onClick={handleClose}
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
  );
};

InfoMessagePopup.propTypes = {
  isInfoMessage: PropTypes.bool.isRequired,
  onInfoMessage: PropTypes.func.isRequired,
  infoMessage: PropTypes.object,
};

export default memo(InfoMessagePopup);
