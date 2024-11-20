import { Outlet, Link, useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation();

  return (
    <div>
      {/* Conditional header: If page is not /upcoming, we will display "Who's NExt????!" link.  */}
      {location.pathname !== "/upcoming" && (
        <header
          style={{
            position: "fixed",
            top: 0,
            width: "100%",
            background: "white",
            zIndex: 1000,
            padding: "10px",
            textAlign: "center",
          }}
        >
          <Link to="/upcoming">Who's Next????!</Link>
        </header>
      )}
      <Outlet />
    </div>
  );
}

export default Layout;
