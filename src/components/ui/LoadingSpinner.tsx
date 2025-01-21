import styled from "styled-components";

export const LoadingSpinner = styled.div`
  position: fixed;
  top: 40%;
  width: 150px;
  height: 150px;
  transform: translate(-50%, -50%);
  animation: spin 3s ease-in-out infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-image: url("/icon.png");
  background-size: cover;
  background-position: center;
  box-sizing: border-box;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
