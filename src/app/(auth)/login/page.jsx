import LoginForm from "@/components/loginForm/LoginForm";
import styles from "./Login.module.css";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* <form action={handleGithubLogin}>
          <button className={styles.github}>Login with Github</button>
        </form> */}
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
