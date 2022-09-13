import { useEffect, useState } from "react";
import useSound from "use-sound";

import { data } from "../data";
import play from "../sounds/play.mp3";
import correct from "../sounds/correct.mp3";
import wrong from "../sounds/wrong.mp3";

function Trivia({ questionNumber, setQuestionNumber, setStop }) {
    const [question, setQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [className, setClassName] = useState("answer");
    const [letsPlay] = useSound(play);
    const [correctAnswer] = useSound(correct);
    const [wrongAnswer] = useSound(wrong);

    useEffect(() => {
        letsPlay();
    }, [letsPlay]);

    useEffect(() => {
        setQuestion(data[questionNumber - 1]);
    }, [questionNumber]);

    const delay = (duration, callback) => {
        setTimeout(() => {
            callback();
        }, duration);
    };

    const handleClick = (answer) => {
        setSelectedAnswer(answer);
        setClassName("answer active");
        delay(3000, () => setClassName(answer.correct ? "answer correct" : "answer wrong"));

        delay(4000, () => {
            if (answer.correct) {
                correctAnswer();
                delay(2000, () => {
                    setQuestionNumber((prev) => prev + 1);
                    setSelectedAnswer(null);
                });
            } else {
                wrongAnswer();
                delay(2000, () => {
                    setStop(true);
                });
            }
        });
    };

    return (
        <div className="Trivia">
            <div className="question">
                Question {question?.id}: {question?.question}
            </div>
            <div className="answers">
                {question?.answers.map((answer, index) => (
                    <div
                        className={answer === selectedAnswer ? className : "answer"}
                        key={index}
                        onClick={() => !selectedAnswer && handleClick(answer)}
                    >
                        {answer.text}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Trivia;
