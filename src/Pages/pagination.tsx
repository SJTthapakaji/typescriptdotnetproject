//import React, { Component, Fragment } from 'react';
import * as React from 'react';
import ReactPaginate from 'react-paginate';

interface IPaginationProps {
  totalRecords: number,
  pageLimit: number,
  pageNeighbours: number,
  onPageChanged: any,
  initialPage?:number,
};
class Pagination extends React.Component<IPaginationProps, any> {

  constructor(props: IPaginationProps) {
    super(props);
  }
  componentDidMount() {

  }

  render() {

    return (
      <>
        {/* <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakClassName="page-item"
          breakLabel={<a className="page-link">...</a>}
          pageClassName="page-item"
          previousClassName="page-item"
          nextClassName="page-item"
          pageLinkClassName="page-link"
          previousLinkClassName="page-link"
          nextLinkClassName="page-link"
          pageCount={this.props.totalRecords}
          marginPagesDisplayed={3}
          pageRangeDisplayed={5}
          containerClassName={'pagination'}
          activeClassName={'active'}
          onPageChange={this.props.onPageChanged}

        /> */}
        <ReactPaginate
        initialPage={this.props.initialPage}
          previousLabel={'<'}
          nextLabel={'>'}
          containerClassName={'pagination d-flex justify-content-center'}
          activeClassName={'active'}
          breakClassName="page-item"
          breakLabel={<a className="page-link">...</a>}
          pageClassName="page-item"
          previousClassName="page-item"
          nextClassName="page-item"
          pageLinkClassName="page-link"
          previousLinkClassName="page-link"
          nextLinkClassName="page-link"
          onPageChange={(data: any) => {
            let selected = data.selected;
            let offset = parseInt(selected + 1);
            console.log(data,offset)
            this.props.onPageChanged({ currentPage: offset, pageLimit: this.props.pageLimit })
          }}
          pageRangeDisplayed={5}
          pageCount={this.props.totalRecords/ this.props.pageLimit  }        
          //renderOnZeroPageCount={null}
        />
      </>
    );

  }
}



export default Pagination;
