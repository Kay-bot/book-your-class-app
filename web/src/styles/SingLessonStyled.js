import styled from "styled-components";

export const SingleLessonImage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
`;

export const SLDetailsContainer = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  border-top: none;
`;

export const SingleLessonContainer = styled.div`
  *,
  :after,
  :before {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  display: block;
  padding-right: 500px;

  @media (max-width: 500px) {
    width: 100%;
  }
  @media (max-width: 1281px) {
    width: 50%;
  }
  justify-content: center;
  text-align: justify;
`;

export const Subheader = styled.div`
  color: #643e44;
  font-weight: 700;
  font-size: 22px;
  margin-bottom: 24px;
`;

export const P = styled.p`
  margin: 0 0 10px;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

export const BookBtn = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
  line-height: 21px;
  font-weight: 700;
  height: 36px;
`;
export const InnerContainer = styled.div`
  padding: 24px;
`;
export const BookingWrapper = styled.div`
  *,
  :after,
  :before {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  border-radius: 10px;
  border: 1px solid lightgrey;
  display: block;
  position: absolute;
  top: 100px;
  right: 0;

  @media (max-width: 500px) {
    width: 100%;
  }
  @media (max-width: 1281px) {
    width: 50%;
  }
`;

export const SingleLessonWrapper = styled.section`
  padding-top: 100px;
  overflow-x: hidden;
  overflow-y: hidden;
  max-width: 1700px;
  margin: 10px;
  min-height: calc(100vh - 41px);
  /* background: papayawhip; */
  position: relative;
`;
