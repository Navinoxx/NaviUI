import { Chip } from "./Chip";
import { action } from "@storybook/addon-actions";

export default {
    title: "Components/Chip",
    component: Chip,
    parameters: {
        layout: "centered",
    },
};

export const Basic = {
    args: {},
    render: (args) => (
        <div className="flex gap-5">
            <Chip {...args} label="Chip filled" variant="filled" />
            <Chip {...args} label="Chip outlined" variant="outlined" />
            <Chip {...args} label="Chip ghost" variant="ghost" />
        </div>
    )
}

export const Colors = {
    args: {
        variant: "filled",
    },
    render: (args) => (
        <div className="flex gap-5">
            <Chip {...args} label="Chip blue" color="blue" />
            <Chip {...args} label="Chip green" color="green" />
            <Chip {...args} label="Chip red" color="red" />
            <Chip {...args} label="Chip indigo" color="indigo" />
            <Chip {...args} label="Chip purple" color="purple" />
            <Chip {...args} label="Chip pink" color="pink" />
            <Chip {...args} label="Chip black" color="black" />
        </div>
    )
}

export const Sizes = {
    args: {
        variant: "filled",
    },
    render: (args) => (
        <div className="flex items-center gap-5">
            <Chip {...args} label="Chip small" size="sm" />
            <Chip {...args} label="Chip medium" size="md" />
            <Chip {...args} label="Chip large" size="lg" />
        </div>
    )
}

export const Clickable = {
    args: {
        label: "Clickable",
        onClick: action("onClick"),
    },
    render: (args) => (
        <div className="flex gap-5">
            <Chip {...args} variant="filled"/>
            <Chip {...args} variant="outlined"/>
        </div>
    )
}

export const Deletable = {
    args: {
        label: "Deletable",
        onDelete: action("onDelete"),
    },
    render: (args) => (
        <div className="flex gap-5">
            <Chip {...args} variant="filled"/>
            <Chip {...args} variant="outlined"/>
            <Chip {...args} variant="ghost"/>
        </div>
    )
}