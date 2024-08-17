import { AvatarGroup } from "../AvatarGroup";
import { Stack } from "../Layout";
import { Avatar } from "./Avatar";

export default {
    title: "Components/Avatar",
    component: Avatar,
    parameters: {
        layout: "centered",
    },
};

export const ImageAvatar = {
    args: {},
    render: (args) => (
        <Stack direction="row" spacing={2}>
            <Avatar {...args} src="/public/static/avatar/1.jpg" />
            <Avatar {...args} src="/public/static/avatar/2.jpg" />
            <Avatar {...args} src="/public/static/avatar/3.jpg" />
        </Stack>
    ),
}

export const LetterAvatar = {
    args: {},
    render: (args) => (
        <Stack direction="row" spacing={2}>
            <Avatar {...args}>H</Avatar>
            <Avatar {...args}>N</Avatar>
            <Avatar {...args}>OP</Avatar>
        </Stack>
    ),
}

export const LetterWithColor = {
    args: {},
    render: (args) => (
        <Stack direction="row" spacing={2}>
            <Avatar {...args} altWithColor="Remy Sharp"/>
            <Avatar {...args} altWithColor="Travis Howard"/>
            <Avatar {...args} altWithColor="Jed Watson"/>
        </Stack>
    ),
}

export const Sizes = {
    args: {},
    render: (args) => (
        <Stack direction="row" spacing={2}>
            <Avatar {...args} size="sm" src="/public/static/avatar/1.jpg" />
            <Avatar {...args} src="/public/static/avatar/2.jpg" />
            <Avatar {...args} size="lg" src="/public/static/avatar/3.jpg" />
        </Stack>
    ),
}

export const Variants = {
    args: {},
    render: (args) => (
        <Stack direction="row" spacing={2}>
            <Avatar {...args} variant="rounded">N</Avatar>
            <Avatar {...args} variant="square">H</Avatar>
        </Stack>
    ),
}

export const Fallback = {
    args: {},
    render: (args) => (
        <Stack direction="row" spacing={2}>
            <Avatar {...args} alt="Remy Sharp" src="/broken-image.jpg" className="bg-red-400" />
            <Avatar {...args} alt="Travis Howard" src="/broken-image.jpg" className="bg-blue-400" />
            <Avatar {...args} src="/broken-image.jpg" />
        </Stack>
    ),
}

export const Grouped = {
    args: {},
    render: (args) => (
        <AvatarGroup max={4}>
            <Avatar {...args} alt="Remy Sharp" src="/public/static/avatar/1.jpg" />
            <Avatar {...args} alt="Travis Howard" src="/public/static/avatar/2.jpg" />
            <Avatar {...args} alt="Cindy Baker" src="/public/static/avatar/3.jpg" />
            <Avatar {...args} alt="Agnes Walker" src="/public/static/avatar/4.jpg" />
            <Avatar {...args} alt="Trevor Henderson" src="/public/static/avatar/5.jpg" />
        </AvatarGroup>
    ),
}