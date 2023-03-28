import { AvatarContainer } from './styles'

interface AvatarProps {
    image: string;
    hasBorder?: boolean;
}

export function Avatar ({ image, hasBorder }: AvatarProps) {
    const border = hasBorder !== false;

    return (
        <AvatarContainer>
            <img className={border ? 'withBorder' : 'avatar'} src={image} alt='' />
        </AvatarContainer>
    )
}
