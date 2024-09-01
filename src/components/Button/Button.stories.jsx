import { Trash } from "@/icons/trash";
import { Button } from "./Button";
import { action } from "@storybook/addon-actions";
import { IconButton } from "../IconButton";
import { CloudUpload } from "@/icons/cloudUpload";

export default {
    title: 'Components/Button',
    component: Button,
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
        rounded: {
            control: { type: 'select' },
            options: [false, 'full'],
        },
        size: {
            control: { type: 'radio' },
        },
    },
}

export const Basic = {
    args: {
        rounded: true,
        onClick: action('onClick'),
    },
    render: (args) => (
        <div className="flex gap-5">
            <Button {...args} variant="solid">
                Solid
            </Button>
            <Button {...args} variant="shadow">
                Shadow
            </Button>
            <Button {...args} variant="outlined">
                Outlined
            </Button>
            <Button {...args} variant="ghost">
                Ghost
            </Button>
        </div>
    ),
}

export const Solid = {
    args: {
        variant: 'solid',
        rounded: true,
        onClick: action('onClick'),
    },
    render: (args) => (
        <div className="flex gap-5">
            <Button {...args}>
                Solid
            </Button>
            <Button {...args} disabled>
                Disabled
            </Button>
            <Button {...args} href="https://google.com" target="_blank" rel="noopener noreferrer">
                Link
            </Button>
        </div>
    ),
}

export const Shadow = {
    args: {
        variant: 'shadow',
        rounded: true,
        onClick: action('onClick'),
    },
    render: (args) => (
        <div className="flex gap-5">
            <Button {...args}>
                Shadow
            </Button>
            <Button {...args} disabled>
                Disabled
            </Button>
            <Button {...args} href="https://google.com" target="_blank" rel="noopener noreferrer">
                Link
            </Button>
        </div>
    ),
}

export const Outlined = {
    args: {
        variant: 'outlined',
        rounded: true,
        onClick: action('onClick'),
    },
    render: (args) => (
        <div className="flex gap-5">
            <Button {...args}>
                Outlined
            </Button>
            <Button {...args} disabled>
                Disabled
            </Button>
            <Button {...args} href="https://google.com" target="_blank" rel="noopener noreferrer">
                Link
            </Button>
        </div>
    ),
}

export const Ghost = {
    args: {
        variant: 'ghost',
        rounded: true,
        onClick: action('onClick'),
    },
    render: (args) => (
        <div className="flex gap-5">
            <Button {...args}>
                Ghost
            </Button>
            <Button {...args} disabled>
                Disabled
            </Button>
            <Button {...args} href="https://google.com" target="_blank" rel="noopener noreferrer">
                Link
            </Button>
        </div>
    ),
}

export const Color = {
    args: {
        rounded: true,
    },
    render: (args) => (
        <div className="flex gap-5">
            <Button {...args} color="blue">
                Blue
            </Button>
            <Button {...args} color="red" variant="outlined">
                Red
            </Button>
            <Button {...args} color="green" variant="ghost">
                Green
            </Button>
            <Button {...args} color="indigo">
                Indigo
            </Button>
            <Button {...args} color="purple" variant="outlined">
                Purple
            </Button>
            <Button {...args} color="pink" variant="ghost">
                Pink
            </Button>
            <Button {...args} color="black">
                Black
            </Button>
        </div>
    ),
}

export const Sizes = {
    args: {
        rounded: true,
    },
    render: (args) => (
        <div className="space-x-8">
            <Button {...args} size="sm">
                Small
            </Button>
            <Button {...args} size="md">
                Medium
            </Button>
            <Button {...args} size="lg">
                Large
            </Button>
        </div>
    ),
}

export const IconAndPosition = {
    args: {
        children: 'Delete',
        variant: 'outlined',
        rounded: true,
        icon: <Trash />,
        onClick: action('onClick'),
    },
    render: (args) => (
        <div className="flex gap-5">
            <Button {...args} iconPosition="start"/>
            <Button {...args} iconPosition="end"/>
        </div>
    ),
}

export const IconsButton = {
    args: {
        onClick: action('onClick'),
    },
    render: (args) => (
        <div className="flex gap-5">
            <IconButton {...args}>
                <Trash />
            </IconButton>
            <IconButton {...args} disabled>
                <Trash />
            </IconButton>
            <IconButton {...args} color="red">
                <Trash />
            </IconButton>
            <IconButton {...args} color="green">
                <Trash />
            </IconButton>
        </div>
    ),
}

export const FileUpload = {
    args: {
        rounded: true,
        onClick: action('onClick'),
        icon: <CloudUpload />,
        component: 'label',
    },
    render: (args) => (
        <Button {...args}>
            Upload File
            <input
                type="file"
                className="hidden"
            />
        </Button>
    ),
}