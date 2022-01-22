import React from "react";
import Header from "../Components/Header";
import BottomNavigator from "../Components/BottomNavigator";

interface IProps {}

const Main: React.FC<IProps> = () => {
  return (
    <>
      <Header />
      <div />
      <BottomNavigator />
    </>
  );
};

export default Main;
