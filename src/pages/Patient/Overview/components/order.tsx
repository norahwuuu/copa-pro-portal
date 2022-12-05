import Text from "@/components/Text/text";
import { Link, } from "@mui/material";
import { FC } from "react";
import React from 'react';
import Item from "./gridItem";

import { orderDataProps } from "../type";


const Order: FC<orderDataProps> = ({
    status, date,
}) => {
    const OrderData = [
        {
            name: "Status",
            value: (
                <Text
                    variant={"body1"}
                    color={"gray.main"}
                    sxProp={{ fontWeight: "normal" }}
                >
                    {/* {"Delivered"} */}
                    {status}
                </Text>
            ),
        },
        {
            name: "Date",
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
            name: "Tracking #",
            value: (
                <Link
                    variant={"body1"}
                    sx={{ fontWeight: "900" }}
                    href="#"
                    color={"secondary.main"}
                    underline="hover"
                >
                    {"4567890"}
                </Link>
            ),
        },
    ];
    return (
        <Item title={"Order tracking"} dataSource={OrderData}></Item>
    );
};

export default Order;
