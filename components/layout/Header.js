import { Grid, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";

import Router from "next/router";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  const navitem = [
    { to: "/", label: "HOME" },
    { to: "/", label: "DRIVECLASS" },
    { to: "/", label: "PRICING" },
    { to: "/", label: "FAQ" },
    { to: "/", label: "LINKS" },
    { to: "/", label: "KONTAKT" },
  ];
  return (
    <div className="fixed w-full z-50 py-4 px-0 md:px-4">
      <Grid container className="items-center">
        <Grid item lg={4} md={4} sm={4} xs={4}>
          <div
            className="cursor-pointer text-3xl text-black font-bold pl-12"
            onClick={() => {
              Router.push("/");
            }}
          >
            <img src="/images/logo.png" className="h-10" />
          </div>
        </Grid>

        <Grid
          item
          lg={7}
          md={7}
          sm={7}
          xs={7}
          // className="flex justify-center"
          sx={{ display: { xs: "none", md: "block" } }}
        >
          <div className="flex flex-row items-center justify-end space-x-8">
            {navitem.map((items, itemIndex) => (
              <div
                className="cursor-pointer flex justify-center"
                key={itemIndex}
              >
                <div
                  className="text-xl  font-bold py-4"
                  onClick={() => {
                    Router.push(items.to);
                  }}
                >
                  {items?.label ?? ""}
                </div>
              </div>
            ))}
          </div>
        </Grid>
        <Grid
          item
          lg={1}
          md={1}
          sm={1}
          xs={1}
          // className="flex justify-center"
          sx={{ display: { xs: "none", md: "block" } }}
        >
          <div className="flex justify-end">
            <button
              className="rounded-3xl  text-white font-bold bg-gradient-to-r from-[#71D575] to-[#AAFFA3] py-2 px-4"
              onClick={() => {
                Router.push("/");
              }}
            >
              LOG IN
            </button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
