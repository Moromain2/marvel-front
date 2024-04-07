// Utils functions imports
import handlePagination from '../../utils/handlePagination';

// CSS import for Pagination component
import "./pagination.scss";

const Pagination = ({ display, setDisplay, pageData, fetchData, setPageData, setIsLoading }) => {
    return (
        <div className="container page-navigation">
            <div className="buttons">
                <button className={display.currentPage > 1 ? 'button' : 'button inactive'}
                    onClick={() => { handlePagination("previous", display, setDisplay, pageData, fetchData, setPageData, setIsLoading) }}
                >
                    Page précédente
                </button>
                <button className={display.currentPage < pageData.count / display.limit ? 'button' : 'button inactive'}
                    onClick={() => { handlePagination("next", display, setDisplay, pageData, fetchData, setPageData, setIsLoading) }}
                >
                    Page suivante
                </button>
            </div>
            <p className="page-count">
                You are on page {display.currentPage} / {Math.ceil(pageData.count / display.limit)}
            </p>
        </div>
    )
}

export default Pagination;