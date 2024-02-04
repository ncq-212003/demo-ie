import {
  ChartBarIcon,
  UserIcon,
  CalendarDaysIcon,
  DocumentCheckIcon,
  CpuChipIcon,
  DocumentIcon,
} from "@heroicons/react/24/solid";
import PersonIcon from "@mui/icons-material/Person";
import { SvgIcon } from "@mui/material";
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import CategoryIcon from '@mui/icons-material/Category';

import {
  Warehouse,
  AutoStories,
  Group,
  Add,
  Settings,
} from "@mui/icons-material";

export const items = [
  {
    title: "Tổng quan",
    path: "/",
    icon: (
      <SvgIcon fontSize="small">
        <ChartBarIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Cá nhân",
    path: "/individual",
    icon: (
      <SvgIcon fontSize="small">
        <PersonIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Giao dịch",
    path: "/transaction",
    icon: (
      <SvgIcon fontSize="small">
        <ReceiptLongIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Hạng mục",
    path: "/category",
    icon: (
      <SvgIcon fontSize="small">
        <CategoryIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Cấu hình",
    icon: (
      <SvgIcon fontSize="small">
        <Settings />
      </SvgIcon>
    ),
    submenu: [
      {
        title: "Cấu hình chung",
        path: "/setting",
        icon: (
          <SvgIcon fontSize="small">
            <Add />
          </SvgIcon>
        ),
      },
    ],
  },
  {
    title: "Hệ thống",
    path: "/system",
    icon: (
      <SvgIcon fontSize="small">
        <CpuChipIcon />
      </SvgIcon>
    ),
    submenu: [
      {
        title: "Phân quyền hệ thống",
        path: "/system/role-system",
        icon: (
          <SvgIcon fontSize="small">
            <Add />
          </SvgIcon>
        ),
      },
      {
        title: "Module",
        path: "/system/module",
        icon: (
          <SvgIcon fontSize="small">
            <Add />
          </SvgIcon>
        ),
      },
      {
        title: "Chức năng",
        path: "/system/feature",
        icon: (
          <SvgIcon fontSize="small">
            <Add />
          </SvgIcon>
        ),
      },
    ]
  },
];
