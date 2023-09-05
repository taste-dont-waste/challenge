import { Box, Button, MobileStepper, Stack } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Children, PropsWithChildren, useState } from "react";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

type CarouselProps = {
  initialStep?: number;
};

export const Carousel = ({ initialStep = 0, children }: PropsWithChildren<CarouselProps>) => {
  const [activeStep, setActiveStep] = useState(initialStep);

  const maxSteps = Children.count(children);

  if (maxSteps === 0) {
    return null;
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ flexGrow: 1, alignItems: "center" }}>
      <Stack direction="row">
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          <KeyboardArrowLeft />
        </Button>
        <AutoPlaySwipeableViews
          axis="x"
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {children}
        </AutoPlaySwipeableViews>
        <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
          <KeyboardArrowRight />
        </Button>
      </Stack>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="dots"
        activeStep={activeStep}
        backButton={null}
        nextButton={null}
        sx={{
          backgroundColor: "transparent",
          justifyContent: "center",
        }}
      />
    </Box>
  );
};
