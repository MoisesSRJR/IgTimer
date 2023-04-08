import { AvatarContainer } from './styles'

interface AvatarProps {
    image: string;
    hasBorder?: boolean;
}

export function Avatar ({ image, hasBorder }: AvatarProps) {
    const border = hasBorder !== false;

    return (
        <AvatarContainer>
            <img className={border ? 'withBorder' : 'avatarImg'} src={image} alt='Avatar Image' />
        </AvatarContainer>
    )
}
