import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Title = (props) => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }; // 滑順地捲動到網頁頂端

  return (
    <StyledTitle id={props.titleID}>
      <h3 style={{ color: "#fff" }}>{props.titleName}</h3>
      <StyledBackToTop onClick={goToTop}>
        <FontAwesomeIcon icon={faChevronUp} style={{ color: '#fff' }} />
      </StyledBackToTop>
    </StyledTitle>
  );
};

export default Title;

const StyledTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  margin-bottom: 20px;
  background-color: #666666;
`;

const StyledBackToTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border: 1px solid #fff;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
  }
`;