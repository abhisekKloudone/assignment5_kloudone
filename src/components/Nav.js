import React from "react";
import { useNavigate } from "react-router-dom";

function Nav() {
	const navigate = useNavigate();
	return (
		<div>
			<div className="bg-white h-16 w-full pt-5  flex justify-evenly shadow-2xl">
				<h2
					onClick={() => navigate("/")}
					className="text-black font-semibold cursor-pointer">
					Quiz App
				</h2>
				<div className="flex space-x-10">
					<h2>LOGIN</h2>
					<h2>ABOUT</h2>
					<h2>MORE</h2>
				</div>
			</div>
		</div>
	);
}

export default Nav;
