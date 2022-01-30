import { useState } from 'react';
import './Pagination.scss';

const Pagination = ({getData}) => {
    const [actualPage, setActualPage] = useState(1);
    const changePage = (newPage) => {
        getData(newPage);
        setActualPage(newPage);
    }
  return <div>
      <button className="noselect red"  onClick={() => changePage(actualPage - 1 ? actualPage > 1 : actualPage - 0)}>{"PREVIUS"}</button>
      <span>{actualPage}</span>
      <button className="noselect red" onClick={() => changePage(actualPage + 1)}>{"NEXT"}</button>
  </div>;
};

export default Pagination;
