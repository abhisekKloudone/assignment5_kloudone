import React, { useState, useEffect } from "react";
import Question from "./Question";

function Quiz({ quizData, score, setScore }) {
	// const [options, setOptions] = useState();
	const [currQues, setCurrQues] = useState(0);

	// useEffect(() => {
	// 	setOptions(
	// 		question &&
	// 			shuffleOptions([
	// 				question[currQues]?.correct_answer,
	// 				...question[currQues]?.incorrect_answers,
	// 			])
	// 	);
	// }, [question, currQues]);

	// const shuffleOptions = (options) => {
	// 	return options.sort(() => Math.random() - 0.5);
	// };

	// console.log(options);
	console.log(quizData);

	return (
		<div className="flex justify-center w-full h-full">
			<div>
				<h2 className="pt-5 text-lg font-semibold text-center">
					Category :{quizData[currQues]?.category}{" "}
				</h2>
				<Question
					currQues={currQues}
					setCurrQues={setCurrQues}
					quizData={quizData}
					score={score}
					setScore={setScore}
				/>
			</div>
		</div>
	);
}

export default Quiz;
