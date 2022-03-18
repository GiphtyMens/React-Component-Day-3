import Card from "../card/Card";
import styles from "./Container.module.css";

const Container = () => {
  return (
    <div className={styles.container}>
      <h1>Container</h1>
      <Card />
    </div>
  );
};
export default Container;
