import * as Yup from "yup";

const REGEX_NAME = /^@[A-Za-z0-9_]+$/;
const REGEX_WALLET = /^0x|1x[a-zA-Z0-9]+$/;

export const formSchema = Yup.object().shape({
    name: Yup.string()
        .required("Username is required")
        .min(4, "Must be at last 4 characters")
        .matches(REGEX_NAME, "Wrong discord."),
    wallet: Yup.string()
        .required("Wallet address is required")
        .min(19, "It must be minimum 19 characters")
        .matches(REGEX_WALLET, "Wrong address."),
});
