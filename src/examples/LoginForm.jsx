import { Box, Button, Input, Stack, Typography } from "@/components";

export const LoginForm = () => {

    return (
        <Box className="border rounded-md p-10">
            <Stack spacing={10} alignItems="stretch" align="center">
                <Typography  variant="h3">
                    Login
                </Typography>
                <Input type="text" label="Username" placeholder="Enter your username" color="blue"/>
                <Input type="password" label="Password" placeholder="Enter your password" color="blue" />
                <Button type="submit" variant="solid" color="blue" rounded>
                    Sign in
                </Button>
            </Stack>
        </Box>
    );
};