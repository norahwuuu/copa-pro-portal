import { Box, styled, TextField } from "@mui/material";

export const SelectBox = styled(Box)`
& .Mui-selected{
   background-color:none !important;
}
,
&.css-e46okz-MuiButtonBase-root-MuiMenuItem-root{
  .Mui-selected{
  background-color:none !important
  }
}



,
& .Mui-selected{
  background-color:none !important;
}
,
& .css-e46okz-MuiButtonBase-root-MuiMenuItem-root.Mui-selected:hover{
  background-color:none;
}
,

 & .css-1aazxku-MuiInputBase-root-MuiOutlinedInput-root {
    color: #595655;
    font-weight: 300;
    font-style: normal;
 }
 ,
 & .css-zsx68t-MuiInputBase-root-MuiOutlinedInput-root,
 .css-h01m1h-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root.Mui-disabled{
      color: #595655 !important;
 }
 ,
  & .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
    border: 1px solid #999;
  }
  ,
  & .Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #333 !important;
    border-width: 1px !important;
  }
  ,
  &:hover .MuiInputBase-colorError .MuiOutlinedInput-notchedOutline {
    border: 1px solid #c02820;
  }
  ,
  & .MuiInputBase-colorError .MuiOutlinedInput-notchedOutline {
    border: 1px solid #c02820;
  }
  ,
  & .MuiInputLabel-root {
    color: #595655;
    font-size: 14px;
    background: #fff;
    border-radius: 10px;
  }
  ,
  & .MuiFormLabel-filled {
    color: #999 !important;
  }
  ,
  & .Mui-focused {
    color: #333 !important;
  }
  ,
  & .css-hfutr2-MuiSvgIcon-root-MuiSelect-icon{
    color: #C02820 !important
  }

`;