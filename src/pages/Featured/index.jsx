import React from "react";

const Featured = () => {
  return (
    <div className="bg-deep text-gray featured-section">
      <div className="container mt-5 ">
        <div className="row">
          <div className="col-12 col-md-7 position-relative h-300 ">
            <img
              src="images/tourism1.jpg"
              alt=""
            //   width="100%"
              height="110%"
              className="featured-section-img shadow d-block"
            />
          </div>
          <div className="col-12 col-md-5 d-flex justify-content-around align-items-center pt-5">
            <div className=""><h4 className="mb-2">Featured Places</h4>
                <p className="mb-2">here is a the top featured place according to clients recomendation</p>

                    <div className=""><a href="" className="featured-btn text-gray"> explore</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
