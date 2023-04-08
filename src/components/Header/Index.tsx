import { HeaderContainer } from './styles'
import igniteLogoImg from '../../assets/ignite-logo.svg'

export function Header () {
    return (
        <HeaderContainer>
            <img src={igniteLogoImg}
                alt='logotipo ignite'
                data-testid="logo"/>
        </HeaderContainer>
    )
}
