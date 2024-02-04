import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Stack, Box, Autocomplete, FormControlLabel, FormLabel, RadioGroup, Radio, OutlinedInput, InputAdornment, IconButton } from "@mui/material";
import { Grid, TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { format } from 'date-fns';
import 'dayjs/locale/en-gb';
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function IndividualAdd() {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    // Fake Data
    const nationalityData = [
        { id: 1, name: 'Afghanistan' },
        { id: 2, name: 'Albania' },
        { id: 3, name: 'Việt Nam' },
        { id: 4, name: 'Nhật Bản' },
        { id: 5, name: 'Hàn Quốc' },
        { id: 6, name: 'Úc' },
    ]



    const validationSchema = Yup.object({
        lastName: Yup
            .string()
            .required('Vui lòng nhập thông tin vào trường này'),
        middleName: Yup
            .string()
            .required('Vui lòng nhập thông tin vào trường này'),
        firstName: Yup
            .string()
            .required('Vui lòng nhập thông tin vào trường này'),
        birthday: Yup
            .string()
            .required('Vui lòng nhập thông tin vào trường này'),
        sex: Yup
            .string()
            .required('Vui lòng nhập thông tin vào trường này'),
        nationality: Yup
            .string()
            .required('Vui lòng nhập thông tin vào trường này'),
        phone: Yup
            .string()
            .required("Vui lòng nhập thông tin vào trường này")
            .matches(/^[0-9]+$/, "Vui lòng nhập số điện thoại")
            .max(15, "Số điện thoại tối đa là 15 số"),
        email: Yup.string()
            .max(4000)
            .email("Vui lòng nhập email đúng định dạng")
            .required("Vui lòng nhập thông tin vào trường này"),
        address: Yup
            .string()
            .required('Vui lòng nhập thông tin vào trường này'),
        accountName: Yup
            .string()
            .required('Vui lòng nhập thông tin vào trường này'),
        password: Yup
            .string()
            .required('Vui lòng nhập thông tin vào trường này'),
        confirmPassword: Yup
            .string()
        // .required('Vui lòng nhập thông tin vào trường này')
        // .oneOf([Yup.ref('password'), null], 'Mật khẩu xác nhận phải trùng khớp với mật khẩu'),
    });

    const initialValues = {
        lastName: "",
        middleName: "",
        firstName: "",
        birthday: "",
        sex: "Nam",
        nationality: "",
        phone: "",
        email: "",
        address: "",
        accountName: "",
        password: "",
        confirmPassword: ""
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values, helpers) => {
            console.log("Dữ liệu vừa được nhập vào là :", values)
        },
    });

    return (
        <Stack spacing={3} sx={{ marginTop: "80px" }}>
            <Grid container spacing={2}>
                <Grid item sm={12} md={6} xs={12}>
                    <Box
                        sx={{
                            bgcolor: "#fff",
                            padding: "16px",
                            border: "1px solid #ccc",
                            borderRadius: "6px",
                            marginBottom: "12px",
                        }}
                    >
                        <Typography variant="h6" component="h2" sx={{ marginBottom: "16px" }}>
                            Thông tin cá nhân
                        </Typography>
                        <Grid container spacing={2} style={{ marginBottom: "5px" }}>
                            <Grid item xs={4}>
                                <TextField
                                    error={!!(formik.touched.lastName && formik.errors.lastName)}
                                    helperText={formik.touched.lastName && formik.errors.lastName}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.lastName}
                                    variant="outlined"
                                    fullWidth
                                    size="small"
                                    required
                                    label="Họ"
                                    name="lastName"
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    error={!!(formik.touched.middleName && formik.errors.middleName)}
                                    helperText={formik.touched.middleName && formik.errors.middleName}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.middleName}
                                    variant="outlined"
                                    fullWidth
                                    size="small"
                                    required
                                    label="Tên đệm"
                                    name="middleName"
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    error={!!(formik.touched.firstName && formik.errors.firstName)}
                                    helperText={formik.touched.firstName && formik.errors.firstName}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.firstName}
                                    variant="outlined"
                                    fullWidth
                                    size="small"
                                    required
                                    label="Tên"
                                    name="firstName"
                                />
                            </Grid>
                        </Grid>

                        <DatePicker
                            onChange={(value) => {
                                formik.setFieldValue('birthday', Date.parse(value));
                            }}
                            value={formik.values.birthday}
                            name="birthday"
                            sx={{ width: "100%", marginTop: "12px" }}
                            format="dd/MM/yyyy"
                            slotProps={{
                                textField: {
                                    size: 'small',
                                    variant: 'outlined',
                                    onBlur: formik.handleBlur,
                                    error: !!(formik.touched.birthday && formik.errors.birthday),
                                    helperText: formik.touched.birthday && formik.errors.birthday,
                                }
                            }}
                            label="Ngày sinh"
                        />

                        <Box sx={{
                            display: "flex",
                            justifyContent: 'start',
                            alignItems: 'center'
                        }}>
                            <FormLabel sx={{ margin: "12px 8px 0px 8px" }}>Giới tính:</FormLabel>
                            <RadioGroup
                                name="sex"
                                value={formik.values.sex}
                                onChange={formik.handleChange}
                            >
                                <Box sx={{
                                    margin: "12px 8px 0px 8px"
                                }}>
                                    <FormControlLabel value="Nam" control={<Radio size="small" />} label="Nam" />
                                    <FormControlLabel value="Nữ" control={<Radio size="small" />} label="Nữ" />
                                </Box>
                            </RadioGroup>
                        </Box>

                        <Autocomplete
                            sx={{ marginTop: "12px" }}
                            fullWidth
                            size="small"
                            options={nationalityData}
                            value={nationalityData.find((item) => item.id === formik.values.nationality) || null}
                            onChange={(_, newValue) => {
                                formik.setFieldValue('nationality', newValue ? newValue.id : null);
                            }}
                            getOptionLabel={(option) => option.name}
                            renderInput={(params) => (
                                <TextField
                                    variant="outlined"
                                    {...params}
                                    label="Quốc tịch"
                                    name="nationality"
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.nationality && Boolean(formik.errors.nationality)}
                                    helperText={formik.touched.nationality && formik.errors.nationality}
                                />
                            )}
                        />

                        <TextField
                            error={!!(formik.touched.phone && formik.errors.phone)}
                            helperText={formik.touched.phone && formik.errors.phone}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.phone}
                            name="phone"
                            variant="outlined"
                            sx={{ marginTop: "12px" }}
                            size="small"
                            label="Số điện thoại"
                            fullWidth
                        />


                        <TextField
                            error={!!(formik.touched.email && formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            name="email"
                            variant="outlined"
                            sx={{ marginTop: "12px" }}
                            size="small"
                            label="Email"
                            fullWidth
                        />

                        <TextField
                            error={!!(formik.touched.address && formik.errors.address)}
                            helperText={formik.touched.address && formik.errors.address}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.address}
                            name="address"
                            variant="outlined"
                            sx={{ marginTop: "12px" }}
                            size="small"
                            label="Địa chỉ thường trú"
                            fullWidth
                        />
                    </Box>
                </Grid>
                <Grid item sm={12} md={6} xs={12}>
                    <Box
                        sx={{
                            bgcolor: "#fff",
                            padding: "16px",
                            border: "1px solid #ccc",
                            borderRadius: "6px",
                            marginBottom: "12px",
                        }}
                    >
                        <Typography variant="h6" component="h2" sx={{ marginBottom: "16px" }}>
                            Thông tin tài khoản
                        </Typography>
                        <TextField
                            error={!!(formik.touched.accountName && formik.errors.accountName)}
                            helperText={formik.touched.accountName && formik.errors.accountName}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.accountName}
                            name="accountName"
                            variant="outlined"
                            size="small"
                            label="Tên tài khoản"
                            fullWidth
                        />

                        <FormControl sx={{ marginTop: "12px", width: "100%" }} variant="outlined" size="small">
                            <InputLabel htmlFor="password" >Mật khẩu</InputLabel>
                            <OutlinedInput
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Mật khẩu"
                                error={!!(formik.touched.password && formik.errors.password)}
                                helperText={formik.touched.password && formik.errors.password}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.password}
                            />
                        </FormControl>

                        <FormControl sx={{ marginTop: "12px", width: "100%" }} variant="outlined" size="small">
                            <InputLabel htmlFor="password" >Nhập lại mật khẩu</InputLabel>
                            <OutlinedInput
                                // id="password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Nhập lại mật khẩu"
                                error={!!(formik.touched.confirmPassword && formik.errors.confirmPassword)}
                                helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.confirmPassword}
                            />
                        </FormControl>
                    </Box>
                    {/* <Box
                        sx={{
                            bgcolor: "#fff",
                            padding: "16px",
                            border: "1px solid #ccc",
                            borderRadius: "6px",
                            marginBottom: "12px",
                        }}
                    >
                        <Typography variant="h6" component="h2" sx={{ marginBottom: "16px" }}>
                            Người đại diện
                        </Typography>
                        <TextField
                            error={!!(formik.touched.nguoiDaiDien && formik.errors.nguoiDaiDien)}
                            helperText={formik.touched.nguoiDaiDien && formik.errors.nguoiDaiDien}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.nguoiDaiDien}
                            name="nguoiDaiDien"
                            variant="outlined"
                            required
                            sx={{ margin: "4px", marginTop: "12px" }}
                            size="small"
                            label="Người đại diện"
                            fullWidth
                        />

                        <TextField
                            error={!!(formik.touched.chucVuDaiDien && formik.errors.chucVuDaiDien)}
                            helperText={formik.touched.chucVuDaiDien && formik.errors.chucVuDaiDien}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.chucVuDaiDien}
                            name="chucVuDaiDien"
                            variant="outlined"
                            required
                            sx={{ margin: "4px", marginTop: "12px" }}
                            size="small"
                            label="Chức vụ người đại diện"
                            fullWidth
                        />

                        <TextField
                            error={!!(formik.touched.dienThoaiNguoiDaiDien && formik.errors.dienThoaiNguoiDaiDien)}
                            helperText={formik.touched.dienThoaiNguoiDaiDien && formik.errors.dienThoaiNguoiDaiDien}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.dienThoaiNguoiDaiDien}
                            name="dienThoaiNguoiDaiDien"
                            variant="outlined"
                            required
                            sx={{ margin: "4px", marginTop: "12px" }}
                            size="small"
                            label="Điện thoại người đại diện"
                            fullWidth
                        />

                        <TextField
                            error={!!(formik.touched.nguoiKyCV && formik.errors.nguoiKyCV)}
                            helperText={formik.touched.nguoiKyCV && formik.errors.nguoiKyCV}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.nguoiKyCV}
                            name="nguoiKyCV"
                            variant="outlined"
                            required
                            sx={{ margin: "4px", marginTop: "12px" }}
                            size="small"
                            label="Người ký CV"
                            fullWidth
                        />

                        <TextField
                            error={!!(formik.touched.chucDanhNguoiKy && formik.errors.chucDanhNguoiKy)}
                            helperText={formik.touched.chucDanhNguoiKy && formik.errors.chucDanhNguoiKy}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.chucDanhNguoiKy}
                            name="chucDanhNguoiKy"
                            variant="outlined"
                            required
                            sx={{ margin: "4px", marginTop: "12px" }}
                            size="small"
                            label="Chức danh người ký CV"
                            fullWidth
                        />
                    </Box> */}
                </Grid>
                <Grid item sm={12} md={12} xs={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "#1C2536",
                        }}
                        onClick={formik.handleSubmit}
                    >
                        Thêm
                    </Button>
                </Grid>
            </Grid >
        </Stack >
    );
}
