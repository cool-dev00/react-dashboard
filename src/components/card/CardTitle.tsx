import { MoreVert } from "@mui/icons-material";
import { FC, ReactNode } from "react";
import { IconButton } from "../../ui";
import { CardHeaderTitle } from "./card.styled";
import styled from "styled-components";

interface Props {
  title: string;
  component?: ReactNode;
}

const TextWrapper = styled("span")`
  flex: 1 1 auto;
`;

const CardTitle: FC<Props> = (props) => {
  return (
    <CardHeaderTitle>
      <TextWrapper className="card-header-title">
        <span>{props.title}</span>
      </TextWrapper>
      <span style={{ position: "relative" }}>
        <IconButton varient="text">
          <MoreVert />
        </IconButton>
        {props.component && (
          <div className="current-action-dropdown">{props.component}</div>
        )}
      </span>
    </CardHeaderTitle>
  );
};

export default CardTitle;