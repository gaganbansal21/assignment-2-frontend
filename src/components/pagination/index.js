import React, { useState } from 'react'
import './index.css'


const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    const handlePageChange = (pageNumber) => {
        onPageChange(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className='page_paginate'>
            {currentPage > 1 && (
                <button
                    className="pagination-button"
                    onClick={() => handlePageChange(currentPage - 1)}
                >
                    Prev
                </button>
            )}

            {pageNumbers.map((number) => (
                <button
                    className={`pagination-button ${currentPage === number ? 'active' : ''}`}
                    key={number}
                    onClick={() => handlePageChange(number)}
                >
                    {number}
                </button>
            ))}

            {currentPage < totalPages && (
                <button
                    className="pagination-button"
                    onClick={() => handlePageChange(currentPage + 1)}
                >
                    Next
                </button>
            )}
        </div>
    )
}

export default Pagination;