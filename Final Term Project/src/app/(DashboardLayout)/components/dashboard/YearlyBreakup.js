import dynamic from "next/dynamic";
import { useTheme } from "@mui/material/styles";
import { Grid, Stack, Typography, Avatar } from "@mui/material";
import { IconArrowUpLeft } from "@tabler/icons-react";
import DashboardCard from "./DashboardCard"; // Update the path as needed

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const YearlyBreakup = () => {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const primarylight = "#ecf2ff";
  const successlight = theme.palette.success.light;

  // chart
  const optionscolumnchart = {
    // Your chart options here...
  };

  const seriescolumnchart = [38, 40, 25];

  return (
    <DashboardCard title="Yearly Breakup">
      <Grid container spacing={3}>
        {/* column */}
        <Grid item xs={7} sm={7}>
          <Typography variant="h3" fontWeight="700">
            $36,358
          </Typography>
          <Stack direction="row" spacing={1} mt={1} alignItems="center">
            <Avatar sx={{ bgcolor: successlight, width: 27, height: 27 }}>
              <IconArrowUpLeft width={20} color="#39B69A" />
            </Avatar>
            <Typography variant="subtitle2" fontWeight="600">
              +9%
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              last year
            </Typography>
          </Stack>
          <Stack spacing={3} mt={5} direction="row">
            <Stack direction="row" spacing={1} alignItems="center">
              <Avatar
                sx={{ width: 9, height: 9, bgcolor: primary, svg: { display: "none" } }}
              ></Avatar>
              <Typography variant="subtitle2" color="textSecondary">
                2022
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <Avatar
                sx={{
                  width: 9,
                  height: 9,
                  bgcolor: primarylight,
                  svg: { display: "none" },
                }}
              ></Avatar>
              <Typography variant="subtitle2" color="textSecondary">
                2023
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        {/* column */}
        <Grid item xs={5} sm={5}>
          <Chart
            options={optionscolumnchart}
            series={seriescolumnchart}
            type="donut"
            height="150px"
          />
        </Grid>
      </Grid>
    </DashboardCard>
  );
};

export default YearlyBreakup;
