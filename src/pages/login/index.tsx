import Link from "next/link";

const Login = () => {
  return (
    <div>
      <p>Ini login page</p>
      <Link href="/dashboard">
        <button>Login</button>
      </Link>
    </div>
  );
};

Login.noLayout = true;

export default Login;
