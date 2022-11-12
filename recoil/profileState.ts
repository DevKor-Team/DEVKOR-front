import { atom } from "recoil";
import { Inputs } from "../interface/inputs";
import { PositionEnum } from "../interface/position.enum";
import { ProjectEnum } from "../interface/project.enum";

export const profileRecoilState = atom<Inputs>({
    key: "profileState",
    default: {
        position: PositionEnum.Frontend,
        projects: ProjectEnum["Backend-Express"],
        description: "",
        name: "",
    },
});
