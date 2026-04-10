import React from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "o-arc": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}
