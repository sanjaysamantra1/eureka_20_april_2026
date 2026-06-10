import { Link, Outlet } from "react-router-dom";

export default function Careers() {
  return (
    <>
      <h2>This is Careers Component</h2>
      
      <div>
        <Link to="permanent" className="mx-2">Permanent Jobs</Link>
        <Link to="contract">Contract Jobs</Link>
      </div>
      <Outlet />
    </>
  );
}
