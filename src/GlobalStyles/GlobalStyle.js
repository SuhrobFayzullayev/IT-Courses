// Styled component
import styled, { createGlobalStyle } from "styled-components";

// Global styled component
export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter+Tight@&display=swap');
  h1, h2, h3, h4, h5, h6, p, span, .nav-link, .dislay-1, .display-2, .display-3, .display-4, .display-5, .display-6, .fs-1, .fs-2, .fs-3, .fs-4, .fs-5, .fs-6 {
    font-family: 'Inter Tight', sans-serif !important ;
    color: white !important;
  } 

  .bg-dark{
    background-color: #18113C !important;
  }
  
  .text-dark{
    color: #18113C !important;
  }

  .btn-primary, .bg-primary{
    background-color: #754FFE !important;
  }

  .text-primary, .border-primary{
    color:#663cfc !important;
    border-color: #663cfc !important;
  }

  .btn-info, .bg-info{
    background-color: #239ED4 !important;
  }

  .text-info, .border-info{
    border-color: #239ED4 !important;
    color: #239ED4 !important;
  }

  .more-btn a{
    &::after {
      display: none !important;
    }

    svg{
      font-size: 22px;
    }
  }

  .logo{
    filter: brightness(0) invert(1);
  }

  .navbar-toggler:focus{
    box-shadow: 0 0 0 0 transparent !important; 
  }

  .nav-item .nav-link{
    @import url("https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap");
    color: white !important;
    font-size: 14px;
    font-family: "Inter";
    margin-top: 13px !important;
    padding: 0;
    
    &:hover{
      color: white;
    }
    &:focus{
      color: white !important;
    }
  }
`;
