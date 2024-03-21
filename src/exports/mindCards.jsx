import React from "react";

const mindCards = [
    {
        type: "card",
        title: "YAPE DROP",
        comment:
            "All owners of APE NFTs and all future collections will receive a percentage of sales based on the number of NFTs they own",
    },
    {
        type: "card",
        title: "NEW COLLECTION",
        comment:
            "Launch of the 2nd YACHT Collection Releasing the first version of the Ape Slam Game",
    },
    {
        type: "card",
        title: "TOKEN",
        comment:
            "Launch your own token, the proceeds of which will go to a global fund to LAUNCH YACHT CLUB AND PROMOTE it",
    },
    {
        type: "link",
        // title: `LEARN MORE IN MIND MAP`,
        title: () => (
            <>
                LEARN <br />
                MORE <br />
                IN MIND MAP
            </>
        ),
        href: "https://coinmarketcap.com/",
    },
];

export default mindCards;
