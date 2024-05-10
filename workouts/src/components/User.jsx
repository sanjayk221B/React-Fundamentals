const User = (props) => {
  return (
    <div className="user-container">
      <h1 className="username">{props.name}</h1>
      <p>Email: {props.email}</p>
    </div>
  );
};



export default User;
