import { createBrowserRouter } from "react-router-dom";

// Components
import Form from "../components/Form";
import NotFound from "../components/NotFound";
import CreateUser from "../components/CreateUser";
import UpdateUser from "../components/UpdateUser";
import App from "../App";

const Router = () => {
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
          path: "update/:id",
          element: <UpdateUser />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return router;
};
export default Router;
