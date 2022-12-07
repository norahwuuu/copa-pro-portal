import RecordCard from "@/components/RecordCard/recordCard";
import Text from "@/components/Text/text";
import EditIcon from "@mui/icons-material/Edit";
import NoPhotographyOutlinedIcon from "@mui/icons-material/NoPhotographyOutlined";
import { Box, Button, Container, Grid, SvgIcon, Avatar, Link } from "@mui/material";
import { FC } from "react";
import { useIntl } from "umi";
import React from 'react';
import Item from "./gridItem";
import { treatmentDataProps, treatmentProps } from "../type";
import ICons from "@/components/Icons/icons";


const Treatment: FC<treatmentProps> = ({
    caseStatus, stages, retainerDate, endDate, notePopup
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
                    {stages || '-'}
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
                    {retainerDate || '-'}
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
                    {endDate || '-'}

                </Text>
            ),
        },
        stages && caseStatus !== 'temp' && {
            name: '\u00A0',
            value: (
                <Link
                    variant={"body1"}
                    sx={{ fontWeight: "900" }}
                    color={"secondary.main"}
                    underline="hover"
                >
                    {"View treatment plan"}
                </Link>
            ),
        },
        stages && {
            name: '\u00A0',
            value: (
                <Link
                    variant={"body1"}
                    sx={{ fontWeight: "900", cursor: 'pointer' }}
                    color={"secondary.main"}
                    underline="hover"
                    onClick={() => notePopup()}

                >
                    {"View notes"}
                </Link>
            ),
        },
        caseStatus !== 'inProgress' && {
            value: (
                <Button
                    variant="outlined"

                    sx={{ width: "260px", right: "30px" }}
                >
                    <ICons icon="PdfIcon" sxProps={{ width: "14px", height: "14px", marginRight: '4px', marginLeft: '-4px' }} /> IPR and attachment report
                </Button>
            ),
        },
    ];
    return (
        <Item
            title={"Treatment plan"}
            dataSource={TreatmentData}
            status={caseStatus}
        ></Item>
    );
};

export default Treatment;
