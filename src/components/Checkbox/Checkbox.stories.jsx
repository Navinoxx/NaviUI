import { useState } from "react";
import { Checkbox } from "./Checkbox";

export default {
    title: "Components/Checkbox",
    component: Checkbox,
    parameters: {
        layout: "centered",
    },
};

export const Basic = {
    args: {},
    render: (args) => (
        <div className="flex flex-row gap-2">
            <Checkbox {...args}/>
            <Checkbox {...args} defaultChecked/>
            <Checkbox {...args} disabled/>
            <Checkbox {...args} disabled defaultChecked/>
        </div>
    )
}

export const Label = {
    args: {},
    render: (args) => (
        <div className="flex flex-col gap-2">
            <Checkbox {...args} label="Checkbox"/>
            <Checkbox {...args} label="Default Checked" defaultChecked/>
            <Checkbox {...args} label="Disabled" disabled/>
            <Checkbox {...args} label="Disabled Default Checked" disabled defaultChecked/>
        </div>
    )    
}

export const LabelPlacement = {
    args: {
        labelPlacement: ["start", "end", "top", "bottom"],
        defaultChecked: true
    },
    render: (args) => {
        const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

        return (
            <div className="flex flex-row gap-2">
                {
                    args.labelPlacement.map((label) => (
                        <Checkbox
                            {...args}
                            key={label}
                            label={capitalize(label)}
                            labelPlacement={label}
                        />
                    ))
                }
            </div>
        )
    }
}

export const Color = {
    args: {
        color: ["blue", "red", "green", "indigo", "purple", "pink", "black"],
        defaultChecked: true
    },
    render: (args) => (
        <div className="flex flex-row gap-2">
            {
                args.color.map((color) => (
                    <Checkbox
                        {...args}
                        key={color}
                        color={color}
                    />
                ))
            }
        </div>
    )
}

export const Size = {
    args: {
        size: ["sm", "md", "lg"],
        defaultChecked: true
    },
    render: (args) => (
        <div className="flex flex-row gap-2">
            {
                args.size.map((size) => (
                    <Checkbox
                        {...args}
                        key={size}
                        size={size}
                    />
                ))
            }
        </div>
    )
}

export const Controlled = {
    args: {},
    render: (args) => {
        const [checked, setChecked] = useState(true);

        const handleChange = (event) => {
            setChecked(event.target.checked);
        };

        return (
            <Checkbox
                {...args}
                checked={checked}
                onChange={handleChange}
            />
        )
    }
}

