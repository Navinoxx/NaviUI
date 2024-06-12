import { Button } from "./Button";
import { action } from "@storybook/addon-actions";

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
        size: {
            control: { type: 'radio' },
        },
    },
    render: (args) => (
        <div className="flex gap-5">
            <Button {...args} color="blue" />
            <Button {...args} color="red" />
            <Button {...args} color="green" />
            <Button {...args} color="indigo" />
            <Button {...args} color="purple" />
            <Button {...args} color="pink" />
            <Button {...args} color="black" />
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