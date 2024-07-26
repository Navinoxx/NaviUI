import { Chip } from "../Chip";
import { Stack } from "../Layout";
import { Typography } from "../Typography";
import { Divider } from "./Divider";

export default {
    title: "Components/Divider",
    component: Divider,
    parameters: {
        layout: "centered",
    },
};

export const Basic = {
    args: {},
    render: (args) => (
        <Stack alignItems="start" className="border border-black rounded">
            <Typography variant="h6" className="m-2">Full width variant below</Typography>
            <Divider {...args} />
            <Typography variant="h6" className="m-2">Inset variant below</Typography>
            <Divider {...args} variant="inset" />
            <Typography variant="h6" className="m-2">Middle variant below</Typography>
            <Divider {...args} variant="middle" />
            <Typography variant="h6" className="m-2">Last item</Typography>
        </Stack>
    )
};

export const Orientation = {
    args: {
        orientation: "vertical"
    },
    render: (args) => (
        <Stack direction="row" className="border border-black rounded h-40">
            <Typography variant="h1" align="center" className="m-2 w-24 font-bold font-serif">I</Typography>
            <Divider {...args} />
            <Typography variant="h1" align="center" className="m-2 w-24 font-bold font-serif">M</Typography>
            <Divider {...args} variant="middle" />
            <Typography variant="h1" align="center" className="m-2 w-24 font-bold font-serif">L</Typography>
        </Stack>
    )
}

export const WithChildren = {
    args: {},
    render: (args) => {
        const content = <Typography variant="h6" className="m-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>

        return (
            <Stack alignItems="start" className="border border-black rounded">
                {content}
                <Divider {...args}>CENTER</Divider>
                {content}
                <Divider {...args} textAlign="left">LEFT</Divider>
                {content}
                <Divider {...args} textAlign="right">RIGHT</Divider>
                {content}
                <Divider {...args}>
                    <Chip label="Chip" size="sm" color="black" />
                </Divider>
                {content}
            </Stack>
        )
    }
}