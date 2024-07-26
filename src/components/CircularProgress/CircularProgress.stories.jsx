import { useEffect, useState } from "react";
import { CircularProgress } from "./CircularProgress";
import { Box, Stack } from "../Layout";
import { Typography } from "../Typography";

export default {
    title: "Components/Progress/CircularProgress",
    component: CircularProgress,
    parameters: {
        layout: "centered",
    },
};

export const CircularIndeterminate = {
    args: {},
    render: (args) => <CircularProgress {...args} />
};

export const CircularColors = {
    args: {
        color: ["blue", "red", "green", "indigo", "purple", "pink", "black"],
    },
    render: (args) => (
        <Stack spacing={4} direction="row">
            {args.color.map((color) => (
                <CircularProgress key={color} {...args} color={color} />
            ))}
        </Stack>
    )
};

export const CircularDeterminate = {
    args: {},
    render: (args) => {
        const [progress, setProgress] = useState(0);

        useEffect(() => {
            const interval = setInterval(() => {
                setProgress((oldProgress) => {
                    if (oldProgress === 100) {
                        return 0;
                    }
                    return Math.min(oldProgress + 10, 100);
                });
            }, 1000);
        
            return () => {
                clearInterval(interval);
            };
        }, []);
        
        return (
            <Stack spacing={4} direction="row">
                <CircularProgress {...args} variant="determinate" value={25} />
                <CircularProgress {...args} variant="determinate" value={50} />
                <CircularProgress {...args} variant="determinate" value={75} />
                <CircularProgress {...args} variant="determinate" value={100} />
                <CircularProgress {...args} variant="determinate" value={progress} />
            </Stack>
        );
    }
};

export const CircularWithLabel = {
    args: {},
    render: (args) => {
        const [progress, setProgress] = useState(0);

        useEffect(() => {
            const interval = setInterval(() => {
                setProgress((oldProgress) => {
                    if (oldProgress === 100) {
                        return 0;
                    }
                    return Math.min(oldProgress + 10, 100);
                });
            }, 1000);
        
            return () => {
                clearInterval(interval);
            };
        }, []);
        return (
            <Box className="relative inline-flex">
                <CircularProgress {...args} variant="determinate" value={progress} />
                <Box className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <Typography variant="caption" className="text-gray-500">{`${Math.round(progress)}%`}</Typography>
                </Box>
            </Box>
        );
    }
};