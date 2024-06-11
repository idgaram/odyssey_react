const KeyExample = (props) => {
  return (
    <li key={props.index}>
      {props.name} looks like {props.emoji}
    </li>
  );
};

export default KeyExample;
