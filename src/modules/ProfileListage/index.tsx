import ProfileCard from "./ProfileCard"
import * as S from "./styles"

const ProfileListage = () => {
    return (
        <>
            <S.ListContainer>
                <S.List className="container">
                    <li>
                        <ProfileCard />
                    </li>
                    <li>
                        <ProfileCard />
                    </li>
                    <li>
                        <ProfileCard />
                    </li>
                    <li>
                        <ProfileCard />
                    </li>
                    <li>
                        <ProfileCard />
                    </li>
                    <li>
                        <ProfileCard />
                    </li>
                </S.List>
            </S.ListContainer>
        </>
    )
}

export default ProfileListage