import React, { useState, useRef } from 'react'
import './Quiz.css'
import { data } from '../assets/data'

const Quiz = () => {
    const [index, setIndex] = React.useState(0)
    const question = data[index]
    let [lock, setLock] = useState(false);
    let [score, setScore] = useState(0);

    let Option1 = useRef(null);
    let Option2 = useRef(null);
    let Option3 = useRef(null);
    let Option4 = useRef(null);

    let option_array = [Option1, Option2, Option3, Option4];

    const checkAnswer = (e, ans) => {
        if (lock == false) {

            if (question.ans === ans) {
                e.target.classList.add("correct")
                setLock(true);
                setScore(score + 1);

            }
            else {
                e.target.classList.add("wrong")
                setLock(true);
                option_array[question.ans - 1].current.classList.add("correct")
            }
        }
    }

    const next = () => {
        if (lock === true) {
            setIndex(index + 1);
            setLock(false);
            option_array.forEach(option => {
                option.current.classList.remove("correct", "wrong");
            });
        }
    }

    return (
        <div className='container'>
            <h1>Quiz App</h1>
            <hr />
            <h2>{index + 1}. {question.question}</h2>

            <ul>
                <li ref={Option1} onClick={(e) => checkAnswer(e, 1)}>{question.option1}</li>
                <li ref={Option2} onClick={(e) => checkAnswer(e, 2)}>{question.option2}</li>
                <li ref={Option3} onClick={(e) => checkAnswer(e, 3)}>{question.option3}</li>
                <li ref={Option4} onClick={(e) => checkAnswer(e, 4)}>{question.option4}</li>
            </ul>

            <button onClick={next} >Next</button>
            <div className="index">{index + 1} of {data.length} questions</div>
        </div>
    )
}

export default Quiz