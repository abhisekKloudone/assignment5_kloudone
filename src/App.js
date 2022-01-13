import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Quiz from "./components/Quiz";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Score from "./components/Score";
import axios from "axios";

function App() {
	const [quizData, setQuizData] = useState([]);
	const [score, setScore] = useState(0);

	const fetchQuiz = async (category = "", difficulty = "") => {
		const url = `https://opentdb.com/api.php?amount=10${
			category && `&category=${category}`
		}${difficulty && `&difficulty=${difficulty}`}&type=multiple`;

		const { data } = await axios.get(url);

		const formattedResult = data.results.map((res) => {
			const incorrectAnsIndexes = res.incorrect_answers.length;

			const randomIndex = Math.round(
				Math.random() * (incorrectAnsIndexes - 0) + 0
			);

			res.incorrect_answers.splice(randomIndex, 0, res.correct_answer);

			return {
				...res,
				answers: res.incorrect_answers,
			};
		});
		setQuizData(formattedResult);
	};

	console.log(quizData);

	return (
		<div className="App">
			<Router>
				<Nav />
				<Routes>
					<Route path="/" element={<Home fetchQuiz={fetchQuiz} />} />
					<Route
						path="/quiz"
						element={
							<Quiz quizData={quizData} score={score} setScore={setScore} />
						}
					/>
					<Route path="/score" element={<Score score={score} />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
