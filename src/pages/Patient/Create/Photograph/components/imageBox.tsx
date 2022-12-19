import ICons from "@/components/Icons/icons";
import Text from "@/components/Text/text";
import theme from "@/theme/theme";
import { ColumnCenterAlign, RowCenterAlign } from "@/theme/themen.util";
import { appConstants } from "@/utils/appConstants";
import { Theme } from "@emotion/react";
import WarningIcon from "@mui/icons-material/Warning";
import { Box, Card, Container, IconButton, SxProps } from "@mui/material";
import React, {
  ChangeEvent,
  DragEvent,
  FC,
  useEffect,
  useRef,
  useState,
} from "react";
import { useIntl } from "umi";
import { IImageBoxProps } from "../type";
const validExtensions = ["png", "jpeg", "jpg", "tiff", "bmp"];


const ValidationAlert: FC<{ filename: string, errorMessage: string }> = ({ filename, errorMessage }) => {
  return (
    <Container maxWidth={"md"} sx={{ paddingLeft: "0 !important" }}>
      <Box
        component={"div"}
        sx={{
          background: "#F3DADB 0% 0% no-repeat padding-box",
          border: "1px solid #C02820",
          borderRadius: "4px",
          opacity: 1,
          display: "flex",
          alignItems: "start",
          p: 2,
          my: 1,
        }}
      >
        <Box>
          <WarningIcon color={"error"} fontSize={"small"} sx={{ mr: 1 }} />
        </Box>
        <Box>
          <Text variant={"body2"} color={"error"} sxProp={{ fontWeight: 300 }}>
            {errorMessage}
          </Text>
        </Box>
      </Box>
    </Container>
  );
};

const ImagePreview: FC<{ imgBoxSxProps: SxProps<Theme>; path: string }> = ({
  path,
  imgBoxSxProps,
}) => {
  return (
    <Card
      sx={{ ...imgBoxSxProps, boxShadow: "none", border: "1px solid #D6D6D6" }}
    >
      <Box
        component={"img"}
        sx={{ ...imgBoxSxProps, width: "100%" }}
        src={path}
      />
    </Card>
  );
};

const ImageBox: FC<IImageBoxProps> = ({
  id,
  title,
  imgBoxSxProps,
  imgPath,
  updateImagePath,
  isImageRequired = false,
}) => {
  const translate = useIntl();
  const [dragActive, setDragActive] = useState<boolean>(false);
  const [filename, setFilename] = useState<string>("");
  const inputRef = useRef();
  const [preview, setPreview] = useState<string>("");
  const [invalidFile, setInvalidFile] = useState<boolean>(false);
  const [invalidFileSize, setInvalidFileSize] = useState<boolean>(false);
  const [isRequired, setIsRequired] = useState<boolean>(false);

  useEffect(() => {
    if (imgPath && imgPath[0]) {
      const url = URL.createObjectURL(imgPath);
      setPreview(url);
    }
  }, [imgPath]);

  useEffect(() => {

    setIsRequired(isImageRequired);
  }, [isImageRequired]);

  const handleFile = (files: FileList) => {
    setInvalidFileSize(false);
    setInvalidFile(false)
    setIsRequired(false);
    const file = files[0];
    const fileExtension = file.type.split("/")[1];
    const fileSizeKiloBytes = file.size / appConstants.ALLOWED_FILE_SIZE

    setFilename(file.name);
    if (!validExtensions.includes(fileExtension)) {
      setInvalidFile(true);
    } if (!validExtensions.includes(fileExtension)) {
      setInvalidFile(true);
    }
    else if (fileSizeKiloBytes > appConstants.ALLOWED_FILE_SIZE) {
      setInvalidFileSize(true)
    }
    else {
      setInvalidFile(false);
      const url = URL.createObjectURL(files[0]);
      console.log("url", url);
      setPreview(url);
      updateImagePath(files[0]);
    }

  };

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
    border: preview
      ? "none"
      : `1px dashed ${dragActive || isRequired ? "#C02820" : "#D6D6D6"}`,
    borderRadius: "4px",
    opacity: 1,
    ...RowCenterAlign,
    my: 1,
  };
  return (
    <Box component={"div"}>
      <Text
        variant={"body1"}
        sxProp={{ fontWeight: 300 }}
        color={isRequired ? "error" : "gray.main"}
      >
        {title}
      </Text>
      <Box
        component={"form"}
        onDragEnter={handleDrag}
        data-testid={`box-${id}`}
        sx={{ ...imgBoxSxProps, ...imgBoxStyle, mt: 2, position: "relative" }}
      >
        <input
          hidden
          ref={inputRef}
          accept="image/*"
          id={id}
          data-testid={id}
          type="file"
          onChange={handleChange}
        />
        {!preview && (
          <Box component={"div"} sx={{ ...ColumnCenterAlign }}>
            <ICons icon={"ImagePlaceholder"} fontSize={"large"} />
            <Text
              variant={"body2"}
              color={"gray.main"}
              sxProp={{
                fontWeight: 300,
                "& button": {
                  textDecoration: "underline",
                  backgroundColor: "transparent",
                  ...theme.typography.body2,
                  color: "inherit !important",
                  px: 0,
                  fontWeight: 300,
                },
              }}
            >
              {translate.formatMessage({ id: "radiograph.upload.note" })}
              <Box
                component={"button"}
                sx={{ cursor: "pointer" }}
                onClick={onButtonClick}
              >
                {translate.formatMessage({ id: "radiograph.button.upload" })}
              </Box>
            </Text>
          </Box>
        )}
        {dragActive && (
          <Box
            component={"div"}
            data-testid={`drop-${id}`}
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
            }}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          />
        )}
        {preview && (
          <ImagePreview imgBoxSxProps={imgBoxSxProps} path={preview} />
        )}
      </Box>

      {preview && !invalidFile && (
        <>
          <Text
            variant={"body1"}
            sxProp={{ fontWeight: 300 }}
            color={"gray.main"}
          >
            {filename}
          </Text>
          <IconButton
            onClick={() => {
              setPreview("");
              updateImagePath("");
            }}
            sx={{ "&:hover": { background: "none" } }}
            aria-label={"delete"}
          >
            <ICons icon={"DeleteIcon"} />
          </IconButton>
        </>
      )
      }
      {
        !preview && !invalidFile && !isRequired && (
          <Text
            variant={"body2"}
            sxProp={{ fontWeight: 200, fontStyle: "italic" }}
            color={"gray.main"}
          >
            {translate.formatMessage(
              { id: "radiograph.image.note" },
              {
                formats: validExtensions.join(", "),
              }
            )}
          </Text>
        )
      }

      {invalidFile && <ValidationAlert filename={filename} errorMessage={translate.formatMessage({ id: "radiograph.image.invalidFormat" }, {
        filename,
        formats: validExtensions.join(", ")
      })} />}
      {invalidFileSize && <ValidationAlert filename={filename} errorMessage={translate.formatMessage({ id: "radiograph.image.invalidfilesize" }, {
        filename,
      })} />}

      {
        isRequired && !invalidFile && (
          <Text variant={"body2"} sxProp={{ fontWeight: 300 }} color={"error"}>
            {translate.formatMessage({ id: "radiograph.panorex.required" })}
          </Text>
        )
      }
    </Box >
  );
};

export default ImageBox;
