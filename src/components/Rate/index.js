import { useState } from "react";
// Components
import Button from "../Button";
// Styles
import { Slider, Wrapper } from "./Rate.styles";


const Rate = ({ callback }) => {
  const [value, setValue] = useState(5);
  return (
    <Wrapper>
      <Slider>
        <input
          type="range"
          min="1"
          max="10"
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
        />
        <p className='rate__value'>{value}</p>
      </Slider>
      <p>
        <Button text='Rate' callback={() => callback(value)} />
      </p>
    </Wrapper>
  );
};

export default Rate