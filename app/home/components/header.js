"use client";

import React, { useState, Suspense, lazy } from "react";
import {
  AppBar,
  Box,
  Typography,
  IconButton,
  Toolbar,
  Tooltip,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import IconBtn from "./Icons";
import {
  Groups as GroupsIcon,
  Search as SearchIcon,
  Add as AddIcon,
  Logout as LogoutIcon,
  Notifications as NotificationIcon,
} from "@mui/icons-material";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { userNotExists } from "@/redux/reducers/auth";
import { setIsMobile, setIsNotifications, setIsSearch } from "@/redux/reducers/misc";

const SearchDialog = lazy(() => import("../../specific/SearchDialog.js"));
const Notification = lazy(() => import("../../specific/Notification.js"));
const NewGroup = lazy(() => import("../../specific/NewGroup"));

const header = () => {
  const dispatch = useDispatch();

  const router = useRouter();

const {isSearch,isNotifications,} = useSelector((state) => state.misc)

  const [isGroup, setIsGroup] = useState(false);

  const handleSearch = () => {
  dispatch(setIsSearch(true))
  };
  const handleGroups = () => {
    console.log("handleGroups");
    setIsGroup((prev) => !prev);
  };
  const handleAdd = () => {
    console.log("handleAdd");
    router.push("/groups");
  };

  const handleMobile = () => {
    dispatch(setIsMobile(true))
    ;
    console.log("handleMobile");
  };
  const handleLogout = async (e) => {
    try {
      const data = await axios.get("http://localhost:3001/api/v1/user/logout", {
        withCredentials: true,
      });

      dispatch(userNotExists());

      toast.success(data.message);
      router.push("/");
    } catch (error) {
      toast.error(error?.response?.data?.message || "error");
    }
  };

  const handleNotification = () => {
    dispatch(setIsNotifications(true))
  };
  return (
    <>
      <Box height={"4rem"}>
        <AppBar
          position="static"
          sx={{
            backgroundColor: "lightgray",
          }}
        >
          <Toolbar>
            <Typography
              variant="h5"
              backgroundColor=""
              sx={{ display: { sm: "block", xs: "none" } }}
            >
              Chatty
            </Typography>

            <Box
              sx={{
                display: { lg: "none", md: "none", sm: "none", xs: "block" },
              }}
            >
              <IconButton onClick={handleMobile}>
                <MenuIcon />
              </IconButton>
            </Box>

            <Box sx={{ display: { flexGrow: 1 } }} />
            <Box>
              <IconBtn
                title={"Search"}
                icon={<SearchIcon />}
                onClick={handleSearch}
              />
              <IconBtn
                title={"Notifications"}
                icon={<NotificationIcon />}
                onClick={handleNotification}
              />
              <IconBtn
                title={"Add"}
                icon={<AddIcon />}
                onClick={handleGroups}
              />
              <IconBtn
                title={"Groups"}
                icon={<GroupsIcon />}
                onClick={handleAdd}
              />
              <IconBtn
                title={"Logout"}
                icon={<LogoutIcon />}
                onClick={handleLogout}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      {isSearch && (
        <Suspense fallback={<div>Loading....</div>}>
          <SearchDialog />
        </Suspense>
      )}
      {isNotifications && (
        <Suspense fallback={<div>Loading....</div>}>
          <Notification />
        </Suspense>
      )}
      {isGroup && (
        <Suspense fallback={<div>Loading....</div>}>
          <NewGroup />
        </Suspense>
      )}
    </>
  );
};

export default header;
