import { Box, Button, Container, Heading, Text, VStack, Image, HStack, Link } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"
import { keyframes } from "@emotion/react"

const float = keyframes`
  0% { transform: translateY(0px) }
  50% { transform: translateY(-10px) }
  100% { transform: translateY(0px) }
`

const glow = keyframes`
  0% { box-shadow: 0 0 30px rgba(107, 70, 193, 0.2) }
  50% { box-shadow: 0 0 50px rgba(107, 70, 193, 0.4) }
  100% { box-shadow: 0 0 30px rgba(107, 70, 193, 0.2) }
`

export const LandingPage = () => {
    const { t } = useTranslation()
    const shopifyAppUrl = "https://apps.shopify.com/useranalytics-ai"

    return (
        <Box
            minH="100vh"
            bg="white"
            position="relative"
            overflow="hidden"
        >
            {/* Subtle Background Pattern */}
            <Box
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                opacity="0.03"
                backgroundImage="radial-gradient(#6B46C1 1px, transparent 1px)"
                backgroundSize="32px 32px"
            />

            <Container maxW="7xl" py={20}>
                <VStack gap={16}>
                    {/* Logo Section */}
                    <Link 
                        href={shopifyAppUrl}

                        _hover={{ transform: 'scale(1.02)' }}
                        transition="all 0.2s"
                    >
                        <Box
                            position="relative"
                            animation={`${float} 4s ease-in-out infinite`}
                        >
                            <Box
                                position="absolute"
                                inset="-10%"
                                borderRadius="full"
                                animation={`${glow} 3s ease-in-out infinite`}
                            />
                            <Image
                                src="/assets/Logo.png"
                                alt="UserAnalytics AI Logo"
                                w="180px"
                                h="180px"
                                filter="drop-shadow(0 0 20px rgba(107, 70, 193, 0.3))"
                            />
                        </Box>
                    </Link>

                    {/* Main Content */}
                    <VStack gap={12} maxW="800px">
                        <VStack gap={3}>
                            <Text
                                color="purple.600"
                                fontSize="sm"
                                fontWeight="semibold"
                                letterSpacing="0.2em"
                                textTransform="uppercase"
                            >
                                Big News from Our Team
                            </Text>
                            <Heading
                                fontSize={{ base: "3xl", md: "5xl" }}
                                fontWeight="bold"
                                textAlign="center"
                                color="gray.900"
                                lineHeight="1.2"
                            >
                                We're Joining Forces
                            </Heading>
                        </VStack>

                        <Box 
                            p={12}
                            borderRadius="2xl"
                            bg="purple.50"
                            textAlign="center"
                            boxShadow="lg"
                        >
                            <Text
                                fontSize={{ base: "xl", md: "2xl" }}
                                color="gray.700"
                                mb={8}
                                lineHeight="tall"
                            >
                             We're thrilled to announce that we've been acquired by
                            </Text>
                            <Heading
                                fontSize={{ base: "3xl", md: "5xl" }}
                                color="purple.600"
                                fontWeight="bold"
                                mb={8}
                            >
                                UserAnalytics AI
                            </Heading>
                            <Text
                                fontSize={{ base: "lg", md: "xl" }}
                                color="gray.600"
                                lineHeight="tall"
                                maxW="600px"
                                mx="auto"
                            >
                                This partnership represents more than just an acquisition – it's a union of shared visions, values, and our 
                                commitment to pushing the boundaries of what's possible in AI analytics.
                            </Text>
                        </Box>

                        <Box
                            p={8}
                            borderRadius="2xl"
                            bg="white"
                            boxShadow="lg"
                            textAlign="center"
                            maxW="600px"
                        >
                            <Text
                                fontSize={{ base: "md", md: "lg" }}
                                color="gray.600"
                                lineHeight="tall"
                                fontStyle="italic"
                            >
                                "We're incredibly excited about this new chapter. Together with UserAnalytics AI, 
                                we'll continue to serve our community while expanding our impact globally."
                            </Text>
                            <Text
                                mt={4}
                                color="purple.600"
                                fontWeight="semibold"
                            >
                                — The Team
                            </Text>
                        </Box>

                        {/* CTA Button */}
                        <Link 
                            href={shopifyAppUrl}
                            _hover={{ textDecoration: 'none' }}
                            w={{ base: "full", md: "auto" }}
                        >
                            <Button
                                size="lg"
                                height="64px"
                                px={12}
                                fontSize="lg"
                                color="white"
                                bg="purple.600"
                                _hover={{
                                    bg: "purple.700",
                                    transform: "translateY(-2px)",
                                    boxShadow: "xl"
                                }}
                                _active={{
                                    bg: "purple.800",
                                    transform: "translateY(0)"
                                }}
                                transition="all 0.2s"
                                w="full"
                            >
                                Visit Us on Shopify
                            </Button>
                        </Link>
                    </VStack>
                </VStack>
            </Container>
        </Box>
    )
}
