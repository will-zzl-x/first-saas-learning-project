import Link from "next/link";

// This button is used to log users in or send them to the dashboard
const ButtonLogin = ({ isLoggedIn, name, extraStyle }) => {
  if (isLoggedIn) {
    return (
      <Link
        href="/dashboard"
        className={`btn btn-primary ${extraStyle ? extraStyle : ""}`}
      >
        Welcome Back, {name} !
      </Link>
    );
  }
  return <button>Login</button>;

  //1. Create a /login page
  //2. Create a email/password form
  // 3. Make a POST request
};

export default ButtonLogin;
