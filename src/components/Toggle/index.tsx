import React from 'react';
import Switch from 'react-switch';

import {
    Container,
    ToggleLabel 
} from './styles';

const Toggle: React.FC = () => (
    <Container>
        <ToggleLabel>Light</ToggleLabel>
        <Switch
            checked
            onChange={() => console.log('mudou')}
        />
        <ToggleLabel>Dark</ToggleLabel>
    </Container>
)

export default Toggle; 
