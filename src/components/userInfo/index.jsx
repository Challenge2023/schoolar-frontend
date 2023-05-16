import { RegularText, RegularTextCustom } from "../../styles/typograph";
import { UserImageContainer, UserInfoContainer, UserTitleContainer } from "./style";

export function UserInfo() {
    return (
        <UserInfoContainer>
            <UserImageContainer>

            </UserImageContainer>

            <UserTitleContainer>
                <RegularTextCustom color="base-title" weight="800" fontSize="text-m">
                    Lucas Amadeu
                </RegularTextCustom>
                <RegularText color="base-text-lighter" weight="400" fontSize="text-s">
                    professor
                </RegularText>
            </UserTitleContainer>
        </UserInfoContainer>
    )
}