import styled from "styled-components";

const MapRender = ({address}) => {
  let mapSrc =`https://www.google.com/maps?q=${address}&hl=zh-TW&z=16&t=&output=embed`;
  return (
    <StyledMap>
      <iframe title="StoreMap" src={mapSrc} width="100%" height="100%" ></iframe>
    </StyledMap>
  );
};

export default MapRender;

const StyledMap = styled.div`
  width: 100%;
  padding-top: 75%;
  & > iframe {
    position: absolute;
    top: 0;
    left: 0;
    border: none;
  }
`;
