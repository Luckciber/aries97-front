import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import MKTypography from "components/MKTypography";
import { Grid } from "@mui/material";
import Container from "@mui/material/Container";
import { autoPlay } from "react-swipeable-views-utils";

import bgImage from "assets/images/background/artic_01.png";
import bgImage2 from "assets/images/background/artic_02.png";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath: bgImage,
    titleText: " Aries 97 te invita",
    middleText: "A conocer su increible colección de artículos exclusivos y diseñados para tí.",
  },
  {
    imgPath: bgImage2,
    titleText: " Ariesi 97 te invita",
    middleText: "A conocer su increible colección de artículos exclusivos y diseñados para tí. cha",
  },
  {
    label: "Bali, Indonesia",
    imgPath: bgImage,
    titleText: " Ariese 97 te invita",
    middleText: "A conocer su increible colección de artículos exclusivos y diseñados para tí. pa",
  },
  {
    label: "Goč, Serbia",
    imgPath: bgImage2,
    titleText: " Ariesa 97 te invita",
    middleText: "A conocer su increible colección de artículos exclusivos y diseñados para tí. la",
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 555,
                  display: "block",
                  overflow: "hidden",
                  width: "100%",
                  objectFit: "cover",
                }}
                src={step.imgPath}
              />
            ) : null}
            <div>
              <Container>
                <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
                  <MKTypography
                    variant="h1"
                    color="white"
                    mt={-6}
                    mb={1}
                    sx={({ breakpoints, typography: { size } }) => ({
                      [breakpoints.down("md")]: {
                        fontSize: size["3xl"],
                      },
                    })}
                  >
                    {step.titleText + " "}
                  </MKTypography>
                  <MKTypography
                    variant="body1"
                    color="white"
                    textAlign="center"
                    px={{ xs: 6, lg: 12 }}
                    mt={1}
                  >
                    {step.middleText}
                  </MKTypography>
                </Grid>
              </Container>
            </div>
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === "rtl" ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default SwipeableTextMobileStepper;
