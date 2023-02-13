// exemple https://www.uniqlo.com/tw/stores/
import "./styles.css";
import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "./img/logo.png";
import MainPage from "./page/mainPage";
import StorePage from "./page/storePage";
import Sidebar from "./component/Sidebar";
import Data from "./data/data"

export default function App() {
  return (
    <StyledWrapper>
      <StyledHeader id="top">
        <Link to="/uniqlo-store-map">
          <img src={Logo} alt="logo" />
        </Link>
      </StyledHeader>
      <StyledMain>
        <Sidebar />
        <div className="content">
          <h1 style={{ backgroundColor: "#fff", padding: 20, marginBottom: 20 }} >店舖資訊</h1>
          <Routes>
            <Route path="/uniqlo-store-map" element={<MainPage />} />
            <Route path="/uniqlo-store-map/:areaID/:storeID" element={<StorePage data={Data} />} />
          </Routes>
        </div>
      </StyledMain>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 1000px;
  background: #e6e6e6;
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  padding-left: 100px;
  width: 100%;
  height: 90px;
  background-color: #fff;
  box-shadow: 0px -20px 30px rgba(0, 0, 0, 0.3);
`;

const StyledMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 20px;
  min-width: 1000px;
  & > .content {
    width: 800px;
  }
`;
