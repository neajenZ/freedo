export const starsCatalog = (count: number) => {
  let res = "";
  for (let i = 0; i < count; i++) {
    res += "★ ";
  }
  return res;
};
