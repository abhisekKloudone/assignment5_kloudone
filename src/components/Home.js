import React, { useState } from "react";
import { MenuItem, TextField } from "@material-ui/core";
import Categories from "../Categories";
import { useNavigate } from "react-router-dom";
// import axios from "axios";

function Home({ fetchQuiz }) {
	const [category, setCategory] = useState("");
	const [difficulty, setDifficulty] = useState("");
	const [error, setError] = useState(false);

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!category || !difficulty) {
			setError(true);
			return;
		} else {
			setError(false);
			fetchQuiz(category, difficulty);
			navigate("/quiz");
		}
	};

	return (
		<div className="flex justify-center mt-14 w-full h-full">
			<div className="flex flex-col w-2/4">
				<h2 className=" text-4xl font-semibold mb-10 text-center">
					SELECT QUIZ TYPE
				</h2>
				<TextField
					className="mt-5"
					select
					variant="outlined"
					label="Select Category"
					value={category}
					onChange={(e) => setCategory(e.target.value)}>
					{Categories.map((item) => (
						<MenuItem key={item.category} value={item.value}>
							{item.category}
						</MenuItem>
					))}
				</TextField>

				<TextField
					style={{ marginTop: 15 }}
					select
					variant="outlined"
					label="Select Difficulty"
					value={difficulty}
					onChange={(e) => setDifficulty(e.target.value)}>
					<MenuItem key="Easy" value="easy">
						Easy
					</MenuItem>
					<MenuItem key="Medium" value="medium">
						Medium
					</MenuItem>
					<MenuItem key="Hard" value="hard">
						Hard
					</MenuItem>
				</TextField>
				{error ? (
					<h2 className="text-red-500 mt-5 font-semibold">
						Please Fillup all the fields
					</h2>
				) : (
					""
				)}

				<button
					onClick={handleSubmit}
					className="bg-blue-600 p-5 text-white mt-12 text-lg font-bold">
					Start Quiz
				</button>
			</div>
		</div>
	);
}

export default Home;
