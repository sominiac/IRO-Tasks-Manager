import { authLoginWaveLight, authPassWaveLight, authWavesLight, authLoginWavePurpleDark, authPassWavePurpleDark, authWavesPurpleDark } from "../../images/_index";
import { mainLogoLight } from "../../icons/_index";

const light = {
    name: "light-theme",
    colors: {
        mainColor: "#43A7AB",
        secondColor: "#70C3D6",
        mainTextColor: "#5F5E5E",
        secondTextColor: "#7D7C7C",
    },
    pages: {
        auth: {
            colors: {
                authBackgroundColor: "#FFFFFF",
                buttonTextColor: "#FFFFFF",
                welcomeBackgroundColor: "#E8F3FB",
                welcomeFilter: "none",
                titleFilter: "none",
                inputBorderColor: "#000000",
                buttonFilter: "none",
                secondButtonFilter: "none",
            },
            images: {
                backgroundWaves: authWavesLight,
                loginWave: authLoginWaveLight,
                passwordWave: authPassWaveLight,
            },
            icons: {
                logo: mainLogoLight,
            }
        }
    }
};

const purpleDark = {
    name: "purple-dark-theme",
    colors: {
        mainColor: "#AB7AE5",
        secondColor: "#C8A7EF",
        mainTextColor: "#FFFFFF",
        secondTextColor: "#E9E9E9",
    },
    pages: {
        auth: {
            colors: {
                authBackgroundColor: "linear-gradient(158.11deg, #5A36A8 28.4%, rgba(71, 29, 140, 0) 106.94%)",
                buttonTextColor: "#FFFFFF",
                welcomeBackgroundColor: "transparent",
                welcomeFilter: "drop-shadow(4px 4px 20px rgba(112, 195, 214, 0.36))",
                titleFilter: "10px 12px 17px rgba(133, 104, 169, 0.47)",
                inputBorderColor: "#FFFFFF",
                buttonFilter: "6px 6px 17px rgba(0, 0, 0, 0.25)",
                secondButtonFilter: "6px 6px 17px rgba(0, 0, 0, 0.07)",
            },
            images: {
                backgroundWaves: authWavesPurpleDark,
                loginWave: authLoginWavePurpleDark,
                passwordWave: authPassWavePurpleDark,
            },
            icons: {
                logo: mainLogoLight,
            }
        }
    }
};

export { light, purpleDark }