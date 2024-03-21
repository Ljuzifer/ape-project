import React from "react";
import { ReactComponent as Cross } from "../../icons/cross.svg";
import { BannerThumb, Icon, ThumbContent } from "./Banner.styled";

function Banner() {
    return (
        <BannerThumb>
            <ThumbContent>
                <Icon>
                    <Cross />
                </Icon>
                <p>Destroy stereotypes </p>
                <Icon>
                    <Cross />
                </Icon>
                <p>HAVE NO LIMITS</p>
                <Icon>
                    <Cross />
                </Icon>
                <p>Break rules</p>
                <Icon>
                    <Cross />
                </Icon>
            </ThumbContent>
        </BannerThumb>
    );
}

export default Banner;
