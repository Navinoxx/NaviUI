import { useState } from "react";
import { Accordion } from "./Accordion";
import { ArrowDown } from "@/icons";

export default {
    title: "Components/Accordion",
    component: Accordion,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    render: (args) => {
        const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi tempore hic animi dolorem sunt ad rerum magnam! Nobis cum, cumque minus sapiente harum laborum illum, quae maiores delectus inventore officiis?"

        return (
            <div className="max-w-2xl">
                {[...Array(3)].map((_, index) => (
                    <Accordion key={index} {...args}>
                        <Accordion.Header>{`Title ${index + 1}`}</Accordion.Header>
                        <Accordion.Body>{lorem}</Accordion.Body>
                    </Accordion>
                ))}
            </div>
        )
    }
};

export const Default = {
    args: {
        variant: "solid",
    },
}

export const Outlined = {
    args: {
        variant: "outlined",
    },
}

export const Ghost = {
    args: {
        variant: "ghost",
    },
}

export const IconFirst = {
    args: {},
    render: (args) => {
        const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi tempore hic animi dolorem sunt ad rerum magnam! Nobis cum, cumque minus sapiente harum laborum illum, quae maiores delectus inventore officiis?"

        return (
            <div className="max-w-2xl">
                {[...Array(3)].map((_, index) => (
                    <Accordion key={index} {...args}>
                        <Accordion.Header iconFirst>{`Title ${index + 1}`}</Accordion.Header>
                        <Accordion.Body>{lorem}</Accordion.Body>
                    </Accordion>
                ))}
            </div>
        )
    }
}

export const CustomIcon = {
    args: {
        icon: <ArrowDown />,
    },
}

export const ExpandedByDefault = {
    args: {
        defaultExpanded: true,
    },
}

export const ControlledAccordion = {
    args: {},
    render: (args) => {
        const [expanded, setExpanded] = useState(false);

        const handleChange = (panel) => (event, isExpanded) => {
            setExpanded(isExpanded ? panel : false);
        };

        const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi tempore hic animi dolorem sunt ad rerum magnam! Nobis cum, cumque minus sapiente harum laborum illum, quae maiores delectus inventore officiis?"

        return (
            <div className="max-w-2xl">
                <Accordion {...args} expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
                    <Accordion.Header>Title 1</Accordion.Header>
                    <Accordion.Body>{lorem}</Accordion.Body>
                </Accordion>
                <Accordion {...args} expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
                    <Accordion.Header>Title 2</Accordion.Header>
                    <Accordion.Body>{lorem}</Accordion.Body>
                </Accordion>
                <Accordion {...args} expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
                    <Accordion.Header>Title 3</Accordion.Header>
                    <Accordion.Body>{lorem}</Accordion.Body>
                </Accordion>
            </div>
    
        )
    }
}