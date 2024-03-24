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
                <b>Destroy stereotypes </b>
                <Icon>
                    <Cross />
                </Icon>
                <b>HAVE NO LIMITS</b>
                <Icon>
                    <Cross />
                </Icon>
                <b>Break rules</b>
                <Icon>
                    <Cross />
                </Icon>
            </ThumbContent>
        </BannerThumb>
    );
}

export default Banner;
