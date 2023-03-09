import React from "react";
import styled from "styled-components";
import Data from "../../data/data";
import StoreMap from "./StoreMap";
import AllStore from "./AllStore";
import Title from "./Title";

const MainPage = () => {
  return (
    <>
      <StyledNavbar>
        <ul>
          {Data.map((area) => {
            return (
              <li>
                <a href={`#${area.id}`}>{area.area}</a>
              </li>
            );
          })}
          <li>
            <a href="#StoreMap">店舖地圖</a>
          </li>
        </ul>
      </StyledNavbar>
      <AllStore />
      <Title titleID="StoreMap" titleName="店鋪地圖" />
      <StoreMap />
    </>
  );
};

export default MainPage;

const StyledNavbar = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px 0;
  margin-bottom: 20px;
  background-color: #3d3d3d;
  & > ul {
    display: flex;
    justify-content: space-around;
    width: 100%;
    list-style: none;
  }
  & > ul > li {
    display: flex;
    justify-content: center;
    width: 100%;
    border-right: 0.1px solid #fff;
    cursor: pointer;
  }
  & > ul > li:last-child {
    border-right: 0;
  }
  & > ul > li > a {
    text-decoration: none;
    color: #fff;
  }
  & > ul > li > a:hover {
    color: rgba(255 0 0);
  }
`;
