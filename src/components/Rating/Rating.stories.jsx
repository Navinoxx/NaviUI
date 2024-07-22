import { useState } from "react";
import { Rating } from "./Rating";
import { Typography } from "../Typography";

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

export const RatingPrecision = {
    args: {},
    render: (args) => (
        <div className="space-y-2">
            <Rating {...args} name="half-rating" defaultValue={2} precision={0.5}/>
            <Rating {...args} name="half-rating-read" defaultValue={2} precision={0.5} readOnly/>
        </div>
    )
};