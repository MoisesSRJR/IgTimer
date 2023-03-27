import styled from 'styled-components';
import colors from '../../styles/colors';

export const SidebarContainer = styled.aside`
    background-color: ${colors.gray700};
    border-radius: 8px;
    overflow: hidden;

    .cover {
        width: 100%;
        height: 72px;
        object-fit: cover;
    }

    .profile {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: -2.5rem;

        img {
            box-sizing: initial;
            width: calc(3rem + 12px);
            height: calc(3rem + 12px);
            border-radius: 8px;
            border: 4px solid ${colors.gray700};
            outline: 2px solid ${colors.green200};
        }

        strong {
            margin-top: 1rem;
            color: ${colors.gray200};
            line-height: 1.6;
        }

        span {
            font-size: 0.875rem;
            color: ${colors.gray500};
            line-height: 1.6;
        }
    }

    footer {
        border-top: 1px solid ${colors.gray600};
        margin-top: 1.5rem;
        padding: 1.5rem 2rem 2rem;

        a {
            background-color: transparent;
            width: 100%;
            color: ${colors.green200};
            border: 1px solid ${colors.green200};
            border-radius: 8px;
            height: 50px;
            font-weight: bold;
            text-decoration: none;

            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;

            transition: color 0.1s, background-color 0.1s;

            :hover {
                background-color: ${colors.green200};
                color: ${colors.gray100};

            }
        }
    }
`;
