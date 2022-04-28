import React from 'react';
import p from "./Pagination.module.css";
import iconPagination from "../../images/iconPagination.png";

export type PaginationPropsType = {
    reposPerPage: number
    totalRepos: number
    currentPage: number
    handlerPaginate: (value: number) => void
    handlerNextPage: () => void
    handlerPrevPage: () => void
    firstRepoIndex: number
    lastRepoIndex: number
}

const Pagination: React.FC<PaginationPropsType> = ({
                                                       reposPerPage,
                                                       totalRepos,
                                                       handlerPaginate,
                                                       handlerPrevPage,
                                                       handlerNextPage,
                                                       currentPage,
                                                       firstRepoIndex,
                                                       lastRepoIndex,
                                                   }) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalRepos / reposPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
            <div className={p.paginationWrapper}>
                <div className={p.paginationInfo}>
                    {firstRepoIndex + 1}-{lastRepoIndex} of {totalRepos} items
                </div>
                <button disabled={currentPage === 1} onClick={handlerPrevPage}>
                    <img className={p.paginationIconLeft} src={iconPagination} alt="arrow_prev"/>
                </button>
                {
                    pageNumbers.map(number => (
                        <div key={number}>
                            <a className={p.paginationItems} href='#'
                               onClick={() => handlerPaginate(number)}>{number}</a>
                        </div>
                    ))
                }
                <button disabled={currentPage === pageNumbers.length} onClick={handlerNextPage}>
                    <img className={p.paginationIconRight} src={iconPagination} alt="arrow_next"/>
                </button>
            </div>
    );
};

export default Pagination;