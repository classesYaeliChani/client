import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';

export default function ListItem(props) {
    return <div>
        <Checkbox color="secondary" />
<span>{props.value}</span>
    </div>
}