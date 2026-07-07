function NameList({ users }) {
  const listItems = users.map((user, index) => <li key={index}>{user}</li>);
  return <ul>{listItems}</ul>;
}

export default NameList;