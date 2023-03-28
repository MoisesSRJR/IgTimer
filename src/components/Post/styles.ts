import styled from 'styled-components';
import colors from '../../styles/colors';

export const MainContainer = styled.article`
    background-color: ${colors.gray700};
    border-radius: 8px;
    padding: 2.5rem;
    margin-bottom: 2rem;

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .author {
            display: flex;
            align-items: center;
            gap: 1rem;

            img {
                box-sizing: initial;
                width: calc(3rem + 12px);
                height: calc(3rem + 12px);
                border-radius: 8px;
                border: 4px solid ${colors.gray700};
                outline: 2px solid ${colors.green200};
            }

            .authorInfo {
                display: flex;
                flex-direction: column;

                strong {
                    color: ${colors.gray200};
                    line-height: 1.6;
                }

                span {
                    color: ${colors.gray500};
                    line-height: 1.6;
                    font-size: 0.875rem;
                }
            }
        }

        time {
            font-size: 0.875rem;
            color: ${colors.gray500};
        }
    }
`;

export const Content = styled.div`
    line-height: 1.6;
    color: ${colors.gray400};
    margin-top: 1.5rem;

    p {
        margin-top: 1rem;
    }

    a {
        font-weight: bold;
        color: ${colors.green200};
        text-decoration: none;

        :hover {
            color: ${colors.green100};
        }
    }
`;

export const CommentForm = styled.div`
    width: 100%;
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid ${colors.gray600};

    :focus-within footer {
        visibility: visible;
        max-height: none;
    }

    strong {
        line-height: 1.6;
        color: ${colors.gray200};
    }

    textarea {
        width: 96%;
        background-color: ${colors.gray800};
        border: 0;
        resize: none;
        height: 6rem;
        padding: 1rem;
        border-radius: 8px;
        color: ${colors.gray200};
        margin-top: 1rem;
        line-height: 1.4;
    }

    footer {
        visibility: hidden;
        max-height: 0;
    }

    button[type=submit] {
        padding: 1rem 1.5rem;
        margin-top: 1rem;
        border-radius: 8px;
        border: 0;
        background-color: ${colors.green200};
        color: ${colors.gray100};
        font-weight: bold;
        cursor: pointer;

        :hover {
            background-color: ${colors.green100};
        }
    }
`;

export const CommentList = styled.div`
    margin-top: 2rem;
`;
