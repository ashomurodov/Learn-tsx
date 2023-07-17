interface PaginationProps {
  moviesLength: number;
  pageSize: number;
  currentPage: number;
  onChangeCurrentPagee: (page: number) => void;
}

const Pagination = ({ moviesLength, pageSize, onChangeCurrentPagee, currentPage }: PaginationProps) => {
  const pages = new Array(Math.ceil(moviesLength / pageSize)).fill(null).map((_, idx) => idx + 1);
  return (
    <nav>
      <ul className="pagination pagination-sm">
        {pages.map((page) => (
          <li
            key={page}
            className={`page-item ${page === currentPage ? "active" : ""}`}
            onClick={() => onChangeCurrentPagee(page)}
          >
            <span className="page-link">{page}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Pagination;
