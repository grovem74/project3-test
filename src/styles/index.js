import styled from 'styled-components';
import MovieCard from '../components/MovieCard'

const teal = "#008080"
const lightGray = "rgba(0,0,0,.03)"
const darkGray = "rgba(0,0,0,.125)"

export const MovieWrapper = styled.article`
cursor: pointer;
text-align: center;
:hover {
    .card {
        border-color: ${teal}
    }
}
img {
    width: 85px;
}
.card{
    border-width: 2px;
}
.card-body {
    padding: .75rem;
}
.card-header {
    background: ${props => props.isSelected ? teal : lightGray};
    font-weight: 700;
    border-bottom-width: 2px;
}
`

