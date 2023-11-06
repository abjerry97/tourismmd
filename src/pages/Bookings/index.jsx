import React from "react";

const Bookings = () => {
  return (
    <div className="bg-white py-5">
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
            <div className="">
              <h4 className="mb-3 text-bleack">No.1 Avaliable for booking</h4>
              <p >
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
          <div className="col-12 col-md-6">
            <img src="/images/0x0.jpg" alt="" width="100%" height="600px" className="heroimg img-fluid"/></div>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
