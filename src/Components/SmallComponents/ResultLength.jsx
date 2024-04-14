import React from "react";
import {useAllContext} from '../Context/AllContextAPI'

function ResultLength({result, totalResults}) {
  const {formatNumber} = useAllContext()
  return (
    <div>
      <div className="container card rounded-5 mb-3 text-center" style={{maxWidth:'400px'}}>
        <div className="card-body card-subtitle text-body-secondary"><span className="fw-medium">Results Per Page:</span> {result} | <span className="fw-medium">Total Results:</span> {formatNumber(totalResults)}</div>
      </div>
    </div>
  );
}

export default ResultLength;
