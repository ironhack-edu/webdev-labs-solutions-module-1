function calculateArea(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    return undefined;
  }

  return x * y;
}