import styled from 'styled-components'
import { Borrder } from './globalSyles';
import { P } from './globalSyles';



export const Cover = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
gap: 40px;
`;
export const Difficulty0 = styled(Borrder)`

  border: 5px solid green;
  color: green;
`;

export const Difficulty1 = styled(Borrder)`

  border: 10px solid orange;
  color: orange;
`;

export const Difficulty3 = styled(Borrder)`
  border: 15px solid red;
  color: red;
`;

export const DishesCard = styled.div`
  border-radius: 10px;
  border: 5px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
   height: 550px;
    background-color: #f8f8f8;
`;
export const Image = styled.img`
  border-radius: 10px;
  border: 5px solid black;
  border-top: none;
`;
export const Title = styled(P)`
  
`;
export const Description = styled.div`
  
`;
export const Preptime = styled(P)`
  
`;
export const Servings = styled(P)`
  
`;
export const Calories = styled(P)`
 
`;

