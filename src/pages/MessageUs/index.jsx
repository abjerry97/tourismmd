import React from "react";

const MessageUs = () => {
  return (
    <div className="bg-cream mt-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-md-6 mb-5">
            <h5 className="mb-3 text-bleack">Send us a message</h5>
            <p>We are availiable 24/7 send us a mail</p>
          </div>
          <div className="col-12 col-md-6">
            <input type="email" className="w-100" />
            <div className="d-flex align-items-center gap-2">
              {" "}
              <input type="checkbox" name="" id="" />
              <span>we remember your choices and keep it private</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageUs;
