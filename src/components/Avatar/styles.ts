import styled from 'styled-components';
import colors from '../../styles/colors';

export const AvatarContainer = styled.div`
    .avatarImg {
        box-sizing: initial;
        width: 3rem;
        height: 3rem;
        border-radius: 8px;
    }

    .withBorder {
        width: calc(3rem + 12px);
        height: calc(3rem + 12px);
        border-radius: 8px;
        border: 4px solid ${colors.gray700};
        outline: 2px solid ${colors.green200};
    }
`;
