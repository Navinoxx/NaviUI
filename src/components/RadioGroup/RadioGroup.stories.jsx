import { useState } from "react";
import { Box } from "../Layout";
import { Typography } from "../Typography";
import { RadioGroup } from "./RadioGroup";
import { Radio } from "../Radio";

export default {
    title: "Components/RadioGroup",
    component: RadioGroup,
    parameters: {
        layout: "centered",
    },
};

export const Basic = {
    args: {
        defaultValue: "female",
    },
    render: (args) => (
        <Box className="space-y-2">
            <Typography variant="h6">Gender</Typography>
            <RadioGroup {...args}>
                <RadioGroup.Radio value="female" label="Female" />
                <RadioGroup.Radio value="male" label="Male" />
                <RadioGroup.Radio value="other" label="Other" />
            </RadioGroup>
        </Box>
    ),
};

export const Direction = {
    args: {
        orientation: "vertical",
    },
    render: (args) => (
        <Box className="space-y-2">
            <Typography variant="h6">Gender</Typography>
            <RadioGroup {...args}>
                <RadioGroup.Radio value="female" label="Female" />
                <RadioGroup.Radio value="male" label="Male" />
                <RadioGroup.Radio value="other" label="Other" />
            </RadioGroup>
        </Box>
    ),
};

export const Controlled = {
    args: {},
    render: (args) => {
        const [value, setValue] = useState("female");

        const handleChange = (event) => {
            setValue(event.target.value);
        };

        return (
        <Box className="space-y-2">
            <Typography variant="h6">Gender</Typography>
                <RadioGroup {...args} value={value} onChange={handleChange}>
                <RadioGroup.Radio value="female" label="Female" />
                <RadioGroup.Radio value="male" label="Male" />
                <RadioGroup.Radio value="other" label="Other" />
            </RadioGroup>
            <Typography variant="body1">Selected value: {value}</Typography>
        </Box>
        );
    },
};

export const StandaloneRadioButtons = {
    args: {},
    render: (args) => {
        const [value, setValue] = useState("1");

        const handleChange = (event) => {
            setValue(event.target.value);
        };
        
        return (
        <Box className="space-x-2">
            <Radio {...args} value="1" checked={value === "1"} onChange={handleChange}/>
            <Radio {...args} value="2" checked={value === "2"} onChange={handleChange}/>
            <Radio {...args} value="3" checked={value === "3"} onChange={handleChange}/>
        </Box>
        );
    },
};

export const Size = {
    args: {},
    render: (args) => {
        const [value, setValue] = useState("1");

        const handleChange = (event) => {
            setValue(event.target.value);
        };
        
        return (
        <Box className="space-x-2">
            <Radio {...args} value="1" checked={value === "1"} onChange={handleChange} size={20}/>
            <Radio {...args} value="2" checked={value === "2"} onChange={handleChange}/>
            <Radio {...args} value="3" checked={value === "3"} onChange={handleChange} size="30"/>
        </Box>
        );
    },
};

export const Color = {
    args: {},
    render: (args) => {
        const [value, setValue] = useState("1");

        const handleChange = (event) => {
            setValue(event.target.value);
        };
        
        return (
            <Box className="space-x-2">
                <Radio {...args} value="1" checked={value === "1"} onChange={handleChange} color="red"/>
                <Radio {...args} value="2" checked={value === "2"} onChange={handleChange} color="green"/>
                <Radio {...args} value="3" checked={value === "3"} onChange={handleChange} color="black"/>
            </Box>
        );
    },
};

export const LabelPlacement = {
    args: {},
    render: (args) => (
        <RadioGroup {...args} defaultValue="top">
            <RadioGroup.Radio value="top" label="Top" labelPlacement="top" />
            <RadioGroup.Radio value="start" label="Start" labelPlacement="start" />
            <RadioGroup.Radio value="end" label="End" labelPlacement="end" />
            <RadioGroup.Radio value="bottom" label="Bottom" labelPlacement="bottom" />
        </RadioGroup>
    )
};
