const make = (initialNumer = 0, initialDenom = 1) => {
  let numer = initialNumer;
  let denom = initialDenom;
  return {
    setNumer(value) {
      numer = value;
    },
    setDenom(value) {
      denom = value;
    },
    getNumer() {
      return numer;
    },
    getDenom() {
      return denom;
    },
    toString() {
      return `${numer}/${denom}`;
    },
    add(otherRational) {
      const a = numer;
      const b = denom;
      const c = otherRational.getNumer();
      const d = otherRational.getDenom();
      const newNumer = a * d + b * c;
      const newDenom = b * d;
      return make(newNumer, newDenom);
    },
  };
};

export default make;
