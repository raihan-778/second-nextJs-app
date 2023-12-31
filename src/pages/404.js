import { useRouter } from "next/router";
import React from "react";

const ErrorPage = () => {
  const routes = useRouter();

  setTimeout(() => {
    routes.push("/news");
  }, 5000);

  return (
    <div>
      <div>
        {" "}
        <img
          src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7888.jpg?w=2000"
          alt=""
          width="100%"
        />
      </div>
    </div>
  );
};

export default ErrorPage;
