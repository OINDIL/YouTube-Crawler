import React, { useState } from 'react'

function Pagination({ paginationToken, totalResults, recordsPerPage, data = [] }) {
    const [currentPage, setCurrentPage] = useState(1)
    const lastIndex = currentPage * recordsPerPage
    const firstIndex = lastIndex - recordsPerPage
    const records = data.slice(firstIndex, lastIndex)
    const npage = Math.ceil(totalResults / recordsPerPage)
    const numbers = [...Array(npage + 1).keys()].slice(1,11)
    return (
        <div>
            <nav aria-label="...">
                <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                        <a className="page-link">Previous</a>
                    </li>

                    {numbers.map((number, index) => (
                        <div key={index}>
                            <li className="page-item"><a className="page-link" href="#">{number}</a></li>
                        </div>
                    ))}
                    <li className="page-item">
                        <a className="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination