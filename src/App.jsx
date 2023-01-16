import Chat from "./components/Chat"
import SignIn from "./components/SignIn"
import "./styles/main.css";
import { useTheme, ThemeProvider, createTheme } from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase.js";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


function App() {
  
  const [user] = useAuthState(auth);

  

  return (
    <ThemeProvider theme={darkTheme}>
    {user ? <Chat /> : <SignIn />}
   

    </ThemeProvider>
  )
}

export default App
