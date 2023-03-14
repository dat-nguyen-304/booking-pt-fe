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
        Welcome to your user profile. Here you can see your purchased courses
        and edit your profile information.
      </Header>

      <section className="user-profile">
        <div className="container">
          <div className="user-profile__info">
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.phone}</p>
          </div>

          <div className="user-profile__courses">
            <h3>Purchased Course:</h3>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Purchased Date</th>
                  <th>Price</th>
                  <th>Content</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{user.courses[0].name}</td>
                  <td>{user.courses[0].purchasedDate}</td>
                  <td>{user.courses[0].price}</td>
                  <td>{user.courses[0].content}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserProfile;
