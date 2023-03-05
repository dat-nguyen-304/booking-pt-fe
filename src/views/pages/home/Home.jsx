import React from "react";
import "./home.css";
import MainHeader from "../../../components/user/MainHeader";
import Program from "../../../components/user/Program";
import Values from "../../../components/user/Values";
import FAQs from "../../../components/user/FAQs";
import Testimonial from "../../../components/user/Testimonial";
// import Footer from "../../components/Footer";

const Home = () => {
	return (
		<>
			<MainHeader />
			<Program />
			<Values />
			<FAQs />
			<Testimonial />
			{/* <Footer /> comment this out so footer wount be double */}
		</>
	);
};

export default Home;
