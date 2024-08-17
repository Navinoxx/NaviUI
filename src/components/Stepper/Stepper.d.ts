import { FC } from "react";

interface StepperProps {
    activeStep?: number;
    orientation?: "horizontal" | "vertical";
    className?: string;
};

interface StepProps {
    className?: string;
};

interface StepLabelProps {
    className?: string;
};

interface StepContentProps {
    className?: string;
};

export const Stepper: FC<StepperProps> & {
    Step: FC<StepProps> & {
        Label: FC<StepLabelProps>
        Content: FC<StepContentProps>
    }
};