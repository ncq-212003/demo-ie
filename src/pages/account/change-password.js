import Head from 'next/head';
import {
    Box,
    Container,
    Stack,
    Typography,
    Button,
    InputAdornment,
    IconButton,
    Grid,
    TextField
} from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { useState } from 'react';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Page = () => {
    const [showPasswordOld, setShowPasswordOld] = useState(false);
    const [showPasswordNew, setShowPasswordNew] = useState(false);
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

    const initialValues = {
        oldPassword: '',
        newPassword: '',
        newPasswordConfirm: '',
    };


    const validationSchema = Yup.object({
        oldPassword: Yup.string().required('Old Password is required'),
        newPassword: Yup.string()
            .required('New Password is required')
            .min(6, 'Password must be at least 6 characters'),
        newPasswordConfirm: Yup.string()
            .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
            .required('Password confirm is required'),
    });

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            console.log(values);
            onClose();
        },
    });

    //Show password
    const handleClickShowPasswordOld = () => setShowPasswordOld((show) => !show);
    const handleMouseDownPasswordOld = (event) => {
        event.preventDefault();
    };

    const handleClickShowPasswordNew = () => setShowPasswordNew((show) => !show);
    const handleMouseDownPasswordNew = (event) => {
        event.preventDefault();
    };

    const handleClickShowPasswordConfirm = () => setShowPasswordConfirm((show) => !show);
    const handleMouseDownPasswordConfirm = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <Head>
                <title>
                    Thông tin tài khoản | CsoftLife CMS
                </title>
            </Head>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    py: 8
                }}
            >
                <Container maxWidth="xl">
                    <Stack spacing={3}>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            spacing={4}
                        >
                            <Stack spacing={1}>
                                <Typography variant="h4">
                                    Thay đổi mật khẩu
                                </Typography>
                            </Stack>
                        </Stack>
                        <Stack spacing={3} sx={{ p: 2, marginTop: '64px' }}>
                            <Grid container spacing={2}>
                                <Grid item sm={12} md={12} xs={12}>
                                    <Box
                                        sx={{
                                            padding: '16px',
                                            border: '1px solid #ccc',
                                            borderRadius: '6px',
                                        }}
                                    >
                                        <Stack
                                            spacing={3}
                                            mt={2}
                                        >
                                            <TextField
                                                size='small'
                                                fullWidth
                                                variant="outlined"
                                                label="Old Password"
                                                type={showPasswordOld ? 'text' : 'password'}
                                                {...formik.getFieldProps('oldPassword')}
                                                error={formik.touched.oldPassword && Boolean(formik.errors.oldPassword)}
                                                helperText={formik.touched.oldPassword && formik.errors.oldPassword}
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="toggle password visibility"
                                                                onClick={handleClickShowPasswordOld}
                                                                onMouseDown={handleMouseDownPasswordOld}
                                                                edge="end"
                                                            >
                                                                {showPasswordOld ? <VisibilityOff /> : <Visibility />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                            <TextField
                                                size='small'
                                                fullWidth
                                                variant="outlined"
                                                label="New Password"
                                                type={showPasswordNew ? 'text' : 'password'}
                                                {...formik.getFieldProps('newPassword')}
                                                error={formik.touched.newPassword && Boolean(formik.errors.newPassword)}
                                                helperText={formik.touched.newPassword && formik.errors.newPassword}
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="toggle password visibility"
                                                                onClick={handleClickShowPasswordNew}
                                                                onMouseDown={handleMouseDownPasswordNew}
                                                                edge="end"
                                                            >
                                                                {showPasswordNew ? <VisibilityOff /> : <Visibility />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                            <TextField
                                                size='small'
                                                fullWidth
                                                variant="outlined"
                                                label="New Password Confirm"
                                                type={showPasswordConfirm ? 'text' : 'password'}
                                                {...formik.getFieldProps('newPasswordConfirm')}
                                                error={formik.touched.newPasswordConfirm && Boolean(formik.errors.newPasswordConfirm)}
                                                helperText={formik.touched.newPasswordConfirm && formik.errors.newPasswordConfirm}
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="toggle password visibility"
                                                                onClick={handleClickShowPasswordConfirm}
                                                                onMouseDown={handleMouseDownPasswordConfirm}
                                                                edge="end"
                                                            >
                                                                {showPasswordConfirm ? <VisibilityOff /> : <Visibility />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </Stack>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'end',
                                                width: '100%',
                                                marginTop: '20px',
                                            }}
                                        >

                                            <Button
                                                variant="contained"
                                                onClick={formik.handleSubmit}
                                                sx={{
                                                    backgroundColor: '#1C2536',
                                                }}
                                            >
                                                Lưu
                                            </Button>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Stack>


                    </Stack>
                </Container>
            </Box>
        </>
    );
};

Page.getLayout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);

export default Page;
