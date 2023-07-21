import { useRouter } from "next/router";
import React from "react";

const NewsDetailsPage = () => {
  const router = useRouter();
  return (
    <div>
      <h1>This is dynamic route for news: {router.query.newsId}</h1>
    </div>
  );
};

export default NewsDetailsPage;
