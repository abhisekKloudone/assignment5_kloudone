import React from "react";
import { useNavigate } from "react-router-dom";

function Score({ score }) {
	const navigate = useNavigate();
	return (
		<div className="w-full h-full flex justify-center pt-40">
			<div className=" flex flex-col justify-center w-2/4 h-72 bg-gray-300">
				<h2 className="">Quiz Completed Successfully</h2>
				<h2 className="">Congrats Your Score is : {score} </h2>
				<button
					onClick={() => navigate("/")}
					className="bg-green-400 text-white">
					Go to Homepage
				</button>
			</div>
		</div>
	);
}

export default Score;
