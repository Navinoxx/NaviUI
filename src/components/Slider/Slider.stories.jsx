import { useState } from "react";
import { Slider } from "./Slider";

export default {
    title: "Components/Slider",
    component: Slider,
    parameters: {
        layout: "centered",
    },
};

export const Basic = {
    args: {
        min: 0,
        max: 100,
        step: 1,
        initialValue: 50,
    },
    render: (args) => (
        <div className="w-72 space-y-8">
            <Slider {...args} />
            <Slider {...args} disabled />
        </div>
    ),
}

export const DiscreteSliders = {
    args: {
        min: 0,
        max: 100,
        step: 10,
        marks: true,
        initialValue: 40,
    },
    render: (args) => (
        <div className="w-72 space-y-8">
            <Slider {...args} />
            <Slider {...args} disabled />
        </div>
    ),
}

export const Vertical = {
    args: {
        min: 0,
        max: 100,
        step: 10,
        initialValue: 50,
        orientation: "vertical",
    },
    render: (args) => (
        <div className="h-72 space-x-8">
            <Slider {...args} />
            <Slider {...args} marks />
            <Slider {...args} disabled />
        </div>
    ),
}

export const Controlled = {
    args: {
        min: 0,
        max: 100,
        step: 1,
        initialValue: 50,
    },
    render: (args) => {
        const [value, setValue] = useState(50);

        const handleChange = (newValue) => {
            setValue(newValue);
        }

        return (
            <div className="w-72 space-y-5">
                <Slider {...args} value={value} onChange={handleChange} />
                <p>Value: {value}</p>
            </div>
        )
    }
}