const appReducer = (draft, action) => {
  switch (action.type) {
    case "stockNameImmediately":
      draft.stockName.value = action.value;
      return;

    case "submit":
      draft.submit.count++;
      return;

    case "updateStocksData":
      draft.stocksData = action.value;
      return;

    default:
      return;
  }
};

export default appReducer;
