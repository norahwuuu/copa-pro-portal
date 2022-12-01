import Text from "@/components/Text/text";
import { Box, } from "@mui/material";
import { FC } from "react";
import { useIntl } from "umi";
import React from 'react';
import Item from "./gridItem";
import { dentalDataProps, } from "../type";
import ICons from "@/components/Icons/icons";
import LinkText from "@/components/Button/linkText";
import { OpenInNew } from "@mui/icons-material";


const Monitoring: FC<dentalDataProps> = ({
    status, date,
}) => {
    const DentalData = [
        {
            name: "Status",
            value: (
                <Box component={"div"} sx={{ display: "flex" }}>
                    <Text
                        variant={"body1"}
                        color={"gray.main"}
                        sxProp={{ fontWeight: "normal" }}
                    >
                        {/* {"Tracking"} */}
                        {status}
                    </Text>
                    <ICons
                        icon="ActiveIcon"
                        sxProps={{ color: "secondary.main", marginLeft: "5px" }}
                    />
                </Box>
            ),
        },
        {
            name: "Last monitoring date",
            value: (
                <Text
                    variant={"body1"}
                    color={"gray.main"}
                    sxProp={{ fontWeight: "normal" }}
                >
                    {/* {"12/14/2023"} */}
                    {date}
                </Text>
            ),
        },

        {
            name: "More info",
            value: (
                <LinkText
                    to={"/auth/login"}
                    linkText={"View details"}
                    icon={
                        <OpenInNew
                            sx={{
                                fontSize: "inherit",
                                fontWeight: "inherit",
                                alignSelf: "center",
                                marginLeft: "5px",
                            }}
                        />
                    }
                />
            ),
        },
    ];
    return (
        <Item
            title={"Dental monitoring ®"}
            dataSource={DentalData}
            status={null}
        ></Item>
    );
};

export default Monitoring;
