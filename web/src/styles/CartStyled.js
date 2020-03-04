import styled from "styled-components";

const Wrapper = styled.section`
  padding: 4em;

  height: 100%;
  overflow-y: hidden;
  @media (max-width: 767px) {
    padding: 0 24px;
  }
  *,
  :after,
  :before {
    box-sizing: border-box;
  }
  display: flex;
`;

const SectionWrapper = styled.div`
  @media (min-width: 992px) {
    width: 33.33333333%;
  }
  @media (min-width: 992px) {
    float: left;
  }
  position: relative;
  min-height: 1px;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: 10px;
  margin-right: 10px;
  *,
  :after,
  :before {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  display: block;
`;

const CartHeader = styled.div`
  margin-bottom: 32px;
  font-weight: 700;
  font-size: 25px;
  padding-bottom: 18px;
  border-bottom: 1px lightgrey solid;
`;

const H4 = styled.h4`
  text-align: center;
  line-height: 32px;
  margin-top: 10px;
  *,
  :after,
  :before {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  display: block;
  margin-block-start: 1.33em;
  margin-block-end: 1.33em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

const Span = styled.span`
  display: none;
  *,
  :after,
  :before {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
`;

const Row = styled.div`
  margin-left: -15px;
  margin-right: -15px;
  *,
  :after,
  :before {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  display: block;
`;

export { Wrapper, SectionWrapper, CartHeader, H4, Span, Row };
