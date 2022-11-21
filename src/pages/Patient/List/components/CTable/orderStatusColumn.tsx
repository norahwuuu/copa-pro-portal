import ICons from "@/components/Icons/icons";
import { Box } from "@mui/material";
import { FC } from "react";
import { IRow } from "./table";
import { ORDER_STATUS } from "./table.config";

const OrderStatusColumn: FC<{ row: IRow }> = ({ row }) => {
  let template;

  switch (row.orderSatus) {
    case ORDER_STATUS.DELIVERED:
      template = (
        <>
          <ICons icon={"ActiveIcon"} sxProps={{ color: "secondary.main" }} />
          {row.orderSatus}
        </>
      );
      break;
    case ORDER_STATUS.IN_PRODUCTION:
      template = (
        <>
          <ICons
            icon={"InCompleteIcon"}
            sxProps={{ color: "secondary.main" }}
          />
          {row.orderSatus}
        </>
      );
      break;
    case ORDER_STATUS.RETAINERS_SENT:
      template = (
        <>
          <ICons icon={"ActiveIcon"} sxProps={{ color: "secondary.main" }} />
          {row.orderSatus}
        </>
      );
      break;
    case ORDER_STATUS.SHIPPED:
      template = (
        <>
          <ICons
            icon={"InProgressIcon"}
            sxProps={{ color: "secondary.main" }}
          />
          {row.orderSatus}
        </>
      );
      break;
    default:
      template = row.orderSatus;
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
      }}
    >
      {template}
    </Box>
  );
};

export default OrderStatusColumn;
