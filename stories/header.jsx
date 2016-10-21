import React from "react";
import { storiesOf } from "@kadira/storybook";
import Header from "../lib/components/header";

storiesOf("Header", module)
  .add("simple", () => (
    <Header>Header</Header>
  ));
