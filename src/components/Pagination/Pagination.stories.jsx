import { useState } from "react";
import { Stack } from "../Layout";
import { Typography } from "../Typography";
import { Pagination } from "./Pagination";

export default {
    title: "Components/Pagination",
    component: Pagination,
    parameters: {
        layout: "centered",
    },
};

export const BasicPagination = {
    args: {},
    render: (args) => (
        <Stack spacing={4}>
            <Pagination {...args} count={10}/>
            <Pagination {...args} count={10} boundaryCount={2}/>
            <Pagination {...args} count={20} color="blue"/>
            <Pagination {...args} count={10} disabled/>
        </Stack>
    )
};

export const OutlinedPagination = {
    args: {
        count: 10,
        variant: "outlined"
    },
    render: (args) => (
        <Stack spacing={4}>
            <Pagination {...args} />
            <Pagination {...args} color="blue"/>
            <Pagination {...args} color="red"/>
            <Pagination {...args} disabled/>
        </Stack>
    )
}

export const RoundedPagination = {
    args: {
        count: 10,
        shape: "rounded",
    },
    render: (args) => (
        <Stack spacing={4}>
            <Pagination {...args} />
            <Pagination {...args} variant="outlined"/>
        </Stack>
    )
}

export const SizePagination = {
    args: {
        count: 10,
    },
    render: (args) => (
        <Stack spacing={4}>
            <Pagination {...args} size="sm"/>
            <Pagination {...args} />
            <Pagination {...args} size="lg"/>
        </Stack>
    )
}

export const Buttons = {
    args: {
        count: 10,
    },
    render: (args) => (
        <Stack spacing={4}>
            <Pagination {...args} showFirstButton showLastButton />
            <Pagination {...args} hidePrevButton hideNextButton />
        </Stack>
    )
}

export const PaginationRanges = {
    args: {
        count: 11,
        defaultPage: 6
    },
    render: (args) => (
        <Stack spacing={4}>
            <Pagination {...args} siblingCount={0} />
            <Pagination {...args} />
            <Pagination {...args} siblingCount={0} boundaryCount={2} />
            <Pagination {...args} boundaryCount={2} />
        </Stack>
    )
}

export const ControlledPagination = {
    args: {
        count: 10,
    },
    render: (args) => {
        const [page, setPage] = useState(1);
        const handleChange = (event, value) => {
            setPage(value);
        };

        return (
            <Stack spacing={2}>
                <Typography variant="body1">Page: {page}</Typography>
                <Pagination {...args} page={page} onChange={handleChange} />
            </Stack>
        );
    }
}