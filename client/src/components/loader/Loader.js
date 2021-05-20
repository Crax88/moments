import React from "react";
import { Portal, Spinner, Pane } from "evergreen-ui";

const Loader = () => {
  return (
    <Portal>
      <Pane
        background="rgba(0,0,0,0.1)"
        position="fixed"
        display="flex"
        align
        top={0}
        right={0}
        bottom={0}
        left={0}
        width="100%"
        height="100%"
      >
        <Pane
          position="absolute"
          width="auto"
          height="auto"
          top="50%"
          left="50%"
          transform="translate(-50%)"
        >
          <Spinner size={70} />
        </Pane>
      </Pane>
    </Portal>
  );
};

export default Loader;
