import { Alert } from "./Alert";
import { Box } from "../Layout";
import { action } from "@storybook/addon-actions";

export default {
    title: "Components/Alert",
    component: Alert,
    parameters: {
        layout: "centered",
    },
};

export const Simple = {
    args: {
        icon: false
    },
    render: (args) => (
        <Box className="flex flex-col gap-5">
            <Alert {...args} severity="success">
                Your account was registered!
            </Alert>
            <Alert {...args} severity="error">
                Your email is already used!
            </Alert>
            <Alert {...args} severity="warning">
                Your image size is too large!
            </Alert>
            <Alert {...args} severity="info">
                This channel archived by the owner!
            </Alert>
        </Box>
    ),
};

export const WithIcon = {
    args: {},
    render: (args) => (
        <Box className="flex flex-col gap-5">
            <Alert {...args} severity="success">
                Your account was registered!
            </Alert>
            <Alert {...args} severity="error">
                Your email is already used!
            </Alert>
            <Alert {...args} severity="warning">
                Your image size is too large!
            </Alert>
            <Alert {...args} severity="info">
                This channel archived by the owner!
            </Alert>
        </Box>
    ),
};

export const WithCloseButton = {
    args: {
        onClose: action("onClose"),
    },
    render: (args) => (
        <Box className="flex flex-col gap-5">
            <Alert {...args} severity="success">
                Your account was registered!
            </Alert>
            <Alert {...args} severity="error">
                Your email is already used!
            </Alert>
            <Alert {...args} severity="warning">
                Your image size is too large!
            </Alert>
            <Alert {...args} severity="info">
                This channel archived by the owner!
            </Alert>
        </Box>
    ),
}

export const Titles = {
    args: {},
    render: (args) => (
        <Box className="flex flex-col gap-5">
            <Alert {...args} severity="success">
                <Alert.Title>Success</Alert.Title>
                Your account was registered!
            </Alert>
            <Alert {...args} severity="error">
                <Alert.Title>Error</Alert.Title>
                Your email is already used!
            </Alert>
            <Alert {...args} severity="warning">
                <Alert.Title>Warning</Alert.Title>
                Your image size is too large!
            </Alert>
            <Alert {...args} severity="info">
                <Alert.Title>Info</Alert.Title>
                This channel archived by the owner!
            </Alert>
        </Box>
    ),
}

export const CustomAlert = {
    args: {},
    render: (args) => {
        const customClassName = {
            alert: "rounded-lg shadow-md bg-transparent",
            icon: "bg-green-500 pr-2",
            message: "bg-white text-gray-800",
            title: "text-green-500"
        }

        const customClassName2 = {
            alert: "rounded-lg shadow-md bg-transparent",
            message: "bg-white border-l-4 border-red-500 text-gray-800",
            title: "text-red-500"
        }

        const customClassName3 = {
            alert: "rounded-lg shadow-md bg-transparent",
            icon: "bg-yellow-500 pr-2",
            message: "bg-white text-gray-800",
            title: "text-yellow-500",
            closeButton: "hover:bg-yellow-200 text-yellow-500"
        }

        const customClassName4 = {
            alert: "rounded-lg shadow-md bg-transparent",
            icon: "bg-blue-500 pr-2",
            message: "bg-white text-gray-800",
            title: "text-blue-500",
            closeButton: "hover:bg-blue-200 text-blue-500"
        }

        return (
            <Box className="flex flex-col gap-5">
                <Alert {...args} severity="success" className={customClassName}>
                    <Alert.Title className="text-green-500">Success</Alert.Title>
                    Your account was registered!
                </Alert>
                <Alert {...args} severity="error" className={customClassName2} icon={false}>
                    Your email is already used!
                </Alert>
                <Alert {...args} severity="warning" className={customClassName3} onClose={action("onClose")}>
                    Your image size is too large!
                </Alert>
                <Alert {...args} severity="info" className={customClassName4} onClose={action("onClose")}>
                    <Alert.Title className="text-blue-500">Info</Alert.Title>
                    This channel archived by the owner!
                </Alert>
            </Box>
        )
    },
};