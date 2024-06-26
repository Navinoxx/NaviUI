import { Accordion } from "./Accordion";

export default {
    title: "Components/Accordion",
    component: Accordion,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    render: (args) => (
        <>
            <Accordion {...args}>
                <Accordion.Header {...args}>Title 1</Accordion.Header>
                <Accordion.Body>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi tempore hic animi dolorem sunt ad rerum magnam! Nobis cum, cumque minus sapiente harum laborum illum, quae maiores delectus inventore officiis?</Accordion.Body>
            </Accordion>
            <Accordion {...args}>
                <Accordion.Header {...args}>Title 2</Accordion.Header>
                <Accordion.Body>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi tempore hic animi dolorem sunt ad rerum magnam! Nobis cum, cumque minus sapiente harum laborum illum, quae maiores delectus inventore officiis?</Accordion.Body>
            </Accordion>
            <Accordion {...args}>
                <Accordion.Header {...args}>Title 3</Accordion.Header>
                <Accordion.Body>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi tempore hic animi dolorem sunt ad rerum magnam! Nobis cum, cumque minus sapiente harum laborum illum, quae maiores delectus inventore officiis?</Accordion.Body>
            </Accordion>
        </>
    ), 
};

export const Default = {
    args: {
        variant: "solid",
    },
}

export const Outline = {
    args: {
        variant: "outline",
    },
}

export const Ghost = {
    args: {
        variant: "ghost",
    },
}

export const WithIcon = {
    args: {
        icon: true,
    },
}

export const IconFirst = {
    args: {
        icon: true,
        iconFirst: true,
    },
}