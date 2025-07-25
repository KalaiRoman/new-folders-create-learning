function Login() {
  return (
    <div className="main-login">
      <div className="inside-login">
        {[...Array(10)]?.map((item, i) => {
          return <div>welcome {i + 1}</div>;
        })}
      </div>
    </div>
  );
}

export default Login;
