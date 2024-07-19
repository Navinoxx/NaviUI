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

export const DisplayLabel = {
    args: {
        min: 0,
        max: 100,
        step: 1,
        valueLabelDisplay: true,
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

export const CustomMarks = {
    args: {
        min: 0,
        max: 100,
        step: 10,
        initialValue: 50,
    },
    render: (args) => {
        const marks = [
            { value: 0, label: '0°C' },
            { value: 20, label: '20°C' },
            { value: 40, label: '40°C' },
            { value: 100, label: '100°C' },
        ]

        return (
            <div className="w-72 space-y-12">
                <Slider {...args} marks={marks} />
                <Slider {...args} marks={marks} disabled />
            </div>
        )
    }
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
    },
    render: (args) => {
        const [value, setValue] = useState(25);

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

export const RangeSlider = {
    args: {
        min: 0,
        max: 100,
        step: 1,
        valueLabelDisplay: true,
    },
    render: (args) => {
        const [values, setValues] = useState([25, 75]);

        const handleChange = (event, newValue) => {
            setValues(newValue);
        }

        return (
            <div className="w-72 space-y-8">
                <Slider {...args} value={values} onChange={handleChange}  />
                <Slider {...args} value={values} onChange={handleChange} disabled />
            </div>
        )
    }
}

export const CustomSlider = {
    args: {
        min: 0,
        max: 100,
        initialValue: 50,
    },
    render: (args) => (
        <div className="w-72 space-y-8">
            <Slider {...args} step={10} color="green" marksClassName="bg-white border-2 border-green-500 w-3 h-3" marks />
            <Slider {...args} color="black" trackClassName="rounded-none" thumbClassName="rounded-none border-2 border-black bg-white" />
            <Slider {...args} color="red" className="h-2 bg-gray-400" />
            <Slider {...args} color="purple" thumbClassName="bg-purple-700" trackClassName="bg-gradient-to-r from-purple-300 to-purple-700" />
        </div>
    ),
}