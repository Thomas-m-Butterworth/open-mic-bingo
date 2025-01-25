import React from "react";
import styled from "styled-components";
import { Button } from "../ui";
import { useBingoStore } from "@/store/bingoStore";
import { handleInteractionEnd } from "@/utils";

const Controls = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8px;
  justify-content: center;
  margin-bottom: 24px;
`;

export const GameControls = () => {
  const { resetBoard, resetSelectedSquares, selectedSquares } = useBingoStore();
  return (
    <>
      <Controls>
        <Button
          onMouseUp={handleInteractionEnd}
          onTouchEnd={handleInteractionEnd}
          onClick={resetBoard}
        >
          Reset Board
        </Button>
        <Button
          onMouseUp={handleInteractionEnd}
          onTouchEnd={handleInteractionEnd}
          onClick={resetSelectedSquares}
          disabled={!selectedSquares.length}
        >
          Reset Selections
        </Button>
      </Controls>
    </>
  );
};
