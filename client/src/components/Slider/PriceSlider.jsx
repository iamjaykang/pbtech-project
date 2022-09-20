import React from "react";
import { styled } from "@mui/material/styles";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";

const Input = styled(MuiInput)`
  width: 42px;
`;

const PriceSlider = () => {
  const [value, setValue] = React.useState(30);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };
  return (
    <div>
      <div className="flex w-full gap-[118px] ml-[92px]">
        <h3 className="text-pb-text text-xl">Max Price</h3>
        <h3 className="text-pb-gray text-xl">$2500</h3>
      </div>
        <Slider
          value={typeof value === "number" ? value : 0}
          onChange={handleSliderChange}
          aria-labelledby="input-slider"
          className="w-[260px] ml-[92px]"
        />
      <Input
        value={value}
        size="small"
        className="hidden"
        onChange={handleInputChange}
        onBlur={handleBlur}
        inputProps={{
          step: 10,
          min: 0,
          max: 100,
          type: "number",
          "aria-labelledby": "input-slider",
        }}
      />
    </div>
  );
};

export default PriceSlider;
