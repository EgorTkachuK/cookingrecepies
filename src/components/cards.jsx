import dishes from "../data/dishesData.json";
import MeasureDifficulty from "./difficulty";

import { DishesCard } from "../styled.components/styles";
import { Image } from "../styled.components/styles";
import { Title } from "../styled.components/styles";
import { Description } from "../styled.components/styles";
import { Preptime } from "../styled.components/styles";
import { Servings } from "../styled.components/styles";
import { Calories } from "../styled.components/styles";
import { Cover } from "../styled.components/styles";


export const DishesList = () => {
  return (
    <Cover>
      {dishes.map((dish, index) => {
        return (
          <DishesCard key={index} className="dish-card">
            <Image src={dish.image} alt={dish.title} />
            <Title>{dish.title}</Title>
            <Description>
              <Preptime>{dish.prepTime}</Preptime>
              <Servings>{dish.servings}</Servings>
              <Calories>{dish.calories}</Calories>
            </Description>
            <MeasureDifficulty value={dish.difficulty} />
          </DishesCard>
        );
      })}
    </Cover>
  );
};