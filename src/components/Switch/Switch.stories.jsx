import { useState } from "react";
import { Switch } from "./Switch";

export default {
    title: "Components/Switch",
    component: Switch,
    parameters: {
        layout: "centered",
    },
};

export const Basic = {
    args: {},
    render: (args) => (
        <div className="flex gap-10">
            <Switch {...args} />
            <Switch {...args} defaultChecked />
            <Switch {...args} disabled />
            <Switch {...args} disabled defaultChecked />
        </div>
    ),
};

export const WithLabel = {
    args: {
        label: "Label",
    },
    render: (args) => (
        <div className="flex gap-10">
            <Switch {...args} />
            <Switch {...args} defaultChecked />
            <Switch {...args} disabled />
            <Switch {...args} disabled defaultChecked />
        </div>
    ),
}

export const LabelPlacement = {
    args: {
        label: "Label",
        placement: ["start", "end", "bottom", "top"],
        defaultChecked: true
    },
    render: (args) => (
        <div className="flex gap-10">
            {args.placement.map(placement => <Switch {...args} key={placement} placement={placement} />)}
        </div>
    ),
}

export const Size = {
    args: {
        size: ["sm", "md", "lg"],
        defaultChecked: true
    },
    render: (args) => (
        <div className="flex gap-10">
            {args.size.map(size => <Switch {...args} key={size} size={size} />)}
        </div>
    ),
}

export const Color = {
    args: {
        color: ["blue", "red", "green", "indigo", "purple", "pink", "black"],
        defaultChecked: true
    },
    render: (args) => (
        <div className="flex gap-10">
            {args.color.map(color => <Switch {...args} key={color} color={color} />)}
        </div>
    ),
}

export const Controlled = {
    args: {},
    render: (args) => {
        const [isChecked, setIsChecked] = useState(true);

        const handleSwitchChange = (event) => {
            setIsChecked(event.target.checked);
        };

        return <Switch {...args} checked={isChecked} onChange={handleSwitchChange} />
    }
}