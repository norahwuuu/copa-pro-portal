import React, { ChangeEvent, DragEvent, useEffect } from "react";
import ICons from "@/components/Icons/icons";
import Text from "@/components/Text/text";
import theme from "@/theme/theme";
import { RowCenterAlign, ColumnCenterAlign } from "@/theme/themen.util";
import { Theme } from "@emotion/react";
import { SxProps, Box, Card, IconButton } from "@mui/material";
import { FC, useState, useRef } from "react";
import WarningIcon from '@mui/icons-material/Warning';

interface IImageBoxProps {
  title: string,
  imgBoxSxProps: SxProps<Theme>
  isImageRequired?: boolean,
  imgPath: string | File,
  updateImagePath: React.Dispatch<React.SetStateAction<string | File>>
}


const ValidationAlert: FC<{ filename: string }> = ({ filename }) => {
  return (
    <Box component={"div"}
      sx={{
        background: "#F3DADB 0% 0% no-repeat padding-box",
        border: "1px solid #C02820",
        borderRadius: "4px",
        opacity: 1,
        display: "flex",
        alignItems: "start",
        p: 2,
        my: 1,
        maxWidth: "500px"
      }}>
      <Box>
        <WarningIcon color={"error"} fontSize={"small"} sx={{ mr: 1 }} />
      </Box>
      <Box>
        <Text variant={"body2"} color={"error"} sxProp={{ fontWeight: 300 }}>
          {`${filename} has failed to upload. Try again with jpg, png, tiff, bmp files only.`}
        </Text>
      </Box>
    </Box>
  )
}

const ImageBox: FC<IImageBoxProps> = ({ title, imgBoxSxProps, imgPath, updateImagePath, isImageRequired = false }) => {
  const [dragActive, setDragActive] = useState<boolean>(false);
  const [filename, setFilename] = useState<string>("")
  const inputRef = useRef();
  const [preview, setPreview] = useState<string>("");
  const [invalidFile, setInvalidFile] = useState<boolean>(false);
  const [isRequired, setIsRequired] = useState<boolean>(false)

  useEffect(() => {
    if (imgPath && imgPath[0]) {
      const url = URL.createObjectURL(imgPath);
      setPreview(url)
    }
  }, [imgPath])

  useEffect(() => {
    setIsRequired(isImageRequired)
  }, [isImageRequired])

  const handleFile = (files: FileList) => {
    const file = files[0]
    const validExtensions = ['png', 'jpeg', 'jpg']
    const fileExtension = file.type.split('/')[1]
    setFilename(file.name)
    if (validExtensions.includes(fileExtension)) {
      setInvalidFile(false)
      const url = URL.createObjectURL(files[0]);
      console.log("url", url);
      setPreview(url)
      updateImagePath(files[0])
    } else {
      setInvalidFile(true)
    }
  }


  // handle drag events
  const handleDrag = function (e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  const handleDrop = function (e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files);
    }
  };

  // triggers when file is selected with click
  const handleChange = function (e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const files = (e.target as HTMLInputElement).files;
    if (files && files[0]) {
      handleFile(files);
    }
  };

  // triggers the input when the button is clicked
  const onButtonClick = () => {
    if (inputRef && inputRef.current) {
      inputRef.current.click();
    }
  };

  const imgBoxStyle = {
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    border: preview ? 'none' : `1px dashed ${dragActive || isRequired ? "#C02820" : "#D6D6D6"}`,
    borderRadius: "4px",
    opacity: 1,
    ...RowCenterAlign,
    my: 1,
  }
  return (

    <Box component={"div"} >
      <Text variant={"body1"} sxProp={{ fontWeight: 300 }} color={isRequired ? "error" : "gray.main"}>{title}</Text>
      <Box component={"form"} onDragEnter={handleDrag} sx={{ ...imgBoxSxProps, ...imgBoxStyle, mt: 2, position: "relative" }}>
        <input hidden ref={inputRef} accept="image/*" id="input-file-upload" type="file" onChange={handleChange} />
        {!preview && (
          <Box component={"div"} sx={{ ...ColumnCenterAlign }}>
            <ICons icon={"ImagePlaceholder"} fontSize={"large"} />
            <Text variant={"body2"} color={"gray.main"} sxProp={{ fontWeight: 300, "& button": { textDecoration: "underline", backgroundColor: "transparent", ...theme.typography.body2, color: "inherit !important", px: 0, fontWeight: 300 } }}>
              Drag and drop or <Box component={"button"} onClick={onButtonClick}>upload file</Box>
            </Text>
          </Box>

        )}
        {dragActive && <Box component={"div"} sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }} onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop} />}
        {preview && <Card sx={{ ...imgBoxSxProps, borderRadius: "4px" }}  ><Box component={"img"} sx={{ ...imgBoxSxProps, width: "100%" }} src={preview} /> </Card>}
      </Box>

      {(preview && !invalidFile) && (<><Text variant={"body1"} sxProp={{ fontWeight: 300 }} color={"gray.main"}>{filename}</Text><IconButton onClick={() => setPreview("")} sx={{ "&:hover": { background: "none" } }} aria-label={"delete"}><ICons icon={"DeleteIcon"} /></IconButton></>)}
      {(!preview && !invalidFile && !isRequired) && <Text variant={"body2"} sxProp={{ fontWeight: 200, fontStyle: "italic" }} color={"gray.main"}>{"Accepted formats: jpg, png, tiff, bmp."}</Text>}

      {invalidFile && <ValidationAlert filename={filename} />}
      {isRequired && (<Text variant={"body2"} sxProp={{ fontWeight: 300 }} color={"error"}>{"Upload panorex."}</Text>)}

    </Box>
  )
}


export default ImageBox