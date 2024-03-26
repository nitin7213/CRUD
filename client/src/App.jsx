import { createBrowserRouter, Outlet } from "react-router-dom";

// Components
import Form from "./components/Form";
import NotFound from "./components/NotFound";
import CreateUser from "./components/CreateUser";
import UpdateUser from "./components/UpdateUser";

// Call Components
const App = () => {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Form />,
      },
      {
        path: "create",
        element: <CreateUser />,
      },
      {
        path: "update",
        element: <UpdateUser />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
