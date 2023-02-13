import { useState } from "react";
import styled from "styled-components";
import MapRender from "../../component/Map";
import Data from "../../data/data"

const StoreMap = () => {
  const [mapAddress, setMapAddress] = useState("桃園市八德區介壽路一段555號");

  return (
    <StyledStoreMap>
      <MapRender address={mapAddress} />
      {
        Data.map((area) => {
          return (
            <StyledMapList>
              <p>{area.area}</p>
              <ul>
                {
                  area.children.map((store) => {
                    return (
                      <li onClick={() => {
                        setMapAddress(store.address);
                      }}>
                        {store.storeName}
                      </li>
                      // 按下此li時，setMapAddress會將mapAddress改成點擊時店名的地址，進而改變MapReender裡的Google map
                    );
                  })
                }
              </ul>
            </StyledMapList>
          );
        })
      }
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


