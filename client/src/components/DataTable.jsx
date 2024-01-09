import React from "react";
import MaterialTable from "material-table";
import {ThemeProvider, createTheme} from "@mui/material";

function DataTable({columns, data, title, actions}) {
    const defaultTheme = createTheme();

    return (
        <div className="flex items-center justify-center gap-4 pt-6 w-full">
            {" "}
            <ThemeProvider theme={defaultTheme}>
                <MaterialTable
                    title={title}
                    columns={columns}
                    data={data}
                    actions={actions}
                />
            </ThemeProvider>
        </div>
    );
}

export default DataTable;
