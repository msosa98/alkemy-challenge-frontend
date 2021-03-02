import React from "react";
import { BalanceCard } from "../components/BalanceCard";
import { FormOperation } from "../components/FormOperation";
import { LastOperations } from "../components/LastOperations";

export const Dashboard = () => {
  return (
    <div className="container" data-aos="fade-up">
      <div className="row">
        <div className="col-12 col-md-6 mb-sm-4">
          <FormOperation />
        </div>
        <div className="col-12 col-md-6">
          <BalanceCard />
          <LastOperations />
        </div>
      </div>
    </div>
  );
};
