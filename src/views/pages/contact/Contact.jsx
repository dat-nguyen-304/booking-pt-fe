import React from "react";
import "./contact.css";
import Header from "../../../components/user/Header";
import HeaderImage from "../../../components/user/images/header_bg_2.jpg";

const UserProfile = () => {
	const user = {
	  name: "Eniola Ademola",
	  email: "it.eniolaademola@gmail.com",
	  phone: "+2347013909098",
	  courses: [
		{
		  name: "React Fundamentals",
		  purchasedDate: "2022-02-01",
		  price: "$29.99",
		  content: "Giảm cân cấp tốc",
		},
		{
		  name: "Advanced React",
		  purchasedDate: "2022-02-15",
		  price: "$49.99",
		  content: "",
		},
	  ],
	};
  
	return (
	  <>
		<Header title="User Profile" image={HeaderImage}>
		  Welcome to your user profile. Here you can see your purchased courses and edit your profile information.
		</Header>
  
		<section className="user-profile">
		  <div className="container">
			<div className="user-profile__info">
			  <h2>{user.name}</h2>
			  <p>{user.email}</p>
			  <p>{user.phone}</p>
			</div>
  
			<div className="user-profile__courses">
			  <h3>Purchased Courses:</h3>
			  <ul>
				{user.courses.map((course, index) => (
				  <li key={index}>
					<h4>{course.name}</h4>
					<p>Purchased on: {course.purchasedDate}</p>
					<p>Price: {course.price}</p>
					<p>{course.content}</p>
				  </li>
				))}
			  </ul>
			</div>
		  </div>
		</section>
	  </>
	);
  };
  
export default UserProfile;
