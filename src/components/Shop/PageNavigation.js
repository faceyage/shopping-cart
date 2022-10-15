import { Link } from "react-router-dom";

function PageNavigation({ products, currPage }) {
  //max page per page
  const maxPage = 9;
  const totalPage = Math.round(products.length / maxPage);
  const hasPrevPage = currPage > 1;
  const hasNextPage = currPage < totalPage;

  return (
    <div className="page-nav">
      {hasPrevPage ? (
        <Link to={`/shop/${currPage - 1}`}>
          <button className="btn">Prev</button>
        </Link>
      ) : (
        <button className="btn" disabled>
          Prev
        </button>
      )}

      {hasNextPage ? (
        <Link to={`/shop/${currPage + 1}`}>
          <button className="btn">Next</button>
        </Link>
      ) : (
        <button className="btn" disabled>
          Next
        </button>
      )}
    </div>
  );
}

export default PageNavigation;
