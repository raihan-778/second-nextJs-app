import { Button } from "antd";
import Link from "next/link";
import React from "react";
import RootLayout from "../../../components/Layouts/RootLayout";

const NewsHomePage = () => {
  return (
    <div>
      <h1>This is news home page</h1>
      <Button type="primary">
        <Link href="/">Home</Link>
      </Button>
    </div>
  );
};

export default NewsHomePage;

NewsHomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
