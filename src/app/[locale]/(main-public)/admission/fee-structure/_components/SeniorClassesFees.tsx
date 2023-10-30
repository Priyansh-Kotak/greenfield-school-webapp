import type { FC } from "react";
import SeniorFeeDetails from "./SeniorFeeDetails";
import StudentsAndNonStudentsTabs from "../../_components/StudentsAndNonStudentsTabs";

export const fees = {
  science: {
    "non-greenfield-students": [
      {
        feeType: "Admission Fees (Non Refundable)",
        oneTime: 25000,
      },
      {
        feeType: "Administrative Charges (Non Refundable)",
        oneTime: 30000,
      },
      {
        feeType: "Caution Money (Refundable)",
        oneTime: 15000,
      },
      {
        feeType: "Annual Session Fees",
        annual: 1100,
      },
      { feeType: "Almanac Fees / ID Card Fees", annual: 1100 },
      {
        feeType: "Quarterly Tuition Fees",
        quarterly: 19875,
      },
    ],
    "greenfield-students": [
      {
        feeType: "Administrative Charges (Non Refundable)",
        oneTime: 30000,
      },
      {
        feeType: "Annual Session Fees",
        annual: 26700,
      },
      { feeType: "Almanac Fees / ID Card Fees", annual: 1100 },
      {
        feeType: "Quarterly Tuition Fees",
        quarterly: 19875,
      },
    ],
  },
  commerce: {
    "non-greenfield-students": [
      {
        feeType: "Admission Fees (Non Refundable)",
        oneTime: 25000,
      },
      {
        feeType: "Administrative Charges (Non Refundable)",
        oneTime: 30000,
      },
      {
        feeType: "Caution Money (Refundable)",
        oneTime: 15000,
      },
      {
        feeType: "Annual Session Fees",
        annual: 26700,
      },
      { feeType: "Almanac Fees / ID Card Fees", annual: 1100 },
      {
        feeType: "Quarterly Tuition Fees",
        quarterly: 19350,
      },
    ],
    "greenfield-students": [
      {
        feeType: "Administrative Charges (Non Refundable)",
        oneTime: 30000,
      },
      {
        feeType: "Annual Session Fees",
        annual: 26700,
      },
      { feeType: "Almanac Fees / ID Card Fees", annual: 1100 },
      {
        feeType: "Quarterly Tuition Fees",
        quarterly: 19350,
      },
    ],
  },
  humanities: {
    "non-greenfield-students": [
      {
        feeType: "Admission Fees (Non Refundable)",
        oneTime: 25000,
      },
      {
        feeType: "Administrative Charges (Non Refundable)",
        oneTime: 30000,
      },
      {
        feeType: "Caution Money (Refundable)",
        oneTime: 15000,
      },
      {
        feeType: "Annual Session Fees",
        annual: 26700,
      },
      { feeType: "Almanac Fees / ID Card Fees", annual: 1100 },
      {
        feeType: "Quarterly Tuition Fees",
        quarterly: 19350,
      },
    ],
    "greenfield-students": [
      {
        feeType: "Administrative Charges (Non Refundable)",
        oneTime: 30000,
      },
      {
        feeType: "Annual Session Fees",
        annual: 26700,
      },
      { feeType: "Almanac Fees / ID Card Fees", annual: 1100 },
      {
        feeType: "Quarterly Tuition Fees",
        quarterly: 19350,
      },
    ],
  },
} as const;

const rules = [
  "Fees, once paid at the time of Admission, is non-refundable under any category (including withdrawal and/or Candidates rejected due to failing in Class X Board Examination). Only the Caution Money will be refundable in such cases.",
  "The Management reserves the right to have the last word in all matters relating to admission.",
] as const;

const SeniorClassesFees: FC = () => {
  return (
    <section>
      <h2 className="mb-6 text-2xl">Class XI - XII</h2>
      <StudentsAndNonStudentsTabs
        greenFieldStudents={
          <SeniorFeeDetails
            type="greenfield-students"
            feesData={fees}
            rules={rules}
          />
        }
        nonGreenfieldStudents={
          <SeniorFeeDetails
            type="non-greenfield-students"
            feesData={fees}
            rules={rules}
          />
        }
      />
    </section>
  );
};

export default SeniorClassesFees;