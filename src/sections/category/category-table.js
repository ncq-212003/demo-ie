import { Autocomplete, Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useState, useEffect } from "react";
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export const CategoryTable = () => {

    const [formData, setFormData] = useState({
        userName: "",
        className: "",
        address: "",
        age: ""
    })

    const handleSubmit = () => {
        alert("thanh cong")
        console.log("Giá trị vừa nhập vào là :", formData)
    }
    // Thêm xóa học sinh
    return (
        <>
            <Stack
                sx={{
                    margin: "20px"
                }}
            >
                <Box>
                    <Typography variant="h4" gutterBottom>
                        Thêm học sinh
                    </Typography>
                    <TextField
                        sx={{
                            width: "100%",
                            marginTop: "10px"
                        }}
                        label="Họ và tên"
                        variant="outlined"
                        size="small"
                        value={formData.userName}
                        onChange={e => setFormData({ ...formData, userName: e.target.value })}
                    />

                    <TextField
                        sx={{
                            width: "100%",
                            marginTop: "10px"
                        }}
                        label="Tuổi"
                        variant="outlined"
                        size="small"
                        value={formData.age}
                        onChange={e => setFormData({ ...formData, age: e.target.value })}
                    />
                    {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            sx={{
                                marginTop: "10px",
                                width: "100%"
                            }} label="Năm sinh" />
                    </LocalizationProvider> */}

                    <Autocomplete
                        options={["C2203L", "C2306I", "H1208L"]} // khai 1 mảnhg
                        sx={{ width: "100%", marginTop: "10px" }}
                        value={formData.className}
                        onChange={(event, newValue) => {
                            setFormData({
                                ...formData, // rest 
                                className: newValue
                            })
                        }}
                        renderInput={(params) => <TextField
                            variant="outlined"
                            {...params}
                            label="Lớp"
                            size="small"
                        />}
                    />

                    <TextField
                        sx={{
                            width: "100%",
                            marginTop: "10px"
                        }}
                        label="Địa chỉ"
                        variant="outlined"
                        size="small"
                        value={formData.address}
                        onChange={e => setFormData({ ...formData, address: e.target.value })}
                    />
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "end"
                        }}
                    >

                        <Button
                            sx={{
                                marginTop: "10px"
                            }}
                            onClick={handleSubmit}
                            variant="contained"
                        >Lưu</Button>
                    </Box>
                </Box>
            </Stack>

        </>
    )
}