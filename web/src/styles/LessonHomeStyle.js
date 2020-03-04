import styled from "styled-components";
import { Link } from "react-router-dom";

export const LessonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`;

export const LessonCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 30%;
  margin: 1%;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 900px) {
    width: 30%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const LessonImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;
export const LessonDetailsContainer = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  border-top: none;
  height: 80px;
`;

export const LessonDetails = styled.p`
  font-size: 16px;
  margin: 5px;
  line-height: 15px;
`;

export const LessonLink = styled(Link)`
  -webkit-text-decoration: none !important;
  text-decoration: none !important;
  color: rgb(70, 70, 70) !important;
`;
