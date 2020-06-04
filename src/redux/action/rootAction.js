const incremented = (body) => {
  return {
    type: "inc",
    body,
  };
};

const reduced = (body) => {
  return {
    type: "reduce",
    body,
  };
};

export { incremented, reduced };
