import React from 'react';

import {Button, Image} from "@chakra-ui/react";

import { signIn } from "next-auth/react";

import type {AuthProviderButton} from "@/types/AuthProviderButton";

interface Props {
    provider: AuthProviderButton
}

const AuthProviderButton: React.FC<Props> = ({ provider }) => {
    return (
        <Button
            leftIcon={
                <Image
                    src={provider.imageSrc}
                    alt={provider.provider}
                    boxSize={'24px'}
                />
            }
            onClick={() => signIn(provider.provider)}
            w={'100%'}
            justifyContent={'flex-start'}
            variant={'outline'}
        >
            {provider.title}
        </Button>
    );
};

export default AuthProviderButton;
