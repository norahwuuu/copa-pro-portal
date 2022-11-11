import login1680 from "@/assets/images/login1680.png";
import { Box } from "@mui/material";
const LoginBg = () => {
  return (
    <Box
      sx={{
        width: "1220px",
        height: "592px",
        position: "absolute",
        top: "24px",
        left: "50%",
        marginLeft: "-610px",
        backgroundImage: `url(${login1680})`,
      }}
    ></Box>
  );
};
export default LoginBg;
