const KeyExample = (props) => {
  return (
    <li key={props.name}>
      {props.name} looks like {props.emoji}
    </li>
  );
};

export default KeyExample;
