function EvenNumbers({ numbers }) {
  const evens = numbers.filter((num) => num % 2 === 0);
  return <p>Even numbers: {evens.join(", ")}</p>;
}

export default EvenNumbers;