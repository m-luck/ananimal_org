import selectors from "./selectors/selectors"

export const colors = {
    orange: '#fb9a37',
    blue: '#98cbcb',
    pink: '#FFcbcb',
    green: '#669934',
    nightOrange: '#ffcb99',
    nightBlue: '#336667',
    softWhite: '#F6F6F6',
    brightBlack: '#2E2E2E'
}

export const API_SUBMISSION_URL = "https://ananimal-9e22.restdb.io/rest/mailinglist"
export const API_SUBMISSION_BACKUP_URL = "http://overflowstorage-0ba2.restdb.io/rest/submissionBackups"

// Redux Form Keys
export const SLIDERS_FORM_KEY = 'SLIDERS_FORM'

// Sliders
export const DEFAULT_MIN = 0
export const DEFAULT_MIN_PLUS = 4
export const DEFAULT_MID = 16
export const DEFAULT_MAX_MINUS = 30
export const DEFAULT_MAX = 32

export const explanations = {
    ls: {
        mission: "Provide positive housing and life experiences that only a certain mindset can offer.",
        description: "Create a safe and unbeatable environment for humans to create memories, whether it be rent, residency purchase, state-of-the-art venues, or vacation spaces, including a seamless consideration toward care, access, and transaction. (Read: The UChicago theory of property.) Timescale: ~1 to ~10 years."
    },
    aavg: {
        mission: "Make good corn better => Extend to blissful food experiences (w/ LS).",
        description: "Funnel hard science, intelligent parallelized hardware, and computational rigor to generate unbeatable rates of delicious and abundant food for all, over a timespan of both ~5 and ~1000 years. We're hiring our first farmhand! PhD suggested."
    },
    amax: {
        mission: "Maximize witness-time to the self-defined beauty of life.",
        description: "Engage in a time-sensitive, 24/7 automated assembly loop of open hard sciences (neuroscience, computer science, physics, biology), realistic thought (law, politics), and self-sustaining practices to maximize the ability for memories and life experiences to preserve and extend much beyond the gradual or abrupt decay which usually befalls them. Timescale: ~10 to ~1mil years."
    },
    imm: {
        mission: "Make cool, expansive, unnervingly immersive, and beautiful worlds in-game or in-story.",
        description: "Using rigorous neuroscience, biology, behavioral economics, and computer simulations, generate read-and-write (or read-only) experiences that offer a safe space for breadth of imaginative experience."
    },
    lax: {
        mission: "-",
        description: "Generate thoughtful, evocative and elegant art work that can be displayed on a moving body, as well as heavy/delicate pieces that can reside in lifespaces. (To be randomly sold in bidding model, sometimes no-profit.)"
    },
    amin: {
        mission: "Minimize the amount of unproductive net suffering that manifests as homelessness and mental hardship.",
        description: "Using rigorous neuroscience, biology, behavioral economics, and computer simulations, inject strategic experiences and movements into the organic structure of society to aggressively net lift those at bedrock levels of psychological and socioeconomic struggle above a concrete, predefined baseline of opportunity. Timeline ~10 to ~50 years."
    },
    uxu: {
        mission: "Fast profitable merchandise to fund ANML ventures.",
        description: "High volume, fun and popular T-Shirts that sustain as a business to neutrally capitalize on a common need for identity and entertainment."
    },
    blnc: {
        mission: "The most significant consulting firm for hardworking, early-generation Technologists.",
        description: ""
    },
}
