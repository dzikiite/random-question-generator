import React from 'react';
import QuizItem from './QuizItem';

const Quiz = (props) => {
    return (
        <QuizItem questions={props.questions}/>
    )
}

export default Quiz;