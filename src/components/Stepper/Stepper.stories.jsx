import { useState } from "react";
import { Stepper } from "./Stepper";
import { Box, Grid } from "../Layout";
import { Button } from "../Button";
import { Typography } from "../Typography";

export default {
    title: "Components/Stepper",
    component: Stepper,
    parameters: {
        layout: "centered",
    },
}

export const Basic = {
    args: {},
    render: (args) => {
        const [activeStep, setActiveStep] = useState(1);

        const steps = [...Array(5)].map((_, index) => <Stepper.Step key={index} />);

        const handleStepChange = (step) => {
            setActiveStep(step);
        }

        const handleReset = () => {
            setActiveStep(1);
        }

        return (
            <Grid container spacing={1} className="w-[600px]">
                <Grid item rowSpan={12}>
                    <Stepper {...args} activeStep={activeStep}>
                        {steps}
                    </Stepper>
                </Grid>
                {activeStep <= steps.length ? (
                    <>
                        <Grid item rowSpan={12} className="flex justify-center">
                            <Typography variant="h6">Step {activeStep}</Typography>
                        </Grid>
                        <Grid item rowSpan={12} className="flex justify-between">
                            <Button onClick={() => handleStepChange(activeStep - 1)} variant="ghost" disabled={activeStep === 1}>Back</Button>
                            <Button onClick={() => handleStepChange(activeStep + 1)} variant="ghost">{activeStep === steps.length ? "Finish" : "Next"}</Button>
                        </Grid>
                    </>
                ) : (
                    <>
                        <Grid item rowSpan={12} className="flex justify-center">
                            <Typography variant="h6">All steps completed</Typography>
                        </Grid>
                        <Grid item rowSpan={12} className="flex justify-end">
                            <Button onClick={handleReset} variant="ghost">Reset</Button>
                        </Grid>
                    </>
                )}
            </Grid>
        )
    }
}

export const AlternativeLabel = {
    args: {
        activeStep: 3
    },
    render: (args) => {
        const steps = Array.from({length: 5}, (_, index) => (
            <Stepper.Step key={index}>
                <Stepper.Step.Label>{`Step ${index + 1}`}</Stepper.Step.Label>
            </Stepper.Step>
        ));

        return (
            <Stepper {...args} className="w-[600px]">
                {steps}
            </Stepper>
        )
    }
}

export const Vertical = {
    args: {
        orientation: "vertical",
    },
    render: (args) => {
        const steps = [
            {
                label: 'Select campaign settings',
                description: `For each ad campaign that you create, you can control how much
                        you're willing to spend on clicks and conversions, which networks
                        and geographical locations you want your ads to show on, and more.`,
            },
            {
                label: 'Create an ad group',
                description:
                'An ad group contains one or more ads which target a shared set of keywords.',
            },
            {
                label: 'Create an ad',
                description: `Try out different ad text to see what brings in the most customers,
                        and learn how to enhance your ads using features like ad extensions.
                        If you run into any problems with your ads, find out how to tell if
                        they're running and how to resolve approval issues.`,
            },
        ];

        const [activeStep, setActiveStep] = useState(1);

        const handleStepChange = (step) => {
            setActiveStep(step);
        }

        const handleReset = () => {
            setActiveStep(1);
        }

        return (
            <Box className="max-w-96">
                <Stepper {...args} activeStep={activeStep}>
                    {steps.map((step, index) => (
                        <Stepper.Step key={index}>
                            <Stepper.Step.Label>{step.label}</Stepper.Step.Label>
                            <Stepper.Step.Content>
                                <Typography variant="body1">{step.description}</Typography>
                                <Box className="flex justify-between mt-2">
                                    <Button onClick={() => handleStepChange(activeStep + 1)} variant="ghost">{index + 1 === steps.length ? "Finish" : "Continue"}</Button>
                                    <Button onClick={() => handleStepChange(activeStep - 1)} variant="ghost" disabled={activeStep === 1}>Back</Button>
                                </Box>
                            </Stepper.Step.Content>
                        </Stepper.Step>
                    ))}
                </Stepper>
                {activeStep === steps.length + 1 && (
                    <Box className="bg-slate-100 flex flex-col justify-center items-center mt-4 space-y-2 py-2">
                        <Typography variant="body1">All steps completed</Typography>
                        <Button onClick={handleReset} variant="ghost">Reset</Button>
                    </Box>
                )}
            </Box>
        )
    }
}