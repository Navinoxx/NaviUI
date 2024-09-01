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
        <Box className="flex flex-col items-center space-y-5">
            <ButtonGroup {...args} variant="solid">
                <Button>Upload</Button>
                <Button>Drift</Button>
                <Button>View</Button>
            </ButtonGroup>
            <ButtonGroup {...args} variant="outlined">
                <Button>Upload</Button>
                <Button>Drift</Button>
                <Button>View</Button>
            </ButtonGroup>
            <ButtonGroup {...args} variant="ghost">
                <Button>Upload</Button>
                <Button>Drift</Button>
                <Button>View</Button>
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

export const SizeAndColor = {
    args: {
        variant: 'outlined',
        rounded: true
    },
    render: (args) => (
        <Box className="flex flex-col items-center space-y-5">
            <ButtonGroup {...args} size="sm">
                <Button>Upload</Button>
                <Button>Drift</Button>
                <Button>View</Button>
            </ButtonGroup>
            <ButtonGroup {...args} color="green">
                <Button>Upload</Button>
                <Button>Drift</Button>
                <Button>View</Button>
            </ButtonGroup>
            <ButtonGroup {...args} size="lg" color="red">
                <Button>Upload</Button>
                <Button>Drift</Button>
                <Button>View</Button>
            </ButtonGroup>  
        </Box>
    )
}

export const VerticalGroup = {
    args: {
        direction: 'column',
        rounded: true,
    },
    render: (args) => (
        <Box className="flex items-center space-x-5">
            <ButtonGroup {...args} variant="solid">
                <Button>Upload</Button>
                <Button>Drift</Button>
                <Button>View</Button>
            </ButtonGroup>
            <ButtonGroup {...args} variant="outlined">
                <Button>Upload</Button>
                <Button>Drift</Button>
                <Button>View</Button>
            </ButtonGroup>
            <ButtonGroup {...args} variant="ghost">
                <Button>Upload</Button>
                <Button>Drift</Button>
                <Button>View</Button>
            </ButtonGroup>  
        </Box>
    )
}