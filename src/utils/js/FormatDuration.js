const formatDuration = (min) => {
  const hours = min / 60;
  const validHours = Math.floor(hours);
  const minutes = (hours - validHours) * 60;
  const validMinutes = Math.round(minutes);

  return validHours ? `${validHours}ч ${validMinutes}м` : `${validMinutes}м`;
};

export default formatDuration;
