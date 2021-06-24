import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 40px 20px;
`

export const TransactionContainer = styled.section`
    margin-top: 64px;

    table {
        width: 100%;
        border-spacing: 0 8px;

        th {
            color: #969cb3;
            padding: 20px 32px;
            font-weight: 500;
            text-align: left;
            line-height: 24px;
        }

        td {
            padding: 20px 32px;
            border: 0;
            background: #fff;
            color: #969cb3;

            &.title {
                color: #363f5f;
            }

            &.payment {
                color: #12a454;
            }
        }

        td:first-child {
            border-radius: 8px 0 0 8px;
        }

        td:last-child {
            border-radius: 8px 0 0 8px;
        }
    }
`