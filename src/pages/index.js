import Head from "next/head";
import RootLayout from "../../components/Layouts/RootLayout";
const HomePage = () => {
  return (
    <div>
      <Head>
        <title>This is Home page</title>
      </Head>
      <h1>This is Root Home Component</h1>
    </div>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
