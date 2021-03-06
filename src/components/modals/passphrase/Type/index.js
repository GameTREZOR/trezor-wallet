/* @flow */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import icons from 'config/icons';
import colors from 'config/colors';

import Icon from 'components/Icon';
import { H3 } from 'components/Heading';
import P from 'components/Paragraph';

import type { TrezorDevice } from 'flowtype';

type Props = {
    device: TrezorDevice;
}

const Wrapper = styled.div`
    width: 360px;
    padding: 24px 48px;
`;

const Header = styled.div``;

const PassphraseType = (props: Props) => (
    <Wrapper>
        <Header>
            <Icon icon={icons.T1} size={60} color={colors.TEXT_SECONDARY} />
            <H3>Complete the action on { props.device.label } device</H3>
            <P isSmaller>If you enter a wrong passphrase, you will not unlock the desired hidden wallet.</P>
        </Header>
    </Wrapper>
);

PassphraseType.propTypes = {
    device: PropTypes.object.isRequired,
};

export default PassphraseType;