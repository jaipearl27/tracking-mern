import { UserState } from '@/types/Impact/user'
import React from 'react'
import "./styles.scss"

function StatusBadge({variant}:{variant:UserState}) {

    return (
        <div className={`status-badge ${variant}`}>
            {variant}
        </div>
    )
}

export default StatusBadge
