import React from 'react';
import {Text} from "@chakra-ui/react";
import useAuth from "@/hooks/useAuth";
import PageHeader from "@/components/Utilities/PageHeader";

const HomeHeader = () => {

    const { user } = useAuth();

    return (
        <PageHeader
            imageSrc={'/logo.png'}
            imageAlt={'Polyglot AI'}
            heading={
                <>
                    <Text
                        as='span'
                    >
                        Welcome to Polyglot
                    </Text>
                    <Text
                        as='span'
                        color={'brand.500'}
                    >
                        AI
                    </Text>
                    {
                        user && user.name && (
                            <Text
                                as='span'
                            >
                                , {user.name.split(' ')[0]}
                            </Text>
                        )
                    }

                </>
            }
            subheading={
                "Supercharge your learning with AI"
            }
        />
    );
};

export default HomeHeader;
