import { Spinner } from "./Spinner";

export default {
    title: 'Components/Spinner',
    component: Spinner,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        variant: {
            control: { type: 'select' },
        },
        color: {
            control: { type: 'none' },
        },
        size: {
            control: { type: 'radio' },
        },
    },
    render: (args) => (
        <div className="flex flex-row gap-5">
            <Spinner {...args} color="blue" />
            <Spinner {...args} color="red" />
            <Spinner {...args} color="green" />
            <Spinner {...args} color="indigo" />
            <Spinner {...args} color="purple" />
            <Spinner {...args} color="pink" />
            <Spinner {...args} color="black" />
        </div>
    ),
}

export const Regular = {
    args: {
        variant: 'regular',
    },
}

export const Double = {
    args: {
        variant: 'double',
    },
}

export const Edge = {
    args: {
        variant: 'edge',
    },
}

export const Dashed = {
    args: {
        variant: 'dashed',
    },
}