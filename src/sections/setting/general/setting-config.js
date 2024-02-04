import { CreditCardIcon, PencilSquareIcon, Squares2X2Icon, UserIcon } from "@heroicons/react/24/solid";
import PaidIcon from '@mui/icons-material/Paid';
import AddCardIcon from '@mui/icons-material/AddCard';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import PublicIcon from '@mui/icons-material/Public';
import TranslateIcon from '@mui/icons-material/Translate';
// import {
//     AccessibilityNew,
//     SettingsApplications,
//     Adjust,
//     Translate,
// } from "@mui/icons-material";
import { SvgIcon } from "@mui/material";

const settingsConfig = [
    {
        title: "Tiền tệ",
        path: "/setting/currency",
        icon: <SvgIcon fontSize="medium" style={{ color: '#2196f3' }}><PaidIcon /></SvgIcon>,
        group: "Hệ Thống"
    },
    {
        title: "Tên tài khoản",
        path: "/setting/account-name",
        icon: <SvgIcon fontSize="medium" style={{ color: '#3f51b5' }}><CreditCardIcon /></SvgIcon>,
        group: "Khác"
    },
    {
        title: "Loại tài khoản",
        path: "/setting/account-type",
        icon: <SvgIcon fontSize="medium" style={{ color: '#5F9EA0' }}><AddCardIcon /></SvgIcon>,
        group: "Khác"
    },
    {
        title: "Loại thanh toán",
        path: "/setting/payment-type",
        icon: <SvgIcon fontSize="medium" style={{ color: '#e91e63' }}><LocalAtmIcon /></SvgIcon>,
        group: "Khác"
    },
    {
        title: "Quốc gia",
        path: "/setting/country",
        icon: <SvgIcon fontSize="medium" style={{ color: '#3f51b5' }}><PublicIcon /></SvgIcon>,
        group: "Khác"
    },
    {
        title: "Ngôn ngữ",
        path: "/setting/language",
        icon: <SvgIcon fontSize="medium" style={{ color: '#e91e63' }}><TranslateIcon /></SvgIcon>,
        group: "Khác"
    },
];

export default settingsConfig;
