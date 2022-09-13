import { useEffect, useState } from "react";
import "./App.css";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";
import { moneyPyramid } from "./data";

function App() {
    const [username, setUsername] = useState(null);
    const [questionNumber, setQuestionNumber] = useState(1);
    const [stop, setStop] = useState(false);
    const [earned, setEarned] = useState("$ 0");

    useEffect(() => {
        questionNumber > 1 &&
            setEarned(moneyPyramid.find((money) => money.id === questionNumber - 1).amount);

        questionNumber > 15 && setStop(true);
    }, [questionNumber]);

    const handleAgainClick = () => {
        setStop(false);
        setQuestionNumber(1);
    };

    return (
        <div className="App">
            {username ? (
                <>
                    <div className="main">
                        {stop ? (
                            <div className="lose">
                                <h1 className="earnedText">
                                    Congratulations {username}. You earned: {earned}
                                </h1>
                                <button className="againBtn" onClick={handleAgainClick}>
                                    Play Again
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className="top">
                                    <div className="timer">
                                        <Timer setStop={setStop} questionNumber={questionNumber} />
                                    </div>
                                </div>
                                <div className="bottom">
                                    <Trivia
                                        setStop={setStop}
                                        setQuestionNumber={setQuestionNumber}
                                        questionNumber={questionNumber}
                                    />
                                </div>
                            </>
                        )}
                    </div>
                    <div className="pyramid">
                        <ul className="moneyList">
                            {moneyPyramid.map((item) => (
                                <li
                                    className={
                                        questionNumber === item.id
                                            ? "moneyListItem active"
                                            : "moneyListItem"
                                    }
                                    key={item.id}
                                >
                                    <span className="moneyListItemNumber">{item.id}</span>
                                    <span className="moneyListItemAmount">{item.amount}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            ) : (
                <Start setUsername={setUsername} />
            )}
        </div>
    );
}

export default App;
