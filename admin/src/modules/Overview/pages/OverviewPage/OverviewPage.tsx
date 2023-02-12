import React from 'react'
import {BaseContainer} from 'common/components/BaseContainer/BaseContainer'
import { Typography } from '@mui/material'

export const OverviewPage: React.FC = () => {
    return (
        <BaseContainer>
            <Typography variant="h2" color="text.primary" textTransform="uppercase" fontWeight="bold">
				Overview
            </Typography>
        </BaseContainer>
    )
}