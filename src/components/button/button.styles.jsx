import styled from "styled-components";

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  padding: 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center; 
  letter-spacing: 0.5px;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;
// notice the following line, it means google sign in button will extends base button we just created, and have additional styling to it
export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
    color: white;

    &:hover {
      background-color: #357ae8;
      border: none;
    }
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
      background-color: black;
      color: white;
      border: none;
    }
`;

// .button-container {
//   min-width: 165px;
//   width: auto;
//   height: 50px;
//   padding: 0 35px;
//   font-size: 15px;
//   background-color: black;
//   color: white;
//   text-transform: uppercase;
//   font-family: 'Open Sans Condensed';
//   font-weight: bolder;
//   border: none;
//   cursor: pointer;
//   display: flex;
//   justify-content: center;
//   align-items: center;   // ✅ vertically centers text
//   letter-spacing: 0.5px;

//   &:hover {
//     background-color: white;
//     color: black;
//     border: 1px solid black;
//   }



//   &.google-sign-in {
//     background-color: #4285f4;
//     color: white;

//     &:hover {
//       background-color: #357ae8;
//       border: none;
//     }
//   }

//   &.inverted {
//     background-color: white;
//     color: black;
//     border: 1px solid black;

//     &:hover {
//       background-color: black;
//       color: white;
//       border: none;
//     }
//   }
// }
