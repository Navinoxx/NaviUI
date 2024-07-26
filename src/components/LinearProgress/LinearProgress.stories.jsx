import { useEffect, useState } from "react";
import { Box } from "../Layout";
import { LinearProgress } from "./LinearProgress";
import { Typography } from "../Typography";

export default {
    title: "Components/Progress/LinearProgress",
    component: LinearProgress,
    parameters: {
        layout: "centered",
    },
};

export const LinearIndeterminate = {
    args: {},
    render: (args) => (
        <Box className="w-96">
            <LinearProgress {...args} />
        </Box>
    )
};

export const LinerColor = {
    args: {
        color: ["blue", "red", "green", "indigo", "purple", "pink", "black"],
    },
    render: (args) => (
        <Box className="w-96 space-y-5">
            {args.color.map((color) => (
                <LinearProgress key={color} {...args} color={color} />
            ))}
        </Box>
    )
};

export const LinearDeterminate = {
    args: {
        variant: "determinate",
    },
    render: (args) => {
        const [progress, setProgress] = useState(0);

        useEffect(() => {
            const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    return 0;
                }
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 100);
            });
            }, 500);

            return () => {
                clearInterval(timer);
            };
        }, []);

        return (
            <Box className="w-96">
                <LinearProgress {...args} value={progress} />
            </Box>
        )
    }
}

export const LinearWithLabel = {
    args: {
        variant: "determinate",
    },
    render: (args) => {
        const [progress, setProgress] = useState(0);

        useEffect(() => {
            const timer = setInterval(() => {
                setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
            }, 800);

            return () => {
                clearInterval(timer);
            };
        }, []);

        return (
            <Box className="flex items-center gap-4 w-96">
                <LinearProgress {...args} value={progress} />
                <Typography variant="caption" className="text-gray-500">{`${Math.round(progress)}%`}</Typography>
            </Box>
        )
    }
}