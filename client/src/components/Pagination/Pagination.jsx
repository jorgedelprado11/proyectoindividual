import "./Pagination.css";

const Pagination = ({
  gamesPerPage,
  totalGames,
  currentPage,
  setCurrentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalGames / gamesPerPage); i++) {
    pageNumbers.push(i);
  }

  const onPreviousPage = () => {
    setCurrentPage(currentPage - 1);
    // esto me dice que mi nuevo estado de pagina actual va a ser -1 al estado anterior
  };
  const onNextPage = () => {
    setCurrentPage(currentPage + 1);
    // esto me dice que mi nuevo estado de pagina actual va a ser +1 al estado anterior
  };
  const onSpecificPage = (n) => {
    // esta funcion es para que funcione el hacer click a un numero especifico y me lleve directo a esa page
    setCurrentPage(n);
  };
  // console.log('esta es la pag actual >>',currentPage);

 
 
  return (
    <>
      <nav className="pagination-container">
        <button
          className={`pagination-btn ${currentPage === 1 ? "is-disabled" : ""}`}
          onClick={onPreviousPage}
        >
          Previous
        </button>
        <ul className="pagination">
          {pageNumbers.map((noPage) => (
            <li key={noPage}>
              <a
                className={`pagination-link ${
                  noPage === currentPage ? "is-current" : ""
                }`}
                onClick={() => onSpecificPage(noPage)}
              >
                {noPage}
              </a>
            </li>
          ))}
        </ul>
        <button
          className={`pagination-btn ${
            currentPage >= pageNumbers.length ? "is-disabled" : ""
          }`}
          onClick={onNextPage}
        >
          Next
        </button>
      </nav>
    </>
  );
};

export default Pagination;
