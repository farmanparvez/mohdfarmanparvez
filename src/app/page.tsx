import styles from "./page.module.css";
import Home from "@/modules/Home/Home";

export default function Page() {
  return (
    <main className={styles.main}>
      <Home />
    </main>
  );
}
