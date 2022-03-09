import { Box, Skeleton } from "@mantine/core";
import { FunctionComponent } from "react";

const OverviewSkeleton: FunctionComponent = () => {
    return (
        <Box sx={{ padding: "20px" }}>
            <Skeleton height={40} mb="sm" />
            <Skeleton height={15} mb="sm" />
            <Skeleton height={15} mb="sm" />
            <Skeleton height={15} mb="sm" />
            <Skeleton height={40} mb="sm" />
            <Skeleton height={200} mb="sm" />
            <Skeleton height={15} mb="sm" />
            <Skeleton height={80} mb="sm" />
            <Skeleton height={15} mb="sm" />
            <Skeleton height={250} mb="sm" />
        </Box>
    );
};

export default OverviewSkeleton;
