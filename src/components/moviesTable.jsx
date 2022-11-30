import React, { Component } from "react";
import Table from "./common/table";
import Like from "./common/like";

class MoviesTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (m) => (
        <Like onLike={() => this.props.onLike(m)} liked={m.liked} />
      ),
    },
    {
      key: "delete",
      content: (m) => (
        <button
          onClick={() => this.props.onDelete(m)}
          className='btn btn-danger btn-sm'
        >
          Delete
        </button>
      ),
    },
  ];
  render() {
    const { movies, onSort, sortColumn } = this.props;
    return (
      <Table
        columns={this.columns}
        data={movies}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default MoviesTable;
