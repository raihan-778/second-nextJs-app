import RootLayout from "../../components/Layouts/RootLayout";
const HomePage = () => {
  return (
    <div>
      <h1 style={{ color: "#fff" }}>This is Root Home Component</h1>
    </div>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
