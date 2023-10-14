import { OverviewDataType } from "@/app/data";
import { cn } from "@/utils/cn";
import React from "react";

type Props = {};

export default function OverviewCard(props: OverviewDataType) {
  return (
    <div
      className={cn(
        "  flex h-[160px] w-[260px] flex-col  justify-around overflow-hidden  rounded bg-light-grayish-blue-card-bg dark:bg-dark-desaturated-blue-card-bg  ",
      )}
    ></div>
  );
}
