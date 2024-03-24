import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage, Formik } from "formik";
import { formSchema } from "../../schema/formSchema";
import { ReactComponent as Discord } from "../../icons/discord.svg";
import { ReactComponent as MetaMask } from "../../icons/metaMask.svg";
import { ReactComponent as Cross } from "../../icons/cross.svg";
import { Section } from "../../GlobalStyle.styled";
import { MintContainer, FormThumb, InputThumb } from "./AreYouIn.styled";
import { root } from "../../stylesheets/root";
import toast from "react-hot-toast";

function AreYouIn({ anchor }) {
    const onSendForm = (values, actions) => {
        const username = values.name.trim().substring(1);
        const wallet = values.wallet.trim();
        console.log({ username: username, "wallet address": wallet });

        toast.success(
            `Greetings, ${username}!!! Your credentials was sent successfuly! Welcome to the our world! :))`,
            {
                position: "bottom-right",
                duration: 4000,
                style: {
                    fontFamily: `${root.fonts.messina}`,
                    fontWeight: "400",
                    fontSize: "18px",
                    border: `2px solid ${root.colors.mainPinkColor}`,
                    background: `${root.colors.secondDarkColor}`,
                    color: `${root.colors.mainPinkColor}`,
                },
            }
        );
        actions.resetForm();
    };

    const initialValues = { name: "", wallet: "" };

    return (
        <>
            <Section id={anchor}>
                <MintContainer>
                    <h2>are you in?</h2>
                    <Cross />
                    <p>
                        Join the YACHT APE community to be one of the first to
                        receive our limited edition NFT
                    </p>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={formSchema}
                        onSubmit={onSendForm}>
                        {({ errors, touched }) => (
                            <FormThumb autoComplete='off'>
                                <label htmlFor='username'>
                                    <div>
                                        <Discord
                                            style={{
                                                fill: `${root.colors.discord}`,
                                            }}
                                        />
                                    </div>
                                    <InputThumb
                                        id='username'
                                        type='text'
                                        name='name'
                                        placeholder='@username'
                                        error={
                                            errors.name && touched.name
                                                ? "true"
                                                : null
                                        }
                                    />
                                    {errors.name && touched.name ? (
                                        <span />
                                    ) : null}
                                    <ErrorMessage
                                        name='name'
                                        component='span'
                                    />
                                </label>
                                <label htmlFor='wallet'>
                                    <div>
                                        <MetaMask />
                                    </div>
                                    <InputThumb
                                        id='wallet'
                                        type='text'
                                        name='wallet'
                                        placeholder='wallet address'
                                        error={
                                            errors.name && touched.name
                                                ? "true"
                                                : null
                                        }
                                    />
                                    {errors.name && touched.name ? (
                                        <span />
                                    ) : null}
                                    <ErrorMessage
                                        name='wallet'
                                        component='span'
                                    />
                                </label>
                                <button type='submit'>mint</button>
                            </FormThumb>
                        )}
                    </Formik>
                </MintContainer>
            </Section>
        </>
    );
}

export default AreYouIn;

AreYouIn.propTypes = {
    anchor: PropTypes.string.isRequired,
};
