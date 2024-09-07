import { useState } from "react";
import { Rating } from "./Rating";
import { Typography } from "../Typography";
import { Heart } from "@/icons";

export default {
    title: "Components/Rating",
    component: Rating,
    parameters: {
        layout: "centered",
    },
};

export const Basic = {
    args: {},
    render: (args) => {
        const [value, setValue] = useState(2);

        return (
            <div className="space-y-2">
                <Typography variant="body1">Controlled</Typography>
                <Rating
                    {...args}
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                />
                <Typography variant="body1">Read only</Typography>
                <Rating {...args} name="read-only" value={2} readOnly />
                <Typography variant="body1">Disabled</Typography>
                <Rating {...args} name="disabled" value={2} disabled />
                <Typography variant="body1">No rating given</Typography>
                <Rating {...args} name="no-value" value={null}/>
            </div>
        );
    }
};

export const HoverFeedback = {
    args: {},
    render: (args) => {
        const [value, setValue] = useState(2);
        const [hover, setHover] = useState(-1);

        const labels = {
            0.5: 'Useless',
            1: 'Useless+',
            1.5: 'Poor',
            2: 'Poor+',
            2.5: 'Ok',
            3: 'Ok+',
            3.5: 'Good',
            4: 'Good+',
            4.5: 'Excellent',
            5: 'Excellent+',
        };

        return (
            <div className="flex w-32">
                <Rating 
                    {...args} 
                    name="hover-feedback" 
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    onChangeActive={(event, newHover) => {
                        setHover(newHover);
                    }}
                />
                {value !== null && <span className="ml-5">{labels[hover !== -1 ? hover : value]}</span>}
            </div>
        )
    }
}

export const Customization = {
    args: {},
    render: (args) => (
        <div className="space-y-2">
            <Typography variant="body1">Custom icon and color</Typography>
            <Rating 
                {...args} 
                name="customized-color" 
                defaultValue={2} 
                icon={<Heart fontSize="medium"/>}
                iconColor="red"
            />
            <Typography variant="body1">10 stars</Typography>
            <Rating {...args} name="customized-10" defaultValue={2} max={10}/>
        </div>
    )
}