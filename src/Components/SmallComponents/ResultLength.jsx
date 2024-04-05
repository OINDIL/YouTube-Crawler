import React from "react";
import {useValueFormatter} from '../Context/FormatValue'

function ResultLength({result, totalResults}) {
  const {formatNumber} = useValueFormatter()
  return (
    <div>
      <div className="container card rounded-5 mb-3 text-center" style={{maxWidth:'300px'}}>
        <div className="card-body fw-bold card-subtitle text-body-secondary">Results Per Page: {result} | Total Results: {formatNumber(totalResults)}</div>
      </div>
    </div>
  );
}

export default ResultLength;
