import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import style from "../../layouts/index.module.css";

const FAQ = ({ question, answer }) => {
	const [isAnswerShowing, setIsAnswerShowing] = useState(false);

	const handleFAQ = () => {
		return setIsAnswerShowing((prevValue) => {
			return !prevValue;
		});
	};

	return (
		<article className="faq" onClick={handleFAQ}>
			<div>
				<h4 className={style.h4_4}>{question}</h4>
				<button className="faq__icon">
					{isAnswerShowing ? <AiOutlineMinus /> : <AiOutlinePlus />}
				</button>
			</div>
			{isAnswerShowing && <p>{answer}</p>}
		</article>
	);
};

export default FAQ;
