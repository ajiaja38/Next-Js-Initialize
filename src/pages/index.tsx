import React from "react";
import { GetServerSideProps } from "next";

interface HomeProps {
  data: any;
}

const Home: React.FC<HomeProps> = ({ data }) => {
  return (
    <div>
      <div>Hello, My Name Is {data.name}</div>
      <div>And i am {data.age} years old</div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/hello");
    const data = await response.json();

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: { data: null },
    };
  }
};

export default Home;
