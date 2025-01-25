export const handleInteractionEnd = (
  event:
    | React.MouseEvent<HTMLButtonElement>
    | React.TouchEvent<HTMLButtonElement>
) => {
  const target = event.currentTarget;
  target.blur();
};
