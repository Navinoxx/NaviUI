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
            <Checkbox {...args} />
            <Checkbox {...args} defaultChecked/>
            <Checkbox {...args} disabled/>
            <Checkbox {...args} disabled defaultChecked/>
        </div>
    )
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