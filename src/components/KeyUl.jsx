import KeyExample from "./KeyExample";

const KeyUl = () => {
  const cart = [
    { name: "apple", emoji: "🍏" },
    { name: "banana", emoji: "🍌" },
    { name: "grape", emoji: "🍇" },
    { name: "watermelon", emoji: "🍉" },
  ];
  return (
    <div>
      <ul>
        {cart.map((element, index) => (
          <KeyExample
            key={element.name}
            emoji={element.emoji}
            name={element.name}
          />
        ))}
      </ul>
    </div>
  );
};

export default KeyUl;
