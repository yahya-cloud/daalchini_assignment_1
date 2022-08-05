import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const BasicTable = ({ columns, rows }) => {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        sx={{
          fontSize: "1.5rem",
        }}
        hideFooter
        rows={rows}
        columns={columns}
      />
    </div>
  );
};

export default BasicTable;
