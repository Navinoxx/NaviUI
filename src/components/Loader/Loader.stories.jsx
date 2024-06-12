import { Loader } from "./Loader";

export default {
    title: 'Components/Loader',
    component: Loader,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        color: {
            control: { type: 'select' },
        },
        size: {
            control: { type: 'radio' },
        },
    },
    render: (args) => (
        <div className="flex flex-row gap-12">
            <Loader {...args} color="blue" />
            <Loader {...args} color="red" />
            <Loader {...args} color="green" />
            <Loader {...args} color="indigo" />
            <Loader {...args} color="purple" />
            <Loader {...args} color="pink" />
            <Loader {...args} color="black" />
        </div>
    ),
}

export const Bounce = {
    args: {
        animation: 'bounce',
    },
}

export const Pulse = {
    args: {
        animation: 'pulse',
    },
}

export const Ping = {
    args: {
        animation: 'ping',
    },
}

export const Fade = {
    args: {
        animation: 'fade',
    },
}

export const Scale = {
    args: {
        animation: 'scale',
    },
}

export const Flip = {
    args: {
        animation: 'flip',
    },
}