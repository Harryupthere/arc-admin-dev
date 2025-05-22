import React from "react";

import { Dashboard, Lounge, Updates, UserList, Wallet ,AdminList,TradeList, TradeForm,TradingAccountTypeForm,TradingAccountTypes,Roles,
RolesForm,
Permissions,
PermissionsForm,
PaymentTypes,
PaymentTypesForm,
TwoPhases,TwoPhasesForm,InstantFunding,InstantFundingForm,AddOns,AddOnsForm,CouponCodes,CouponCodesForm} from "../pages";
const baseUrl=process.env.REACT_APP_BASE_URL

const RouteArr = [

  //dashboard
  {
    path: `${baseUrl}`,
    element: <Dashboard />,
  },
    //admin list
  {
    path: `${baseUrl}admin-list`,
    element: <AdminList />,
  },

      //admin list
  {
    path: `${baseUrl}trade-list`,
    element: <TradeList />,
  },

      //admin list
  {
    path: `${baseUrl}add-trade`,
    element: <TradeForm />,
  },

      //admin list
  {
    path: `${baseUrl}edit-trade/:id`,
    element: <TradeForm />,
  },

    {
    path: `${baseUrl}trading-account-types`,
    element: <TradingAccountTypes />,
  },

      //admin list
  {
    path: `${baseUrl}add-trading-account-type`,
    element: <TradingAccountTypeForm />,
  },

      //admin list
  {
    path: `${baseUrl}edit-trading-account-type/:id`,
    element: <TradingAccountTypeForm />,
  },
    {
    path: `${baseUrl}roles`,
    element: <Roles />,
  },
        //admin list
  {
    path: `${baseUrl}add-role`,
    element: <RolesForm />,
  },

      //admin list
  {
    path: `${baseUrl}edit-role/:id`,
    element: <RolesForm />,
  },


    {
    path: `${baseUrl}permissions`,
    element: <Permissions />,
  },
        //admin list
  {
    path: `${baseUrl}add-permission`,
    element: <PermissionsForm />,
  },

      //admin list
  {
    path: `${baseUrl}edit-permission/:id`,
    element: <PermissionsForm />,
  },

      {
    path: `${baseUrl}payment-types`,
    element: <PaymentTypes />,
  },
        //admin list
  {
    path: `${baseUrl}add-payment-type`,
    element: <PaymentTypesForm />,
  },

      //admin list
  {
    path: `${baseUrl}edit-payment-type/:id`,
    element: <PaymentTypesForm />,
  },


        {
    path: `${baseUrl}two-phases`,
    element: <TwoPhases />,
  },
        //admin list
  {
    path: `${baseUrl}add-two-phases`,
    element: <TwoPhasesForm />,
  },

      //admin list
  {
    path: `${baseUrl}edit-two-phases/:id`,
    element: <TwoPhasesForm />,
  },


        {
    path: `${baseUrl}instant-funding`,
    element: <InstantFunding />,
  },
        //admin list
  {
    path: `${baseUrl}add-instant-funding`,
    element: <InstantFundingForm />,
  },

      //admin list
  {
    path: `${baseUrl}edit-instant-funding/:id`,
    element: <InstantFundingForm />,
  },



        {
    path: `${baseUrl}add-ons`,
    element: <AddOns />,
  },
        //admin list
  {
    path: `${baseUrl}add-add-ons`,
    element: <AddOnsForm />,
  },

      //admin list
  {
    path: `${baseUrl}edit-add-ons/:id`,
    element: <AddOnsForm />,
  },


        {
    path: `${baseUrl}coupon-codes`,
    element: <CouponCodes />,
  },
        //admin list
  {
    path: `${baseUrl}add-coupon-codes`,
    element: <CouponCodesForm />,
  },

      //admin list
  {
    path: `${baseUrl}edit-coupon-codes/:id`,
    element: <CouponCodesForm />,
  },


  //lounge
  {
    path: `${baseUrl}lounge`,
    element: <Lounge />,
  },
  // user list 
  {
    path: `${baseUrl}users`,
    element: <UserList />,
  },
  // wallet 
  {
    path: `${baseUrl}wallet`,
    element: <Wallet />,
  },

   // Updates 
   {
    path: `${baseUrl}updates`,
    element: <Updates />,
  },


];
export default RouteArr;
