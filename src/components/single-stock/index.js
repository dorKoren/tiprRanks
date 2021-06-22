import "./style.scss";

function SingleStock({ label, uid, value, category, order }) {
  const handleUidClick = e => {
    e.stopPropagation();
    alert(`uid: ${uid}`);
  };

  const handleStocklClick = () => {
    alert(`stock order: ${order + 1}, company name: ${label}`);
  };

  return (
    <ul className="single-stock" onClick={handleStocklClick}>
      <li className="single-stock__label">
        <strong>label: </strong>
        {label}
      </li>
      <li className="single-stock__uid" onClick={handleUidClick}>
        <strong>uid: </strong>
        {uid}
      </li>
      <li className="single-stock__value">
        {" "}
        <strong>value: </strong>
        {value}
      </li>
      <li className="single-stock__category">
        <strong>category: </strong>
        {category}
      </li>
    </ul>
  );
}

export default SingleStock;
