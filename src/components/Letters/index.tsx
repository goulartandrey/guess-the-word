import { Letter } from "../Letter";
import styles from "./styles.module.css";

export type LettersProps = {
  value: string;
  correct: boolean;
};

type Props = {
  data: LettersProps[];
};

export function Letters({ data }: Props) {
  return (
    <div className={styles.letters}>
      <h5>Letras utilizadas</h5>
      <div>
        {data.map(({ value, correct }) => (
          <Letter
            value={value}
            size="small"
            color={correct ? "correct" : "wrong"}
          />
        ))}
      </div>
    </div>
  );
}
