import React from "react";

const GetStarted = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mt-5">
          <div className="card mt-5 text-center shadow">
            <div className="card-body">
              <div className="row">
                <div className="col-12 col-md-6 p-4">
                  <h1 className="display-4">My Wallet</h1>
                  <hr />
                  <h5 className="mb-5">
                    Control your wallet with MyWallet
                  </h5>
                  <button
                    to="/signin"
                    className="btn btn-primary btn-block p-2 mb-4"
                  >
                    Sign In
                  </button>
                  <button
                    to="/signup"
                    className="btn btn-secondary btn-block p-2"
                  >
                    Sign Up
                  </button>
                </div>
                <div className="col-12 col-md-6">
                  <img
                    className="img-fluid"
                    src={window.location.origin + "/img/home.svg"}
                    alt="home-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;  