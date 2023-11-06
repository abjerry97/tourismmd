import React from "react";

const Places = () => {
  return (
    <div className="mt-5 bg-gray py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 places-image-grid">
            <div className="one">
              <img
                src="/images/tourism3.jpg"
                alt=""
                width="100%"
                height="300px"
              />
            </div>
            <div className="">
              <img
                src="/images/tourism4.jpg"
                alt=""
                width="100%"
                height="300px"
              />
            </div>
            <div className="">
              <img
                src="/images/tourism5.jpg"
                alt=""
                width="100%"
                height="300px"
              />
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex align-items-center justify-content-center mt-5">
            <div className="">
              <h4 className="mb-3 text-bleack">No.1 Avaliable for booking</h4>
              <p>
                we have various options. click on the button below to get
                startedwe have various options. click on the button below to get
                started
              </p>
              <div className="mt-4 mb-5 d-flex justify-content-center">
                <a href="" className="tour-btn w-100 text-center">
                  view more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Places;
