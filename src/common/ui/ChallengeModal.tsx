import { Box, Card, CardContent, Modal, styled } from "@mui/material";
import { forwardRef, PropsWithChildren, Ref, useImperativeHandle, useState } from "react";

const StyledBox = styled(Box)({
  position: "absolute",
  top: "10%",
  bottom: "10%",
  left: "20%",
  right: "20%",
  overflow: "scroll",
  display: "block",
});

export type ChallengeModalRefProps = {
  open: () => void;
  close: () => void;
};

type ChallengeModalProps = {
  onClose?: () => void;
};

export const ChallengeModal = forwardRef(
  ({ children, onClose }: PropsWithChildren<ChallengeModalProps>, ref: Ref<ChallengeModalRefProps>) => {
    const [isOpen, setIsOpen] = useState(false);

    useImperativeHandle(
      ref,
      () => ({
        open: () => {
          setIsOpen(true);
        },
        close: () => {
          setIsOpen(false);
        },
      }),
      []
    );

    const closeModal = () => {
      setIsOpen(false);
      onClose?.();
    };

    return (
      <Modal open={isOpen} onClose={closeModal}>
        <StyledBox>
          <Card>
            <CardContent>{children}</CardContent>
          </Card>
        </StyledBox>
      </Modal>
    );
  }
);
