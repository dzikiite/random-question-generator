import React from 'react';

const QuizItem = (props) => {

    let classQuestions2 = props.questions.ti2;
    let classQuestions3 = props.questions.ti3;
    let classQuestions4 = props.questions.ti4;

    console.log(classQuestions2);

    return (
        <div>
            {classQuestions2.forEach(element => {
                return <p>{element.question}</p>
            })}
        </div>
    )
}

export default QuizItem;