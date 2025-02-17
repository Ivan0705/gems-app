import { Gems } from "@/entities/gems";
import { Page } from "@/shared/ui/Page";
import * as React from "react";

export const AboutGemsPage = () => {
  return (
    <Page>
      <div data-testid="about_gems_page">
        <Gems />
      </div>
    </Page>
  );
};
