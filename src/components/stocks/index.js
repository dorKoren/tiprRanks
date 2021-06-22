import { useContext, useEffect } from "react";
import axios from "axios";
import { API } from "constants.js";
import SingleStock from "components/single-stock";
import { Context, Dispatch } from "contexts/app.context";
import "./style.scss";

function Stocks() {
  const context = useContext(Context);
  const dispatch = useContext(Dispatch);

  const handleInpuChange = e =>
    dispatch({ type: "stockNameImmediately", value: e.target.value });

  useEffect(() => {
    context.submit.count && fetchData();
  }, [context.submit.count]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API}name=${context.stockName.value}`);
      const data = response.data.slice(0, 8);
      const sortedData = data.sort((a, b) =>
        a.label > b.label ? 1 : b.label > a.label ? -1 : 0
      );

      dispatch({ type: "updateStocksData", value: sortedData });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (context.stockName.value) {
      const delay = setTimeout(
        () => dispatch({ type: "submit", value: context.stockName.value }),
        800
      );
      return () => clearTimeout(delay);
    }
  }, [context.stockName.value]);

  return (
    <div className="stocks">
      <h1 className="stocks__title">
        <span className="dolar">$</span> stocks <span className="dolar">$</span>
      </h1>

      <form className="stocks__form">
        <label htmlFor="name">stock name: </label>
        <input type="text" id="name" onChange={handleInpuChange}></input>
      </form>

      {!context.stocksData ? null : (
        <div className="stocks__wrapper">
          {context.stocksData.map(({ label, uid, value, category }, key) => (
            <SingleStock
              key={uid}
              label={label}
              uid={uid}
              value={value}
              category={category}
              order={key}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Stocks;
