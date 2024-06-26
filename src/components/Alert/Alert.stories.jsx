import { Alert } from "./Alert";
import { Box } from "../Layout";

export default {
    title: "Components/Alert",
    component: Alert,
    parameters: {
        layout: "centered",
    },
    render: (args) => (
        <Box className="flex flex-col gap-5">
            <Alert {...args} variant="success" message="Your account was registered!" />
            <Alert {...args} variant="error" message="Your email is already used!" />
            <Alert {...args} variant="warning" message="Your image size is too large!" />
            <Alert {...args} variant="info" message="This channel archived by the owner!" />
        </Box>
    ),
};

export const Simple = {};

export const WithIcon = {
    args: {
        withIcon: true,
    },
};
