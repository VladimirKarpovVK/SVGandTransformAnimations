import React, { useState } from "react";
import { useSpring, animated as a } from "react-spring";
import styled, { css } from "styled-components";

import ReactDOM from "react-dom";

import "./styles.css";
/*
This is very important
stuff down here
*/

const size = {
  small: 640,
  med: 980,
  large: 1140
};
const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${size[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
const data = [
  {
    id: 1,
    name: "Fake Name",
    age: 32,
    description:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but becauseruuaarrua",

    img:
      "https://e1.am.phnx.pics/phnx/kolobok/80/83/08/808308/7817db40c917c6e4c72a2f42d7fc4d20-quality_70Xresize_crop_1Xallow_enlarge_0Xw_698Xh_465.jpg"
  },
  {
    id: 2,

    name: "Hasssh Hook",
    description:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because",
    age: 37,
    img:
      "https://s7.cdn.teleprogramma.pro/wp-content/uploads/2019/07/1fe7f37f702ac407e70329fcc7fb97bd.jpg"
  },
  {
    id: 3,

    name: "Hasssh Hook",
    description:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because",
    age: 37,
    img: "https://v1.popcornnews.ru/k2/news/970/upload/SC5SkA.jpg"
  },
  {
    id: 4,

    name: "Hasssh Hook",
    description:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because",
    age: 37,
    img: "http://brovinka.ru/img/139_img1.jpg"
  }
];

const Image = styled.img`
  max-width: 100%;
  width: 100%;
`;

const StyledDiv = styled.div`
  width: 46%;
  background-color: #eafd3f;

  margin: 0% 1% 4% 0%;
`;
const AnimatedP = ({ animation, description }) => {
  return (
    <>
      <a.p style={animation}>{description}</a.p>
    </>
  );
};
const StyledPar = styled(AnimatedP)`
  background-color: #fff;
  margin: 2% 2% 2% 2%;
  padding: 20px;
  font-family: "Roboto sans-serif";
`;
const Button = styled.button`
  width: 40%;
  cursor: pointer;

  margin: 5% 0% 4% 50%;
  border: none;
  font-size: 1.4em;
  color: #fff;
  font-family: "Arial sans-serif";

  background-color: #b53ad4;

  padding: 5% 5% 5% 5%;
`;
const StyledHeader = styled.h2`
  color: #b53ad4;
  margin: 2px;
  padding:6%;
`;

const StyledSVG = styled.svg`
  position: absolute;
  top: 12px;
  left: -2px;
  width: 100px;
  height: 100px;
`;
const StyledSpan = styled.span`
  color: silver;
  position: relative;
  margin-left: 5px;

  font-weight: bold;
  padding: 7% 7% 7% 4%;
 `;
const Item = ({ img, name, description, age }) => {
  const [visible, setVisible] = useState(false);

  
  const animation = useSpring({
    opacity: visible ? 1 : 0,
    y: visible ? 0 : 100,
    color: "#B53AD4",
    margin: "2px 12px 12px 2px"
  });
const {length}=useSpring({
  length:visible?0:189
});
  return (
    <StyledDiv>
      <Image src={img} />
      <StyledHeader>{name}</StyledHeader>
      <StyledSpan>
        <StyledSVG>
           

          <a.path
          fill="none"
          stroke-dashoffset={length}
          stroke-dasharray="189"
          stroke="green" stroke-width="5"
  d="M10,40a30,30 0 1,0 60,0a30,30 0 1,0 -60,0"/>
        </StyledSVG>
        {age}
      </StyledSpan>

      <Button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        Show Info
      </Button>
      <StyledPar
        animation={{
          ...animation,
          transform: animation.y.interpolate(y => `translate3d(0,${y}px,0)`)
        }}
        description={description}
      />
    </StyledDiv>
  );
};
const StyledItem = styled(Item)`
  width: 100%;
  font-family: "Roboto sans-serif";
`;
const AppWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 0%;
`;

function App() {
  return (
    <AppWrapper>
      {data.map(({ name, description, img, age, id }, i) => {
        return (
          <StyledItem
            key={id}
            name={name}
            description={description}
            age={age}
            img={img}
          />
        );
      })}
    </AppWrapper>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
