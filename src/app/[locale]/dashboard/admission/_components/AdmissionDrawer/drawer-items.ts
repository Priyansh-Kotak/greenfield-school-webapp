import { BiHome, BiSolidPencil } from "react-icons/bi";
import { FaQuestion, FaQuoteLeft } from "react-icons/fa";
import { HiMiniDocumentDuplicate, HiMiniDocumentPlus } from "react-icons/hi2";
import { RiParentFill } from "react-icons/ri";

import { createElement } from "react";
import { BsFillTelephoneForwardFill } from "react-icons/bs";

export default [
  {
    title: "Home",
    href: "/dashboard/admission",
    icon: createElement(BiHome),
  },
  {
    title: "New Admission",
    icon: createElement(HiMiniDocumentPlus),
    href: "/dashboard/admission/new",
  },
  {
    title: "Track Status",
    icon: createElement(FaQuestion),
    href: "/dashboard/admission/track-status",
  },
  {
    title: "Edit Application",
    icon: createElement(BiSolidPencil),
    href: "/dashboard/admission/edit",
  },
  {
    title: "All Applications",
    icon: createElement(HiMiniDocumentDuplicate),
    href: "/dashboard/admission/all",
  },
  {
    title: "Parent Dashboard",
    icon: createElement(RiParentFill),
    href: "/dashboard/parent",
  },
  {
    title: "FAQs",
    icon: createElement(FaQuoteLeft),
    href: "/dashboard/admission/faqs",
  },
  {
    title: "Contact Us",
    icon: createElement(BsFillTelephoneForwardFill),
    href: "/dashboard/admission/contact-us",
  },
] as const;
