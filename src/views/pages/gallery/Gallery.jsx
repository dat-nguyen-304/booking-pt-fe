import React, { useState, useEffect } from "react";
import "./gallery.css";
import HeaderImage from "../../../components/user/images/header_bg_3.jpg";
import Header from "../../../components/user/Header";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { saveAs } from "file-saver";

function Gallery(props) {
  const [imageList, setImageList] = useState([]);
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const { match } = props;
    const sessionId = match.params.id;
    axios
      .get(
        `https://gachateambe.herokuapp.com/api/images?sessionId=${sessionId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((res) => {
        setImageList(res.data.sessions);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleDownload(imgLink) {
    axios({
      url: imgLink,
      method: "GET",
      responseType: "blob",
    }).then((response) => {
      saveAs(response.data, "image.jpg");
    });
  }
  return (
    <>
      <Header title="Your Gallery" image={HeaderImage}>
        See your photos of each training session
      </Header>
      <section className="gallery" style={{ marginTop: "20px" }}>
        <div className="container gallery__container">
          {imageList.map((image, index) => {
            return (
              <article key={index}>
                <img
                  src={image.imgLink}
                  alt={`GalleryImage ${index + 1}`}
                  onClick={() => handleDownload(image.imgLink)}
                />
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default withRouter(Gallery);
