import { atom } from "jotai";

import { getStoredToken, readUserFromToken } from "../../../shared/utils/token";

export const tokenAtom = atom(getStoredToken());
export const userAtom = atom(readUserFromToken(getStoredToken()));
