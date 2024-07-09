import styles from "./Login.module.css";

export default function Login() {
  return (
    <div>
      <form action="">
        <input type="email" placeholder="e-mail" />
        <input type="password" placeholder="password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
