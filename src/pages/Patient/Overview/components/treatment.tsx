import RecordCard from "@/components/RecordCard/recordCard";
import Text from "@/components/Text/text";
import EditIcon from "@mui/icons-material/Edit";
import NoPhotographyOutlinedIcon from "@mui/icons-material/NoPhotographyOutlined";
import { Box, Button, Container, Grid, SvgIcon, Avatar, Link } from "@mui/material";
import { FC } from "react";
import { useIntl } from "umi";
import React from 'react';
import Item from "./gridItem";
import { treatmentDataProps } from "../type";
import ICons from "@/components/Icons/icons";


const Treatment: FC<treatmentDataProps> = ({
    stages, retainerDate, endDate
}) => {
    const translate = useIntl();
    const TreatmentData = [
        {
            name: "Number of stages",
            value: (
                <Text
                    variant={"body1"}
                    color={"gray.main"}
                    sxProp={{ fontWeight: "normal" }}
                >
                    {stages}
                </Text>
            ),
        },
        {
            name: "Retainer shipment date",
            value: (
                <Text
                    variant={"body1"}
                    color={"gray.main"}
                    sxProp={{ fontWeight: "normal" }}
                >
                    {retainerDate}
                </Text>
            ),
        },

        {
            name: "End of treatment date",
            value: (
                <Text
                    variant={"body1"}
                    color={"gray.main"}
                    sxProp={{ fontWeight: "normal" }}
                >
                    {endDate}

                    {/* {"12/14/2023"} */}
                </Text>
            ),
        },
        {
            name: ` `,
            value: (
                <Link
                    variant={"body1"}
                    sx={{ fontWeight: "900" }}
                    href="#"
                    color={"secondary.main"}
                    underline="hover"
                >
                    {"View treatment plan"}
                </Link>
            ),
        },
        {
            name: ` `,
            value: (
                <Link
                    variant={"body1"}
                    sx={{ fontWeight: "900" }}
                    href="#"
                    color={"secondary.main"}
                    underline="hover"
                >
                    {"View notes"}
                </Link>
            ),
        },
        {
            value: (
                <Button
                    variant="outlined"
                    startIcon={
                        <ICons icon="PdfIcon" sxProps={{ width: "14px", height: "14px" }} />
                    }
                    sx={{ width: "260px", right: "30px" }}
                >
                    IPR and attachment report
                </Button>
            ),
        },
    ];
    return (
        <Item
            title={"Treatment plan"}
            dataSource={TreatmentData}
            status={null}
        ></Item>
    );
};

export default Treatment;
