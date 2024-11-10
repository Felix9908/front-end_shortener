import PropTypes from "prop-types";

function InfoStadisticCard({ title, value, porcent }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="stat">
        <div className="stat-figure text-primary">
          <p>icono</p>
        </div>
        <div className="stat-title text-gray-700 text-xl font-medium">{title}</div>
        <div className="stat-value text-primary text-3xl font-bold">{value}</div>
        <div className="stat-desc text-gray-500 text-sm">
          {porcent}% más que el mes pasado
        </div>
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
