"use client";
import DropDownButton from "@/components/common/DropDownButton";
import ReportIcon from "@/components/icons/ReportIcon";
import { useToggleBoolean } from "@/hooks/useToggleBoolean";
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import StatisticalBox from "./StatisticalBox";
import "./styles.scss";
import SectionWrapper from "../../components/SectionWrapper";

type Props = {};

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

const ReportInfo = (props: Props) => {
  const { handleChange, isOpen } = useToggleBoolean();

  const sampleData = [43, 40, 50, 40, 70, 40, 45, 33, 40, 60, 40, 50, 36];

  const canvasData = {
    datasets: [
      {
        label: "Home",
        lineTension: 0.4,
        data: sampleData,
        borderWidth: 0.5,
        border: "2px solid",
        borderImageSource:
          "linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(30, 30, 30, 0.3) 57%, rgba(255, 255, 255, 0.3) 100%)",
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      },
      y: {
        grid: {
          // display: true,
          tickLength: 90,
          borderWidth: 2, // Adjust the width of the grid lines
          borderColor: "rgba(0, 0, 0, 0.3)",
        },
        border: {
          display: false,
        },
        min: 0,
        max: 80,
        ticks: {
          stepSize: 10,
          color: "green",
          font: {
            family: "Nunito",
            size: 12,
          },
        },
      },
    },
    maintainAspectRatio: false,
    // responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };

  const graphStyle = {
    maxHeight: "221px",
    height: "100%",
    // innerWidth: "100%",
  };

  return (
    <SectionWrapper className="report-info-wrapper">
      <div className="report-header">
        <div className="heading-wrapper">
          <ReportIcon />
          <h3>Last 30 Days Report</h3>
        </div>
        <div className="date-wrapper">
          <DropDownButton
            isOpen={isOpen}
            isOpenChange={handleChange}
            buttonText="30 Days"
            items={[
              {
                text: "10 Days",
              },
              {
                text: "20 Days",
              },
              {
                text: "30 Days",
              },
            ]}
          />{" "}
          &nbsp;
          <small>28-02-2024 - 28-03-2024</small>
        </div>
      </div>
      {/* STATS BOXES */}
      <div className="statistical-box-wrapper">
        <StatisticalBox />
        <StatisticalBox />
        <StatisticalBox />
        <StatisticalBox />
      </div>

      {/* GRAPH */}
      <div className="hi" style={graphStyle}>
        <Line id="home" options={options} data={canvasData} />
      </div>
    </SectionWrapper>
  );
};

export default ReportInfo;
