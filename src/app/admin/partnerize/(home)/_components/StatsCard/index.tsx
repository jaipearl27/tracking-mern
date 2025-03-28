import "./styles.scss";

type Props = {
  title: string;
  value: string;
  loading?: boolean;
};

const StatsCard: React.FC<Props> = ({ title, value, loading }) => {
  return (
    <div className="stats-card">
      <p className="stats-title">{title}</p>
      <h3 className="stats-value">{value}</h3>
    </div>
  );
};

export default StatsCard;
