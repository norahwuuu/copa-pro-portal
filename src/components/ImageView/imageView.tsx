/**
 *   ImageView: Container displaying tooth picture
 *   @param
 *   sxProp: container style
 *   src: src of picture
 *   @return
 *
 */
import clearPng from "@/assets/images/clear.png";
import NoPhotographyOutlinedIcon from "@mui/icons-material/NoPhotographyOutlined";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import { Box, Container, Grid } from "@mui/material";
import { FC, useState } from "react";
import { ImageViewProps } from "./type";

const ImageView: FC<ImageViewProps> = ({ src = undefined, sxProp }) => {
  // shadow show or hidden
  const [showShadow, setShowShadow] = useState<boolean>(false);

  // click show big model of picture
  const handleClick = () => {
    const maskContainer = document.getElementById("imageView");
    if (!maskContainer) {
      const mask = document.createElement("div");
      mask.setAttribute("id", "imageView");
      mask.style.width = "100%";
      mask.style.height = "100%";
      mask.style.position = "absolute";
      mask.style.background = "#3333334D 0% 0% no-repeat padding-box";
      mask.style.opacity = "1";
      mask.style.cursor = "pointer";
      mask.style.left = "0";
      mask.style.top = "0";
      mask.style.zIndex = "1";
      mask.style.display = "flex";
      mask.style.justifyContent = "center";
      mask.style.alignItems = "center";
      const content = document.createElement("div");
      content.style.width = "30%";
      content.style.height = "40%";
      content.style.minWidth = "615px";
      content.style.minHeight = "478px";
      content.style.padding = "30px";
      content.style.background = `url(${src}) no-repeat center`;
      content.style.backgroundSize = "calc(100% - 60px)";
      content.style.backgroundColor = "#fff";
      content.style.position = "relative";
      const removeContent = document.createElement("div");
      removeContent.style.width = "20px";
      removeContent.style.height = "20px";
      removeContent.style.position = "absolute";
      removeContent.style.left = "calc(100% - 28px)";
      removeContent.style.top = "10px";
      removeContent.style.background = `url(${clearPng}) no-repeat center`;
      removeContent.onclick = () => {
        document.body.removeChild(mask);
      };
      content.appendChild(removeContent);
      mask.appendChild(content);
      document.body.appendChild(mask);
    }
  };
  return (
    <Grid
      sx={{
        width: 84,
        height: 65,
        border: "1px solid #ccc",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        ...sxProp,
      }}
    >
      {src && src !== "" ? (
        <div
          onMouseOver={() => {
            setShowShadow(true);
          }}
          onClick={handleClick}
          onMouseOut={() => {
            setShowShadow(false);
          }}
          style={{
            width: "100%",
            height: "100%",
            background: `url(${src}) no-repeat center`,
            backgroundSize: "80% 70%",
            display: "flex",
          }}
        >
          <Container
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              background: "rgba(0,0,0,0.2)",
              visibility: showShadow ? "visible" : "hidden",
            }}
          >
            <Box
              sx={{
                width: "26px",
                height: "26px",
                borderRadius: "13px",
                backgroundColor: "secondary.main",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ZoomInIcon sx={{ color: "#fff", fontSize: "22px" }} />
            </Box>
          </Container>
        </div>
      ) : (
        <NoPhotographyOutlinedIcon
          sx={{ color: "gray.darken" }}
          width={21}
          height={21}
        />
      )}
    </Grid>
  );
};

export default ImageView;
