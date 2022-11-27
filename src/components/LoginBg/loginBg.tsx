import { Box } from "@mui/material";
import { BgLeft1, BgLeft2, BgLeft3, BgLeft4, BgLeft5, BgRight1, BgRight2, BgRight3, BgRight4 } from "./loginBg.style";
import left1 from '@/assets/images/left1.png';
import left2 from '@/assets/images/left2.png';
import left3 from '@/assets/images/left3.png';
import left4 from '@/assets/images/left4.png';
import left5 from '@/assets/images/left5.png';
import right1 from '@/assets/images/right1.png';
import right2 from '@/assets/images/right2.png';
import right3 from '@/assets/images/right3.png';
import right4 from '@/assets/images/right4.png';
import React from 'react';


const LoginBg = () => {
  return (
    <Box
      sx={{
        width: "calc(100% - 60px)",
        height: "calc(100% - 120px)",
        position: "absolute",
        margin: "30px",
        borderBottomRightRadius: "60%",
        borderBottomLeftRadius: "20%",
        backgroundColor: "#f6f6f6",
        // backgroundImage: `url(${login1680})`,
      }}

    >
      <BgLeft1 sx={{ position: 'absolute', width: "25px", height: "32px" }}>
        <img src={left1} />
      </BgLeft1>
      <BgLeft2 sx={{ position: 'absolute', width: "38px", height: "61px" }}>
        <img src={left2} />
      </BgLeft2>
      <BgLeft3 sx={{ position: 'absolute', width: "343px", height: "343px" }}>
        <img src={left3} />
      </BgLeft3>
      <BgLeft4 sx={{ position: 'absolute', width: "9px", height: "8px" }}>
        <img src={left4} />
      </BgLeft4>
      <BgLeft5 sx={{ position: 'absolute', width: "24px", height: "37px" }}>
        <img src={left5} />
      </BgLeft5>
      <BgRight1 sx={{ position: 'absolute', width: "38px", height: "52px" }}>
        <img src={right1} />
      </BgRight1>
      <BgRight2 sx={{ position: 'absolute', width: "275px", height: "275px" }}>
        <img src={right2} />
      </BgRight2>
      <BgRight3 sx={{ position: 'absolute', width: "14px", height: "14px" }}>
        <img src={right3} />
      </BgRight3>
      <BgRight4 sx={{ position: 'absolute', width: "23px", height: "36px" }}>
        <img src={right4} />
      </BgRight4>
    </Box>
  );
};
export default LoginBg;
