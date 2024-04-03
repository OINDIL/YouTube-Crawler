import React from "react";

function ResultLength({result}) {
  return (
    <div>
      <div className="container card rounded-5 mb-3 text-center" style={{maxWidth:'200px'}}>
        <div className="card-body fw-bold">Results: {result}</div>
      </div>
    </div>
  );
}

export default ResultLength;
