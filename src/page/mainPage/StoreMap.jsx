import { useState } from "react";
import styled from "styled-components";
import MapRender from "../../component/MapRender";
import Data from "../../data/data";

// When you click a store, the state of mapAddress will be changed and MapRender will rerender.
const StoreMap = () => {
  const [mapAddress, setMapAddress] = useState("桃園市八德區介壽路一段555號");

  return (
    <StyledStoreMap>
      <MapRender address={mapAddress} />
      {Data.map((Area) => {
        return (
          <StyledMapList>
            <p>{Area.area}</p>
            <ul>
              {Area.children.map((store) => {
                return (
                  <li onClick={() => {setMapAddress(store.address);}}>
                    {store.storeName}
                  </li>
                );
              })}
            </ul>
          </StyledMapList>
        );
      })}
    </StyledStoreMap>
  );
};

export default StoreMap;

const StyledStoreMap = styled.div`
  padding: 20px;
  background-color: #fff;
`;

const StyledMapList = styled.div`
  & > p {
    font-size: 13px;
    color: #ff0000;
  }
  & > ul {
    display: flex;
    flex-wrap: wrap;
  }
  & > ul > li {
    margin-bottom: 10px;
    width: 25%;
    font-size: 13px;
  }
  & > ul > li:hover {
    color: #ff0000;
    cursor: pointer;
  }
`;
