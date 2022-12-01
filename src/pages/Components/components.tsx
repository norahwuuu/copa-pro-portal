// We can delete it later its just for reference
import Button from "@/components/Button/button";
import LinkText from "@/components/Button/linkText";
import ICons from "@/components/Icons/icons";
import Text from "@/components/Text/text";
import { Edit, OpenInNew } from "@mui/icons-material";
import { Box, Grid, Paper } from "@mui/material";
import React, { FC } from "react";
const CustomComponent: FC = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        component={"div"}
        sx={{
          overflowY: "scroll",
          height: "90vh",
        }}
      >
        <Paper sx={{ m: 1, p: 1 }}>
          <Text variant={"h3"} color={"info"}>
            {"Typography"}
          </Text>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Text variant={"h1"} color={"primary"}>
              {"H1 - Highlighted word"}
            </Text>
            <Text variant={"h2"} color={"primary.main"}>
              {"H2 - Headline"}
            </Text>
            <Text variant={"h3"} color={"primary.main"}>
              {"H3 - Eyebrow"}
            </Text>
            <Text variant={"h3"} color={"gray.darken4"}>
              {"H3 - Eyebrow"}
            </Text>
            <Text variant={"h4"} color={"gray.main"}>
              {"H4 - Highlighted word(s)"}
            </Text>
            <Text variant={"h5"} color={"gray.main"}>
              {"H5 - Sub-headline"}
            </Text>
            <Text variant={"h6"} color={"gray.main"}>
              {"H6 - Highlighted word(s)"}
            </Text>
            <Text variant={"h7"} color={"error.main"}>
              {"H7 - Sub-headline"}
            </Text>
            <Text variant={"button"} color={"error.main"}>
              {"Buttons"}
            </Text>

            <Text
              variant={"body1"}
              color={"gray.main"}
              sxProp={{ fontWeight: "normal" }}
            >
              {"Body - regular"}
            </Text>
            <Text
              variant={"body1"}
              color={"gray.main"}
              sxProp={{ fontWeight: "bold" }}
            >
              {"Body - bold"}
            </Text>
            <Text
              variant={"body1"}
              color={"gray.main"}
              sxProp={{ fontWeight: 300 }}
            >
              {"Body - light"}
            </Text>

            <Text
              variant={"body2"}
              color={"error.main"}
              sxProp={{ fontWeight: "normal" }}
            >
              {"Numbers and callouts"}
            </Text>
            <Text
              variant={"body2"}
              color={"gray.main"}
              sxProp={{ fontWeight: "bold" }}
            >
              {"Numbers and callouts"}
            </Text>

            <Text
              variant={"body2"}
              color={"gray.main"}
              sxProp={{ fontWeight: "normal" }}
            >
              {"Notes - regular"}
            </Text>
            <Text
              variant={"body2"}
              color={"gray.main"}
              sxProp={{ fontWeight: "bold" }}
            >
              {"Notes - bold"}
            </Text>
            <Text
              variant={"body2"}
              color={"gray.main"}
              sxProp={{ fontWeight: 300 }}
            >
              {"Notes - light"}
            </Text>

            <Text variant={"h4"} color={"secondary.main"}>
              {"Selected link"}
            </Text>
            <Text variant={"h6"} color={"secondary.main"}>
              {"Selected link"}
            </Text>
            <Text variant={"body1"} color={"secondary.main"}>
              {"Selected link"}
            </Text>
          </Box>
        </Paper>
        <Paper sx={{ m: 1, p: 1 }}>
          <Text variant={"h3"} color={"primary"}>
            {"Buttons"}
          </Text>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              my: 3,
            }}
          >
            <Button variant={"contained"} btnLabel={"contained"} />
            <Button variant={"outlined"} btnLabel={"outlined"} />
            <Button variant={"text"} btnLabel={"text"} />
            <Button variant={"shade"} btnLabel={"shade"} />

            <Button variant={"contained"} isDisabled btnLabel={"disabled"} />
          </Box>
        </Paper>
        <Paper sx={{ m: 1, p: 1 }}>
          <Text variant={"h3"} color={"primary"}>
            {"Buttons Slim"}
          </Text>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              my: 3,
            }}
          >
            <Button
              variant={"contained"}
              size={"small"}
              btnLabel={"contained"}
            />
            <Button variant={"outlined"} size={"small"} btnLabel={"outlined"} />
            <Button variant={"text"} size={"small"} btnLabel={"text"} />
            <Button variant={"shade"} size={"small"} btnLabel={"shade"} />

            <Button
              variant={"contained"}
              size={"small"}
              btnLabel={"disabled"}
              isDisabled
            />
          </Box>
        </Paper>
        <Paper sx={{ m: 1, p: 1 }}>
          <Text variant={"h3"} color={"primary"}>
            {"Buttons With Icon"}
          </Text>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              my: 3,
            }}
          >
            <Button
              variant={"contained"}
              btnLabel={"contained"}
              startIcon={<Edit sx={{ marignRight: "3px" }} />}
            />
            <Button
              variant={"outlined"}
              btnLabel={"outlined"}
              startIcon={<Edit sx={{ marignRight: "3px" }} />}
            />
            <Button
              variant={"shade"}
              size={"small"}
              btnLabel={"shade"}
              startIcon={<Edit sx={{ marignRight: "3px" }} />}
            />
            <Button
              variant={"text"}
              btnLabel={"text"}
              startIcon={<Edit sx={{ marignRight: "3px" }} />}
            />
            <Button
              variant={"contained"}
              btnLabel={"contained"}
              isDisabled
              startIcon={<Edit sx={{ marignRight: "3px" }} />}
            />
          </Box>
        </Paper>
        <Paper sx={{ m: 1, p: 1 }}>
          <Text variant={"h3"} color={"primary"}>
            {"Links"}
          </Text>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              py: 3,
            }}
          >
            <LinkText
              to={"/auth/login"}
              linkText={"View details"}
              icon={
                <OpenInNew
                  sx={{
                    fontSize: "inherit",
                    fontWeight: "inherit",
                    alignSelf: "center",
                  }}
                />
              }
            />
            <LinkText to={"/auth/login"} linkText={"View details"} />
          </Box>
        </Paper>

        <Paper sx={{ m: 1, p: 1 }}>
          <Text variant={"h3"} color={"primary"}>
            {"Icons"}
          </Text>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              width: 700,
              my: 3,
              "> div": {
                display: "flex",
                alignItems: "center",
                mx: 3,
              },
            }}
          >
            <Box component={"div"}>
              ActiveIcon{" "}
              <ICons icon="ActiveIcon" sxProps={{ color: "secondary.main" }} />
            </Box>
            <Box component={"div"}>
              {" "}
              ArchivedIcon
              <ICons icon="ArchivedIcon" sxProps={{ color: "gray.darken" }} />
            </Box>
            <Box component={"div"}>
              {" "}
              FailureIcon
              <ICons icon="FailureIcon" />
            </Box>
            <Box component={"div"}>
              {" "}
              PendingIcon
              <ICons icon="PendingIcon" />
            </Box>
            <Box component={"div"}>
              {" "}
              InCompleteIcon
              <ICons
                icon="InCompleteIcon"
                sxProps={{ color: "secondary.main" }}
              />
            </Box>
            <Box component={"div"}>
              {" "}
              InProgressIcon
              <ICons
                icon="InProgressIcon"
                sxProps={{ color: "secondary.main" }}
              />
            </Box>
            <Box component={"div"}>
              {" "}
              WarningIcon
              <ICons icon="WarningIcon" sxProps={{ color: "warning.main" }} />
            </Box>
            <Box component={"div"}>
              {" "}
              MisuseIcon
              <ICons icon="MisuseIcon" />
            </Box>
            <Box component={"div"}>
              {" "}
              UnderReviewIcon
              <ICons
                icon="UnderReviewIcon"
                sxProps={{ color: "secondary.main" }}
              />
            </Box>
            <Box component={"div"}>
              {" "}
              NotStartedIcon
              <ICons icon="NotStartedIcon" />
            </Box>

            <Box component={"div"}>
              {" "}
              UserIcon
              <ICons icon="UserIcon" />
            </Box>
            <Box component={"div"}>
              {" "}
              ArrowUpIcon
              <ICons icon="ArrowUpIcon" />
            </Box>
            <Box component={"div"}>
              {" "}
              ArrowDownIcon
              <ICons icon="ArrowDownIcon" />
            </Box>
            <Box component={"div"}>
              {" "}
              ErrorIcon
              <ICons icon="ErrorIcon" />
            </Box>
          </Box>
        </Paper>
      </Box>
    </Grid>
  );
};

export default CustomComponent;
