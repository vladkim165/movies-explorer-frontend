import React, { memo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import "./NotFoundPage.scss";

const NotFoundPage = ({ onNotFoundPage }) => {
  const navigate = useNavigate();
  const getBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    onNotFoundPage(true);

    return () => {
      onNotFoundPage(false);
    };
  });

  return (
    <section className="not-found">
      <h3 className="not-found__title">404</h3>
      <p className="not-found__text">Страница не найдена</p>
      <button className="not-found__button" onClick={getBack}>
        Назад
      </button>
    </section>
  );
};

NotFoundPage.propTypes = {
  onNotFoundPage: PropTypes.func,
};

export default memo(NotFoundPage);
