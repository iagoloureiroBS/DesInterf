import styles from "./Produto.module.css";

export default function Produto({nome, prezo}) {
  return <div className={styles.produto}>{nome} --- {prezo}</div>;
}