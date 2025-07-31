import React, { useState, useRef } from 'react'
import './Quiz.css'
import { data, data2, data3, data4 } from '../assets/data'
import Result from './Result'

const Quiz = ({ goHome }) => {
    const dataSets = [data, data2, data3, data4];
    const [batch, setBatch] = useState(0) 
    const currentData = dataSets[batch];
    const [index, setIndex] = useState(0)
    const [lock, setLock] = useState(false)
    const [score, setScore] = useState(0)
    const [result, setResult] = useState(false)
    
    const quizTitle = currentData.title;

    // Select questions based on batch
    const questions = currentData.questions;
    const question = questions[index]

    // Refs for each option element
    let Option1 = useRef(null)
    let Option2 = useRef(null)
    let Option3 = useRef(null)
    let Option4 = useRef(null)

    let option_array = [Option1, Option2, Option3, Option4]

    // Handles answer selection and feedback
    const checkAnswer = (e, ans) => {
        if (!lock) {
            if (question.ans === ans) {
                e.target.classList.add("correct")
                setLock(true)
                setScore(score + 1)
            } else {
                e.target.classList.add("wrong")
                setLock(true)
                // Highlight correct answer
                option_array[question.ans - 1].current.classList.add("correct")
            }
        }
    }

    // Moves to next question or shows result
    const next = () => {
        if (lock) {
            if (index === questions.length - 1) {
                setResult(true)
                return
            }
            setIndex(index + 1)
            setLock(false)
            // Remove feedback classes from options
            option_array.forEach(option => {
                option.current.classList.remove("correct", "wrong")
            })
        }
    }

    // Navigates back to home
    const home = () => {
        goHome();
    }

    // Resets quiz to initial state for the current batch
    const reset = () => {
        setIndex(0)
        setLock(false)
        setScore(0)
        setResult(false)
        option_array.forEach(option => {
            option.current.classList.remove("correct", "wrong")
        })
    }

    // Proceed to next batch (data2)
    const continueToNextBatch = () => {
        setBatch(prev => prev + 1);
        setIndex(0)
        setLock(false)
        setScore(0)
        setResult(false)
        option_array.forEach(option => {
            option.current.classList.remove("correct", "wrong")
        })
    }

    
    return (
        <div className='container'>
            <h1>{quizTitle}</h1>
            <hr />

            {!result ? (
                <>
                    <h2>{index + 1}. {question.question}</h2>
                    <ul>
                        <li ref={Option1} onClick={(e) => checkAnswer(e, 1)}>{question.option1}</li>
                        <li ref={Option2} onClick={(e) => checkAnswer(e, 2)}>{question.option2}</li>
                        <li ref={Option3} onClick={(e) => checkAnswer(e, 3)}>{question.option3}</li>
                        <li ref={Option4} onClick={(e) => checkAnswer(e, 4)}>{question.option4}</li>
                    </ul>
                    <button onClick={next}>Next</button>
                    <div className="index">{index + 1} of {questions.length} questions</div>
                </>
            ) : (
                <Result
                    score={score}
                    total={questions.length}
                    onReset={score === questions.length && batch === 0 ? continueToNextBatch : reset}
                    onHome={home}
                    perfect={score === questions.length}
                />
            )}
        </div>
    )
}

export default Quiz