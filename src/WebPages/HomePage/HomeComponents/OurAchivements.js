import React from "react";

const OurAchivements = () => {
  return (
    <section className="extra-background mb-5">
      <div className="container mb-5">
        <h1 className="text-center text-size mt-2 mb-5">Our Achivements</h1>
        <div className="container-fluid card-background my-3">
          <div className="row align-items-center ">
            <div className="g-5">
              <div className="d-flex flex-column flex-lg-row g-5 content pb-5">
                <div className="col-lg-3 col-12 d-flex justify-content-center">
                  <div className="text-center ">
                    <i class="fas fa-business-time icon"></i>
                    <h1 className="text-followers fcolor">300+</h1>
                    <h4 className="text-style fcolor">Business Partners</h4>
                  </div>
                </div>

                <div className="col-lg-3 col-12 d-flex mb-sm-3 justify-content-center">
                  <div className="text-center ">
                    <i class="far fa-handshake icon"></i>
                    <h1 className="text-followers fcolor">100%</h1>
                    <h4 className="text-style fcolor">Trusted Seller</h4>
                  </div>
                </div>

                <div className="col-lg-3 col-12 d-flex justify-content-center">
                  <div className="text-center">
                    <i class="far fa-smile-beam icon"></i>
                    <h1 className="text-followers fcolor">99%</h1>
                    <h4 className="text-style fcolor">
                      Of Our Customers Satisfied
                    </h4>
                  </div>
                </div>

                <div className="col-lg-3 col-12 d-flex justify-content-center">
                  <div className="text-center">
                    <i class="fas fa-warehouse icon"></i>
                    <h1 className="text-followers fcolor">500+</h1>
                    <h4 className="text-style fcolor">
                      Worldwide Rent Stations
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurAchivements;
