import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";
import { useNavigate } from "react-router-dom";
const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>Beats Studio3</h1>
          <p>
            A sleek, streamlined, and forldable design, plus seamless setup via
            the new QI chip, means these are more durable and portable enough to
            stay on the move with you.
          </p>
          <div className="ctas">
            <div className="banner-cta" onClick={() => navigate("/about")}>
              Read More
            </div>
            <div
              className="banner-cta v2"
              onClick={() => navigate("/category/2")}
            >
              Shop Now
            </div>
          </div>
        </div>
        <img className="banner-img" src={BannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
