import { useState } from "react";
import "./App.css";
import Trivia from "./components/Trivia";

const moneyPyramid = [
    { id: 15, amount: "$ 1000000" },
    { id: 14, amount: "$ 500000" },
    { id: 13, amount: "$ 250000" },
    { id: 12, amount: "$ 125000" },
    { id: 11, amount: "$ 64000" },
    { id: 10, amount: "$ 32000" },
    { id: 9, amount: "$ 16000" },
    { id: 8, amount: "$ 8000" },
    { id: 7, amount: "$ 4000" },
    { id: 6, amount: "$ 2000" },
    { id: 5, amount: "$ 1000" },
    { id: 4, amount: "$ 500" },
    { id: 3, amount: "$ 300" },
    { id: 2, amount: "$ 200" },
    { id: 1, amount: "$ 100" },
];

function App() {
    const [questionNumber, setQuestionNumber] = useState(15);

    return (
        <div className="App">
            <div className="main">
                <div className="top">
                    <div className="timer">30</div>
                </div>
                <div className="bottom">
                    <Trivia />
                </div>
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
        </div>
    );
}

export default App;
