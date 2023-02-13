import styled from "styled-components";
import Data from "../../data/data"
import ToggleList from "./ToggleList"

const Sidebar = () => {
  return (
    <StyledSidebar>
      <ul>
        {
          Data.map((data) => {
            return (
              <ToggleList area={data} />
            );
          })
        }
      </ul>
    </StyledSidebar>
  );
};

export default Sidebar;

const StyledSidebar = styled.div`
  padding: 5px 10px;
  width: 150px;
  background-color: #fff;
`;
