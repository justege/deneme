import { Box } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"


export const LandingPage = () => {


    const {t} = useTranslation()

    

    return (
        <>
        <Box>
            Landingpage 
        </Box>
        <Box>
             {t("landingpage.cumle")}
        </Box>
        </>
    )
}

