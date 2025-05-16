import React from "react";

import { Dashboard, Lounge, Updates, UserList, Wallet ,AdminList,TradeList, TradeForm,TradingAccountTypeForm,TradingAccountTypes} from "../pages";

const RouteArr = [

  //dashboard
  {
    path: "/",
    element: <Dashboard />,
  },
    //admin list
  {
    path: "/admin-list",
    element: <AdminList />,
  },

      //admin list
  {
    path: "/trade-list",
    element: <TradeList />,
  },

      //admin list
  {
    path: "/add-trade",
    element: <TradeForm />,
  },

      //admin list
  {
    path: "/edit-trade/:id",
    element: <TradeForm />,
  },

    {
    path: "/trading-account-types",
    element: <TradingAccountTypes />,
  },

      //admin list
  {
    path: "/add-trading-account-type",
    element: <TradingAccountTypeForm />,
  },

      //admin list
  {
    path: "/edit-trading-account-type/:id",
    element: <TradingAccountTypeForm />,
  },

  //lounge
  {
    path: "/lounge",
    element: <Lounge />,
  },
  // user list 
  {
    path: "/users",
    element: <UserList />,
  },
  // wallet 
  {
    path: "/wallet",
    element: <Wallet />,
  },

   // Updates 
   {
    path: "/updates",
    element: <Updates />,
  },


];
export default RouteArr;
