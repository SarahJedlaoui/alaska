import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import CottageIcon from '@mui/icons-material/Cottage';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page ",
  description: "This is Contact Page.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="37180 Glacier Blue St., Soldotna, Alaska 99669   
         info@alaskakenaiadventures.com
        &#10;+1 907-252-0705"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
