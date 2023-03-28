import styled from 'styled-components';
import colors from '../../styles/colors';

export const CommentContainer = styled.div`
    margin-top: 1.5rem;
    display: flex;
    gap: 1rem;

    img {
        box-sizing: initial;
        width: 3rem;
        height: 3rem;
        border-radius: 8px;
    }
`;

export const CommentBox = styled.div`
    flex: 1;

    footer {
        margin-top: 1rem;

        button {
            background: transparent;
            border: 0;
            color: ${colors.gray400};
            border-radius: 4px;
            cursor: pointer;

            display: flex;
            align-items: center;

            svg {
                margin-right: 0.5rem;
            }

            span {
                padding: 0 0.25rem;
            }

            :hover {
                color: ${colors.green200};
            }
        }
    }
`;

export const Content = styled.div`
    background-color: ${colors.gray600};
    border-radius: 8px;
    padding: 1rem;

    header {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;

        button {
            background-color: transparent;
            border: 0;
            color: ${colors.gray400};
            line-height: 0;
            border-radius: 4px;
            cursor: pointer;

            :hover {
                color: ${colors.red};
            }
        }

        .authorAndTime {
            display: flex;
            flex-direction: column;

            strong {
                font-size: 0.875rem;
                line-height: 1.6;
            }

            time {
                font-size: 0.75rem;
                line-height: 1.6;
                color: ${colors.gray400};
            }
        }
    }

    p {
        margin-top: 1rem;
        color: ${colors.gray300};
    }
`;
