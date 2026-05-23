import productsArr from "./product_data.ts";
import { FaStar } from "react-icons/fa";
import Swal from "sweetalert2";
import Modal from "react-modal";
import { useState } from "react";
import SearchBar from 'react-js-search';
import ReactPaginate from 'react-paginate';

export default function ProductList() {
  let [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const openSweetAlert = () => {
    Swal.fire("Good job!", "You clicked the button!", "success");
  };

  //pagination
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 4;

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const filteredProducts = productsArr.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(productsArr.length / itemsPerPage);

  const handlePageClick = (event: { selected: number; }) => {
    const newOffset = (event.selected * itemsPerPage) % productsArr.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <h3 className="text-center">Product List</h3>

      <div>
        <button onClick={openSweetAlert}>Sweet Alert</button>
        <button onClick={openModal}>Open Modal</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
          <h2>Hello Hiiiiiiiiiii</h2>
          <button onClick={closeModal}>close</button>
          <div>I am a modal</div>
        </Modal>
      </div>

      <div className="container mt-3">
        <div className="row">
          <div className="col-sm-6 offset-3">
            
          </div>
        </div>
        <div className="row">
          {filteredProducts.map((product) => {
            return (
              <div className="col-sm-3" key={product.id}>
                <div className="card">
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt="..."
                    height="200px"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.category}</h5>
                    <p className="card-text text-truncate">{product.title}</p>
                    <p className="card-text text-truncate">
                      {product.description}
                    </p>
                    <p className="card-text">{product.price}</p>
                    <p className="card-text">
                      {product.rating.rate}
                      <FaStar color="gold" />
                    </p>
                    <a href="#" className="btn btn-primary">
                      details
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />
    </>
  );
}
