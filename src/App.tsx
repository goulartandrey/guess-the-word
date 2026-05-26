import { useEffect, useState } from "react";
import styles from "./app.module.css";
import Button from "./components/Button";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Letter } from "./components/Letter";
import { Letters, type LettersProps } from "./components/Letters";
import { Tip } from "./components/Tip";
import { WORDS, type Challenge } from "./utils/words";

function App() {
  const [score, setScore] = useState(0);
  const [letter, setLetter] = useState("");
  const [letters, setLetters] = useState<LettersProps[]>([]);
  const [challenge, setChallenge] = useState<Challenge | null>(null);

  function handleRestartGame() {
    alert("alert");
  }

  function startGame() {
    const index = Math.floor(Math.random() * WORDS.length);
    const randomWord = WORDS[index];
    setChallenge(randomWord);

    setScore(0);
    setLetter("");
    setLetters([]);
  }

  function handleConfirm() {
    if (!challenge) return;
    if (!letter.trim()) {
      alert("Digite uma letra");
      return;
    }

    const value = letter.toUpperCase();
    const exists = letters.find((used) => used.value.toUpperCase() === value);

    if (exists) {
      alert("Palpite já utilizado");
      setLetter("");
      return;
    }

    const hits = challenge.word
      .toUpperCase()
      .split("")
      .filter((char) => char === value).length;

    const correct = hits > 0;
    const currentScore = score + hits;

    setLetters((prev) => [...prev, { value, correct }]);
    setScore(currentScore);
    setLetter("");
  }

  function endGame(message: string) {
    alert(message);
    startGame();
  }

  useEffect(() => {
    startGame();
  }, []);

  useEffect(() => {
    if (!challenge) {
      return;
    }

    setTimeout(() => {
      if (score === challenge.word.length) {
        return endGame("Parabéns. Você acertou!");
      }

      if (letters.length === challenge?.word.length + 5) {
        return endGame("Que pena. Acabaram seus palpites!");
      }
    }, 200);
  }, [score, letters.length]);

  if (!challenge) {
    return null;
  }
  return (
    <div className={styles.container}>
      <main>
        <Header
          current={letters.length}
          max={challenge.word.length + 5}
          onRestart={handleRestartGame}
        />

        <Tip tip={challenge.tip} />

        <div className={styles.word}>
          {challenge.word.split("").map((letter, index) => {
            const letterUsed = letters.find(
              (used) => used.value.toUpperCase() === letter.toUpperCase(),
            );
            return (
              <Letter
                key={index}
                value={letterUsed?.value}
                color={letterUsed?.correct ? "correct" : "default"}
              />
            );
          })}
        </div>

        <h4>Palpite</h4>

        <div className={styles.guess}>
          <Input
            autoFocus
            maxLength={1}
            placeholder="?"
            value={letter}
            onChange={(e) => setLetter(e.target.value)}
          />
          <Button title="Confirmar" onClick={handleConfirm} />
        </div>
        <Letters data={letters} />
      </main>
    </div>
  );
}

export default App;
