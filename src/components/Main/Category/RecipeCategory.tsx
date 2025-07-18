import styled from "styled-components";
import { useState } from "react";
import { ICategoryProps } from "../../../types/interface";

const SCategoryLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5rem;
  @media ${({ theme }) => theme.device.tablet} {
    margin-bottom: 2rem;
  }
`;

const SH1 = styled.h1`
  width: 100%;
  margin-bottom: 30px;
  font-size: 1.6rem;
  font-weight: bold;
  color: var(--deep-green);
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 1.2rem;
  }
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 1rem;
    margin-bottom: 15px;
  }
`;

const CategoryList = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  @media ${({ theme }) => theme.device.desktop} {
    gap: 30px;
  }
  @media ${({ theme }) => theme.device.tablet} {
    gap: 3px;
  }
`;

const CategoryItem = styled.div`
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 12px;
  color: gray;

  &.active {
    background-color: #fff3cd;
    font-weight: bold;
    color: black;
  }
  &:hover {
    background-color: #f7f7f7;
  }

  @media (min-width: 768px) {
    padding: 10px 20px;
  }
`;

const RecipeCategory = ({ setCategory }: ICategoryProps) => {
  const onCategoryClick = (categoryValue: string) => {
    setCategory(categoryValue);
  };

  const [active, setActive] = useState(1);

  return (
    <SCategoryLayout>
      <SH1>레시피 분류</SH1>
      <CategoryList>
        <CategoryItem
          className={active === 1 ? "active" : ""}
          onClick={() => {
            setActive(1);
            onCategoryClick("밥");
          }}
        >
          밥
        </CategoryItem>
        <CategoryItem
          className={active === 2 ? "active" : ""}
          onClick={() => {
            setActive(2);
            onCategoryClick("면");
          }}
        >
          면
        </CategoryItem>
        <CategoryItem
          className={active === 3 ? "active" : ""}
          onClick={() => {
            setActive(3);
            onCategoryClick("디저트");
          }}
        >
          디저트
        </CategoryItem>
        <CategoryItem
          className={active === 4 ? "active" : ""}
          onClick={() => {
            setActive(4);
            onCategoryClick("음료");
          }}
        >
          음료
        </CategoryItem>
        <CategoryItem
          className={active === 5 ? "active" : ""}
          onClick={() => {
            setActive(5);
            onCategoryClick("기타");
          }}
        >
          기타
        </CategoryItem>
      </CategoryList>
    </SCategoryLayout>
  );
};

export default RecipeCategory;
