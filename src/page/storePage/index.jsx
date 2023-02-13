import styled from "styled-components";
import MapRender from "../../component/Map";
import { useParams } from "react-router-dom";

// Params are placeholders in the URL that begin with a colon, like the ':areaID'
// and ':storeID' param defined in the route in the App.jsx
// We can use the `useParams` hook to access the dynamic pieces of the URL.

function StorePage ({data}) {
  const { areaID, storeID } = useParams(); // North 01
  const path = `${areaID}/${storeID}`; // North/01
  const thisArea = data.find(data => data.id === areaID); // {id: "North", area: "北部", children: ...}
  const thisStore = thisArea.children.find((prod) => prod.id === path); // {id: "North/01", storeName: "八德介壽路店"...}

  return (
    <>
    <StyledTitle><h3>{thisStore.storeName}</h3></StyledTitle>
    <StyledStorePage>
      <MapRender address={thisStore.address} />
      <StyledStoreInfo>
        <li>電話</li>
        <li>{thisStore.tel}</li> {/* (02)8286-2426 */}
        <li>地址</li>
        <li>{thisStore.address}</li> {/* 24765 新北市蘆洲區長榮路253號 */}
        <li>營業時間</li>
        <li>{thisStore.openTime}</li> {/* 週一〜週日 11:00〜22:00 */}
        <li>販售系列</li>
        <li>{thisStore.series}</li> {/* 男裝、女裝、童裝、BABY系列 */}
      </StyledStoreInfo>
    </StyledStorePage>
    </>
  );
};

export default StorePage;

const StyledTitle = styled.div`
  padding: 15px;
  margin-bottom: 20px;
  color: #fff;
  background-color: #000;
`;

const StyledStorePage = styled.div`
  padding: 20px;
  background-color: #fff;
`;

const StyledStoreInfo = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  & > li:nth-child(odd) {
    padding: 10px;
    margin-bottom: 5px;
    border-right: 5px solid #fff;
    width: 30%;
    background-color: #cecece;
  }
  & > li:nth-child(even) {
    padding: 10px;
    margin-bottom: 5px;
    width: 70%;
    background-color: #e6e6e6;
  }
`;