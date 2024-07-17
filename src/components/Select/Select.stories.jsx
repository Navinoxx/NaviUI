import { Select } from "./Select";

export default {
    title: "Components/Select",
    component: Select,
    parameters: {
        layout: "centered",
    },
};

export const Basic = {
    args: {
        label: "Select",
    },
    render: (args) => (
        <Select {...args} color="indigo">
            <Select.Option value="">None</Select.Option>
            <Select.Option value="1">Option 1</Select.Option>
            <Select.Option value="2">Option 2</Select.Option>
            <Select.Option value="3">Option 3</Select.Option>
        </Select>
    )
}

export const MultiSelect = {
    args: {
        label: "Select",
        multiple: true,
    },
    render: (args) => (
        <Select {...args} color="red">
            <Select.Option value="1">Option 1</Select.Option>
            <Select.Option value="2">Option 2</Select.Option>
            <Select.Option value="3">Option 3</Select.Option>
            <Select.Option value="4">Option 4</Select.Option>
            <Select.Option value="5">Option 5</Select.Option>
        </Select>
    )
}