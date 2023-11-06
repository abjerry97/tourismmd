import React from "react";

const NavBar = () => {
  return (
    <div className="bleack sticky-top">
      <div className="container text-gray d-flex justify-content-between align-items-center py-2">
        <div className="">
          <h6>
            <a href="" className="text-gray">
              {" "}
              TOURISMNG
            </a>
          </h6>
        </div>
        <div className="">
          <ul className="d-flex justify-content-between gap-3 align-items-center">
            <li>
              <a href="" className="text-gray">
                {" "}
                events
              </a>
            </li>
            <li>
              <a href="" className="text-gray">
                {" "}
                book
              </a>
            </li>
            <li>
              <a href="" className="text-gray">
                {" "}
                contact us
              </a>
            </li>
          </ul>
        </div>
        <div className="">
          <input type="search" placeholder="enter a city" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
