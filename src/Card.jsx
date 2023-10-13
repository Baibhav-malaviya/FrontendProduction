import styles from "./Card.module.css";
const Card = ({ student }) => {
  // console.log(`Card name : ${name}`);
  const { name, age, email, id } = student;
  return (
    <div className={styles.card}>
      <p>ID: {id}</p>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default Card;
