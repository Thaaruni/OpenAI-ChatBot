import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import {createTheme , ThemeProvider} from "@mui/material";
import App from "./App.tsx";


const theme = createTheme({
    typography:{fontFamily: "Roboto Slab, serif",
    allVariants: {color: "white"},
    }})
createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <ThemeProvider theme={theme}>
              <App/>
          </ThemeProvider>
      </BrowserRouter>


  </StrictMode>,
)
