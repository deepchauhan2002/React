import duotone from "components/icons/duotone";
export const navigations = [
  {
    type: "label",
    label: "Admin",
  },
  {
    name: "Dashboard",
    icon: duotone.Dashboard,
    path: "/vendor/dashboard",
  },
  {
    name: "Products",
    icon: duotone.Products,
    children: [
      {
        name: "Product List",
        path: "/admin/products",
      },
      {
        name: "Create Product",
        path: "/admin/products/create",
      },
      {
        name: "Review",
        path: "/admin/product-reviews",
      },
    ],
  },
  {
    name: "Orders",
    icon: duotone.Order,
    children: [
      {
        name: "Order List",
        path: "/admin/orders",
      },
      {
        name: "Order Details",
        path: "/admin/orders/f0ba538b-c8f3-45ce-b6c1-209cf07ba5f8",
      },
    ],
  },
  {
    name: "Refunds",
    icon: duotone.Refund,
    children: [

      {
        name: "Refund Settings",
        path: "/admin/refund-setting",
      },
    ],
  },
  {
    name: "Sellers",
    icon: duotone.Seller,
    children: [
      {
        name: "Seller Package",
        path: "/admin/seller-package",
      },
      {
        name: "Payout Request",
        path: "/admin/payout-request",
      },
    ],
  },
  {
    type: "label",
    label: "Vendor",
  },
  {
    name: "Earnings",
    icon: duotone.ProjectChart,
    children: [
      {
        name: "Earning History",
        path: "/vendor/earning-history",
      },
      {
        name: "Payouts",
        path: "/vendor/payouts",
      },
      {
        name: "Payout Settings",
        path: "/vendor/payout-settings",
      },
    ],
  },
  {
    name: "Reviews",
    icon: duotone.Review,
    path: "/vendor/reviews",
  },
  {
    name: "Shop Setting",
    icon: duotone.SiteSetting,
    path: "/vendor/shop-settings",
  },
  {
    name: "Support Tickets",
    icon: duotone.ElementHub,
    path: "/vendor/support-tickets",
  },
  {
    name: "Account Setting",
    icon: duotone.AccountSetting,
    path: "/vendor/account-setting",
  },
  {
    name: "Site Setting",
    icon: duotone.SiteSetting,
    path: "/vendor/site-settings",
  },
  {
    name: "Logout",
    icon: duotone.Session,
    path: "/",
  },
];
