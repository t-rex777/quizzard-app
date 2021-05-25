import React, { useEffect } from "react";
import { getAllQuizzes } from './helper';

interface Props {}

const QuizCard: React.FC<Props> = () => {

useEffect(()=>{
    (async()=>{
        const data = await getAllQuizzes();
        console.log(data);
    })();
},[])
    return <div></div>;
};

export default QuizCard;
