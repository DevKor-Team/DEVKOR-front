import { PositionEnum } from "./position.enum";
import { ProjectEnum } from "./project.enum";

export interface Inputs {
    position: PositionEnum;
    projects: ProjectEnum;
    tags?: string[];
    description: string;
    name: string;
    birthday?: Date;
    major?: string;
    studentNo?: string;
    github?: string;
    mbti?: string;
    instagram?: string;
    hobby?: string;
    blog?: string;
}
