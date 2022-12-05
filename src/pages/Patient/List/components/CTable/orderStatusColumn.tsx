/**
 *   PatientStatusColumn: Order status column render based on status in patient table list
 *   @param
 *     row: row data
 *   @return
 *
 */
import ICons from "@/components/Icons/icons";
import { Box, SxProps } from "@mui/material";
import { FC } from "react";
import { IRow } from "./table";
import { ORDER_STATUS } from "./table.config";
import React from "react";

type props = {
  icon: string
  sxProps: SxProps
}
const OrderStatusColumn: FC<{ row: IRow, dataKey: string }> = ({ row, dataKey }) => {
  const input = row[dataKey as keyof typeof row]
  let obj: props = {} as props
  switch (input) {
    case ORDER_STATUS.DELIVERED:
      obj = {
        icon: "ActiveIcon",
        sxProps: { color: "secondary.main", marginRight: "8px !important" }
      }
      break;
    case ORDER_STATUS.IN_PRODUCTION:
      obj = {
        icon: "InCompleteIcon",
        sxProps: { color: "secondary.main", marginRight: "8px !important" }
      }
      break;
    case ORDER_STATUS.RETAINERS_SENT:
      obj = {
        icon: "ActiveIcon",
        sxProps: { color: "secondary.main", marginRight: "8px !important" }
      }
      break;
    case ORDER_STATUS.SHIPPED:
      obj = {
        icon: "InProgressIcon",
        sxProps: { color: "secondary.main", marginRight: "8px !important" }
      }
      break;
    default:
      break;
  }

  return (
    <Box
      component={"span"}
      sx={{
        fontWeight: 300,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        " > svg": { marginRight: 1 },
        " > img": { marginRight: 1 },
      }}
    >
      {obj && obj.icon && <ICons icon={obj.icon} sxProps={obj.sxProps} />}
      {input}
    </Box>
  );
};

export default OrderStatusColumn;
