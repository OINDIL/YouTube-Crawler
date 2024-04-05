import React from "react";

function ResultLength({result, totalResults}) {
  return (
    <div>
      <div className="container card rounded-5 mb-3 text-center" style={{maxWidth:'400px'}}>
        <div className="card-body fw-bold card-subtitle text-body-secondary">Results Per Page: {result} | Total Results: {totalResults}</div>
      </div>
    </div>
  );
}

export default ResultLength;
