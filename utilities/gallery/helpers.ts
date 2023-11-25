export const generateItemDisplayCode = (
  itemCode: string = ""
): number | "??" => {
  const itemNumbericCode = (itemCode || "").split(".")[1];
  if (itemNumbericCode) return parseInt(itemNumbericCode, 10);
  return "??";
};
