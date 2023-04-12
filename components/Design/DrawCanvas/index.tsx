import { useState } from "react";
import CanvasDraw from "react-canvas-draw";

import { CANVAS_COLORS, COLOR_BLACK } from "@/utils/colorPalette";
import { BorderBottom } from "@/components/DevPortal/InstallSection/styles";
import {
  Container,
  HelperText,
  CirclesContainer,
  Circle,
} from "@/components/Design/DrawCanvas/styles";

export const DrawCanvas = () => {
  const [currentColor, setCurrentColor] = useState(CANVAS_COLORS[0]);
  return (
    <>
      <Container>
        <CanvasDraw
          hideGrid
          brushColor={currentColor}
          catenaryColor={currentColor}
          style={{
            width: "100%",
            borderRadius: "40px",
            background: COLOR_BLACK,
            height: 440,
          }}
        />
        <HelperText>Use your cursor to draw your vision for Sway</HelperText>
        <CirclesContainer>
          {CANVAS_COLORS.map((color, index) => (
            <Circle
              color={color}
              key={index}
              onClick={() => setCurrentColor(color)}
            />
          ))}
        </CirclesContainer>
      </Container>
      <BorderBottom />
    </>
  );
};
