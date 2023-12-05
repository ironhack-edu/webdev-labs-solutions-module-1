function divide(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return undefined;
  }

  return a / b;
}