import StaticTable from "~/app/_components/ui/StaticTable";
import H1 from "../../_components/H1";
import TwoSectionPage from "../../_components/TwoSectionPage";

const SCHOOL_TIMINGS = {
    reporting: [
        {
            "means-of-transport": "Private Cars/Conveyance",
            timings: "9:15 a.m.",
        },
        { "means-of-transport": "School Bus", timings: "9:15 a.m." },
    ],
    dispersal: [
        {
            type: "Private/Bus",
            classes: "Nursery - IX",
            timings: "3:30 p.m.",
        },
        {
            type: "Private/Bus",
            classes:
                "X - XII (*Hours might change based on extra classes/coaching)",
            timings: "3:30 p.m.",
        },
    ],
} as const;

const SchoolTimingsPage = () => {
    return (
        <TwoSectionPage linkTitle="Campus Life" currentLink="Timings">
            <H1>School Timings</H1>
            <div className="space-y-8">
                <StaticTable
                    caption={{
                        title: "Reporting Timings",
                    }}
                    headerRow={{
                        cells: [
                            { text: "Means of Transport" },
                            { text: "Timings" },
                        ],
                    }}
                    dataRows={SCHOOL_TIMINGS.reporting.map(reportTimings => ({
                        cells: Object.values(reportTimings).map(val => ({
                            text: val,
                        })),
                    }))}
                />
                <StaticTable
                    caption={{ title: "Dispersal Timings" }}
                    headerRow={{
                        cells: [
                            { text: "Type of Transport" },
                            { text: "Class" },
                            { text: "Timings" },
                        ],
                    }}
                    dataRows={SCHOOL_TIMINGS.dispersal.map(
                        dispersalTimings => ({
                            cells: Object.values(dispersalTimings).map(val => ({
                                text: val,
                            })),
                        }),
                    )}
                />
            </div>
            <p>
                The management reserves the right to change the school timing as
                well as location of classes as and when deemed necessary.
            </p>
        </TwoSectionPage>
    );
};

export default SchoolTimingsPage;
