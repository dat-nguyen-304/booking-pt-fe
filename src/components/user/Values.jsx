import React from "react";
import Image from "../../components/user/images/values.jpg";
import SectionHead from "./SectionHead";
import { GiCutDiamond } from "react-icons/gi";
import { values } from "../../components/user/data";
import Card from "../../views/pages/UI/Card";
import style from "../../layouts/index.module.css";

const Values = () => {
	return (
		<section className="values">
			<div className="container values__container">
				<div className="values__left">
					<div className="values__image">
						<img src={Image} alt="values" />
					</div>
				</div>
				<div className="values__right">
					<SectionHead icon={<GiCutDiamond />} title="Values" />
					<p>
					If you work hard but can't improve your fitness, you are definitely missing a guide
					</p>
					<div className="values__wrapper">
						{values.map(({ id, icon, title, desc }) => {
							return (
								<Card className="values__value" key={id}>
									<h4 className={style.h4_4}>{title}</h4>
									<small style={{fontWeight:"bold"}}>{desc}</small>
								</Card>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Values;
