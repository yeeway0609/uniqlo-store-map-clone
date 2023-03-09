import styled from "styled-components";
import MapRender from "../../component/MapRender";
import { useParams } from "react-router-dom";

// ':areaID' and ':storeID' param defined in the route in the App.jsx
// Use the `useParams` hook to access the pieces of the URL, and find out which store it is.
function StorePage({ data }) {
  const { areaID, storeID } = useParams();
  const path = `${areaID}/${storeID}`;
  const thisArea = data.find((data) => data.id === areaID);
  const thisStore = thisArea.children.find((store) => store.id === path);

  return (
    <>
      <StyledTitle>
        <h3>{thisStore.storeName}</h3>
      </StyledTitle>
      <StyledStorePage>
        <MapRender address={thisStore.address} />
        <StyledStoreInfo>
          <li>電話</li>
          <li>{thisStore.tel}</li>
          <li>地址</li>
          <li>{thisStore.address}</li>
          <li>營業時間</li>
          <li>{thisStore.openTime}</li>
          <li>販售系列</li>
          <li>{thisStore.series}</li>
        </StyledStoreInfo>
      </StyledStorePage>
    </>
  );
}

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
