import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";

const Page = () => {
    const [age, setAge] = useState(null)
    const handleChange = () => {
        console.log("change");
    }

    return (
        <Box mt={2}>
            <TextField id="outlined-basic" label="Filled" variant="outlined" size="small" />
            <TextField id="outlined-basic2" label="Filled" variant="outlined" size="small" />
            <FormControl sx={{ width: "200px" }}>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                    size="small"
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <Button variant="text">Save</Button>

        </Box>
    )
}


Page.getLayout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);

export default Page;