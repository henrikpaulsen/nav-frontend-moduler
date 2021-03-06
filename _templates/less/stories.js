import React from 'react';
import { storiesOf } from '@storybook/react';
import { LESSDokumentasjon } from './../../dokumentasjon';
import readme from './README.md';
import pkg from './package.json';
import './src/<%name.indexfile%>.less';

storiesOf('<%name.capitalize%>', module)
    .addWithSections('Default', () => (
        <div className="<%name.cssname%>">
            <p>Your markup here</p>
        </div>
    ), LESSDokumentasjon(pkg, readme));
