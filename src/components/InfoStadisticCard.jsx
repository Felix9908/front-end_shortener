import PropTypes from "prop-types";

function InfoStadisticCard({ title, value, porcent }) {
  return (
    <div>
      <div className="stat">
        <div className="stat-figure text-primary">
          <p>icono</p>
        </div>
        <div className="stat-title">{title}</div>
        <div className="stat-value text-primary">{value}</div>
        <div className="stat-desc">{porcent}% mas que el mes pasado</div>
      </div>
    </div>
  );
}

InfoStadisticCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  porcent: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default InfoStadisticCard;
