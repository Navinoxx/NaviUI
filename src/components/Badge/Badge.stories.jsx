import { useState } from "react";
import { Mail } from "@/icons/mail";
import { Badge } from "./Badge";
import { ButtonGroup } from "../ButtonGroup";
import { Button } from "../Button";

export default {
    title: "Components/Badge",
    component: Badge,
    parameters: {
        layout: "centered",
    },
    args: {
        children: <Mail fontSize="large"/>,
    },
};      

export const Basic = {
    args: {
        content: 5,
    },
}

export const Color = {
    args: {
        content: 5,
        color: ["blue", "red", "green", "indigo", "purple", "pink", "black"],
        placement: "topRight",
    },
    render: (args) => (
        <div className="flex gap-5">
            {args.color.map(color => <Badge {...args} key={color} color={color} />)}
        </div>
    ),
}

export const Placement = {
    args: {
        content: 5,
        color: "red",
        placement: ["topLeft", "topRight", "bottomLeft", "bottomRight"],
    },
    render: (args) => (
        <div className="flex gap-5">
            {args.placement.map(placement => <Badge {...args} key={placement} placement={placement} />)}
        </div>
    ),
}

export const Dot = {
    args: {
        color: ["blue", "red", "green", "indigo", "purple", "pink", "black"],
        placement: "topRight",
        dot: true,
    },
    render: (args) => (
        <div className="flex gap-5">
            {args.color.map(color => <Badge {...args} key={color} color={color} />)}
        </div>
    ),
}

export const MaximumValue = {
    args: {
        content: 1000,
        max: 99,
        color: "red",
        placement: "topRight",
    },
}

export const BadgeVisibility = {
    args: {
        color: "red",
        dot: true,
        placement: "topRight",
    },
    render: (args) => {
        const [visible, setVisible] = useState(true);
        
        return (
            <div className="flex gap-5">
                <Badge {...args} invisible={!visible} />
                <button onClick={() => setVisible(!visible)}>Toggle</button>
            </div>
        )
    }
}

export const ShowZero = {
    args: {
        color: "red",
        max: 9,
        placement: "topRight",
    },
    render: (args) => {
        const [count, setCount] = useState(0);
        const [zero, setZero] = useState(0);
        
        return (
            <>
                <div className="flex gap-5 mb-5">
                    <Badge {...args} content={count}/>
                    <ButtonGroup rounded>
                        <Button onClick={() => setCount(Math.max(0, count - 1))} variant="outline" size="sm">-</Button>
                        <Button onClick={() => setCount(count + 1)} variant="outline" size="sm">+</Button>
                    </ButtonGroup>
                </div>
                <div className="flex gap-5">
                    <Badge {...args} content={zero} showZero/>
                    <ButtonGroup rounded>
                        <Button onClick={() => setZero(Math.max(0, zero - 1))} variant="outline" size="sm">-</Button>
                        <Button onClick={() => setZero(zero + 1)} variant="outline" size="sm">+</Button>
                    </ButtonGroup>
                </div>
            </>
        )
    }
}