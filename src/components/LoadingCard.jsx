import React, { Component } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export class LoadingCard extends Component {
  render() {
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <Skeleton margin={10} width={260} height={250} />
          <div className="card-body">
            <Skeleton count={4} />

            <a href="/newsdetail" className="btn btn-sm btn-primary">
              Loading...
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default LoadingCard;
