/**
 * WordRevealLoop
 * 
 * Component that displays words dynamically loaded from i18next
 * with a fade-in and fade-out effect, looping through each word.
 * 
 * @example
 * <WordRevealLoop />
 */

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import classes from "./WordRevealLoop.module.css";

const LETTER_INTERVAL = 300; // Time between each letter reveal
const FADE_OUT_DURATION = 500; // Duration of fade-out effect
const WORD_DELAY = 1500; // Time before fading out after full reveal

const WordRevealLoop = () => {
  const { t } = useTranslation("global");
  const words = t("main.WordRevealLoop", { returnObjects: true });

  // Ensure words is an array
  const wordList = Array.isArray(words) ? words : [];

  if (wordList.length === 0) {
    console.error("Invalid words array from i18next:", words);
    return null;
  }

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const word = wordList[currentWordIndex];
    let charIndex = 0;
    setDisplayedText(""); // Reset text before starting
    setIsFading(false);

    // Reveal letters one by one
    const revealInterval = setInterval(() => {
      setDisplayedText((prev) => word.slice(0, prev.length + 1));
      charIndex++;

      if (charIndex === word.length) {
        clearInterval(revealInterval);

        // Start fade-out after displaying full word
        setTimeout(() => {
          setIsFading(true);

          setTimeout(() => {
            setIsFading(false);
            setDisplayedText(""); // Clear before switching words
            setCurrentWordIndex((prev) => (prev + 1) % wordList.length);
          }, FADE_OUT_DURATION);
        }, WORD_DELAY);
      }
    }, LETTER_INTERVAL);

    return () => clearInterval(revealInterval);
  }, [currentWordIndex]);

  return (
    <div className={classes.container}>
      <span className={`${classes.word} ${isFading ? classes.fadeOut : ""}`}>
        {displayedText || " "} {/* Ensure the span always has content */}
      </span>
    </div>
  );
};

export default WordRevealLoop;
