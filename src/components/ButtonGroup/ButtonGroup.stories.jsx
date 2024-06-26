import { ButtonGroup } from "./ButtonGroup";
import { Button } from "../Button"; 
import { Box } from "../Layout";

export default {
    title: 'Components/ButtonGroup',
    component: ButtonGroup,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',   
    },
    render: (args) => (
        <Box className="flex items-center space-x-5">
            <ButtonGroup {...args}>
                <Button variant="solid">Upload</Button>
                <Button variant="solid">Drift</Button>
                <Button variant="solid">View</Button>
            </ButtonGroup>
            <ButtonGroup {...args}>
                <Button variant="outline">Upload</Button>
                <Button variant="outline">Drift</Button>
                <Button variant="outline">View</Button>
            </ButtonGroup>
            <ButtonGroup {...args}>
                <Button variant="ghost">Upload</Button>
                <Button variant="ghost">Drift</Button>
                <Button variant="ghost">View</Button>
            </ButtonGroup>  
        </Box>
    )
};

export const Basic = {}

export const Rounded = {
    args: {
        rounded: true
    }
}

export const WithSpace = {
    args: {
        space: true,
        rounded: true
    }
}

export const DirectionColumn = {
    args: {
        direction: 'column',
        rounded: true,
        divide: true
    }
}