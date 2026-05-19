import MyModal from "../props/MyModal";

function Footer() {
  return (
    <footer className="py-3 my-4 bg-dark text-white">
      {" "}
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        {" "}
        <li className="nav-item">
          {/* <MyModal>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmRlwbWH3kPMJ32C3qDf4HcI_f8gBfUrb6ww&s' />
          </MyModal> */}
          <a href="#" className="nav-link px-2 ">
            Home
          </a>
        </li>{" "}
        <li className="nav-item">
          <a href="#" className="nav-link px-2 ">
            Features
          </a>
        </li>{" "}
        <li className="nav-item">
          <a href="#" className="nav-link px-2 ">
            Pricing
          </a>
        </li>{" "}
        <li className="nav-item">
          <a href="#" className="nav-link px-2 ">
            FAQs
          </a>
        </li>{" "}
        <li className="nav-item">
          <a href="#" className="nav-link px-2 ">
            About
          </a>
        </li>{" "}
      </ul>{" "}
      <p className="text-center ">© 2025 Company, Inc</p>{" "}
    </footer>
  );
}
export default Footer;
