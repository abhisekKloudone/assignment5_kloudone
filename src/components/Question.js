import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Question({ currQues, setCurrQues, quizData, score, setScore }) {
	const navigate = useNavigate();

	const [selectedOption, setSelectedOption] = useState();
	const [error, setError] = useState(false);

	const handleCheck = (opt) => {
		setSelectedOption(opt);
		if (opt === quizData[currQues]?.correct_answer) {
			setScore(score + 2);
		} else {
			console.log("Incorrect answer");
		}
		setError(false);
	};

	const handleNext = () => {
		if (currQues > 8) {
			navigate("/score");
		} else if (selectedOption) {
			setCurrQues(currQues + 1);
			setSelectedOption("");
		} else {
			setError(true);
		}
	};

	console.log(score);

	return (
		<div className="pt-40">
			<h2>Question : {currQues + 1}</h2>
			<h2 className="text-xl font-medium">{quizData[currQues]?.question}</h2>
			<div className="mt-7 flex justify-center">
				{quizData[currQues]?.answers.map((opt) => (
					<button
						className="bg-gray-200 p-3 m-2 "
						key={opt}
						onClick={() => handleCheck(opt)}>
						{opt}
					</button>
				))}
			</div>
			{error ? (
				<h2 className="text-red-500 text-lg font-semibold text-center mt-5">
					Please select an option first
				</h2>
			) : (
				""
			)}

			<div className="flex justify-center">
				<button
					onClick={handleNext}
					className="w-32 mt-9 text-white text-lg font-semibold p-3 m-2 bg-blue-500">
					Next
				</button>
			</div>
		</div>
	);
}

export default Question;
