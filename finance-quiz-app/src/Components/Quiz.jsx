import React, { useState, useRef } from 'react'
import './Quiz.css'
import { data } from '../assets/data'

const Quiz = ({ goHome }) => {
    const [index, setIndex] = useState(0)
    const [lock, setLock] = useState(false)
    const [score, setScore] = useState(0)
    const [result, setResult] = useState(false)

    // Get current question and questions array
    const questions = data
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
        goHome()
    }

    // Resets quiz to initial state
    const reset = () => {
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
            <h1>Quiz App</h1>
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
                <>
                    <h2>You Scored {score} out of {questions.length}</h2>
                    <div className="button-group">
                        <button onClick={reset}>Try again</button>
                        <button onClick={home}>Home</button>
                    </div>
                </>
            )}
        </div>
    )
}

export default Quiz