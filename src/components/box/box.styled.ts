import styled
    from "styled-components";
import { alertColor, AlertColorType } from "../../ui/color/alert";
import { BoxProps, ColorBoxProps } from "./type";

const box = styled('div') <BoxProps>`
    position: ${({ position }) => position ? position : 'relative'};
    display: ${({ display }) => display ? display : 'block'};
    ${({ display, align, justify, flexDirection, space, wrap, flex }) => display === 'flex' && `
        align-items: ${align ? align : 'initial'}};
        justify-content: ${justify ? justify : 'initial'}};
        flex-direction: ${flexDirection ? flexDirection : 'row'};
        flex-wrap: ${wrap || 'initial'};
        gap: ${space}rem;
        flex: ${flex || 'initial'};
        `
    }

    ${({ margin }) => margin && `margin: ${margin}px;`}
    ${({ mx }) => mx && `margin-left: ${mx}px; margin-right: ${mx}px;`}
    ${({ my }) => my && `margin-top: ${my}px; margin-bottom: ${my}px;`}
    ${({ mt }) => mt && `margin-top: ${mt}px;`}
    ${({ mr }) => mr && `margin-right: ${mr}px;`}
    ${({ mb }) => mb && `margin-bottom: ${mb}px;`}
    ${({ ml }) => ml && `margin-left: ${ml}px;`}

    ${({ padding }) => padding && `padding: ${padding}px;`}
    ${({ px }) => px && `padding-left: ${px}px; padding-right: ${px}px;`}
    ${({ py }) => py && `padding-top: ${py}px; padding-bottom: ${py}px;`}
    ${({ pt }) => pt && `padding-top: ${pt}px;`}
    ${({ pr }) => pr && `padding-right: ${pr}px;`}
    ${({ pb }) => pb && `padding-bottom: ${pb}px;`}
    ${({ pl }) => pl && `padding-left: ${pl}px;`}
 `

export const StyledColorBox = styled(box) <ColorBoxProps>`
    z-index: 1;

    &:after {
        position: absolute;
        content: '';
        background: ${({ theme, color }) => color ? alertColor.hasOwnProperty(color) ? alertColor[color as AlertColorType] : color : theme.primaryColor.color};
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        opacity: ${({ transparency }) => transparency ? `0.${transparency}` : 1};
        z-index: -1;
    }
 `
export default box;