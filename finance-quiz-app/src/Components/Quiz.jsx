import React, { useState, useRef } from 'react'
import './Quiz.css'
import { data } from '../assets/data'

const Quiz = () => {
    // State for current question index
    const [index, setIndex] = React.useState(0)
    const question = data[index]
    // State for locking answer selection
    let [lock, setLock] = useState(false);
    // State for user score
    let [score, setScore] = useState(0);
    // State to show result screen
    let [result, setResult] = useState(false);

    // Refs for each option element
    let Option1 = useRef(null);
    let Option2 = useRef(null);
    let Option3 = useRef(null);
    let Option4 = useRef(null);

    let option_array = [Option1, Option2, Option3, Option4];

    // Handles answer selection and feedback
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
                // Highlight correct answer
                option_array[question.ans - 1].current.classList.add("correct")
            }
        }
    }

    // Moves to next question or shows result
    const next = () => {

        if (lock === true) {
            if (index === data.length - 1) {
                setResult(true);
                return 0;
            }
            setIndex(index + 1);
            setLock(false);
            // Remove feedback classes from options
            option_array.forEach(option => {
                option.current.classList.remove("correct", "wrong");
            });
        }
    }

    // Resets quiz to initial state
    const reset = () => {
        setIndex(0);
        setLock(false);
        setScore(0);
        setResult(false);
    }

    return (
        <div className='container'>
            <h1>Quiz App</h1>
            <hr />

            {result ? <></> : <>
                <h2>{index + 1}. {question.question}</h2>

                <ul>
                    <li ref={Option1} onClick={(e) => checkAnswer(e, 1)}>{question.option1}</li>
                    <li ref={Option2} onClick={(e) => checkAnswer(e, 2)}>{question.option2}</li>
                    <li ref={Option3} onClick={(e) => checkAnswer(e, 3)}>{question.option3}</li>
                    <li ref={Option4} onClick={(e) => checkAnswer(e, 4)}>{question.option4}</li>
                </ul>

                <button onClick={next} >Next</button>
                <div className="index">{index + 1} of {data.length} questions</div>

            </>}

            {result ? <>
                <h2>You Scored {score} out of {data.length}</h2>
                <button onClick={reset}>Reset</button>
            </> : <></>}
        </div>
    )
}

export default Quiz