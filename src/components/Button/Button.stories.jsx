import { Trash } from "@/icons/trash";
import { Button } from "./Button";
import { action } from "@storybook/addon-actions";
import { Stack } from "../Layout";
import { IconButton } from "../IconButton";

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
    render: (args) => (
        <div className="flex gap-5">
            <Button {...args} color="blue" rounded/>
            <Button {...args} color="red" rounded/>
            <Button {...args} color="green" rounded/>
            <Button {...args} color="indigo" rounded/>
            <Button {...args} color="purple" rounded/>
            <Button {...args} color="pink" rounded/>
            <Button {...args} color="black" rounded/>
        </div>
    ),
}

export const Solid = {
    args: {
        children: 'Solid',
        variant: 'solid',
        onClick: action('onClick'),
    },
}

export const Shadow = {
    args: {
        children: 'Shadow',
        variant: 'shadow',
        onClick: action('onClick'),
    },
}

export const Outline = {
    args: {
        children: 'Outline',
        variant: 'outline',
        onClick: action('onClick'),
    },
}

export const Ghost = {
    args: {
        children: 'Ghost',
        variant: 'ghost',
        onClick: action('onClick'),
    },
}

export const IconAndPosition = {
    args: {
        children: 'Delete',
        variant: 'outline',
        icon: <Trash />,
        onClick: action('onClick'),
    },
    render: (args) => (
        <Stack direction="row" spacing={2}>
            <Button {...args} color="blue" iconPosition="start" rounded/>
            <Button {...args} color="red" iconPosition="end" rounded/>
            <Button {...args} color="green" iconPosition="top" rounded/>
            <Button {...args} color="black" iconPosition="bottom" rounded/>
        </Stack>
    ),
}

export const Iconbutton = {
    args: {
        onClick: action('onClick'),
    },
    render: (args) => (
        <Stack direction="row" spacing={2}>
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
        </Stack>
    ),
}