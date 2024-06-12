import { Container } from "./Container";
import { Box } from "../Box";

export default {
    title: 'Components/Layout/Container',
    component: Container,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        maxWidth: {
            control: { type: 'select' },
        },
        className: {
            control: { type: 'none' },
        },
        component: {
            control: { type: 'none' },
        },
    },
}

export const ExampleWithMaxWidth = {
    render: (args) => (
        <Container {...args} maxWidth="lg" className="border h-[100vh]">
            <Box {...args} className="bg-slate-100 flex justify-center items-center h-full w-full" />
        </Container>
    ),
    args: {
        children: 'maxWidth Container example',
    },
}   

export const ExampleWithFixed = {
    render: (args) => (
        <Container {...args} fixed className="border h-[100vh]">
            <Box {...args} className="bg-slate-100 flex justify-center items-center h-full w-full" />
        </Container>
    ),
    args: {
        children: 'Fixed Container example',
    },
}