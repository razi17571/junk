/** @format */
"use client";

import { FollwersCard } from "@/components/FollwersCard";
import Header from "@/components/Header";
import { data } from "./data";
import OverviewCard from "@/components/OverviewCard";

export default function Home() {
  return (
    <div>
      {/* top background */}
      <Background />
      <main className="  mx-auto  min-h-screen w-full  max-w-7xl  px-4 pb-4 pt-8  md:px-8  ">
        <Header className="mb-10" />
        {/* follwers */}
        <section className="gap mb-12 grid  grid-cols-1  place-items-center justify-center gap-4  transition-all md:grid-cols-2  md:gap-y-10  xl:grid-cols-4   ">
          {data.map((d, i) => (
            <FollwersCard
              key={i}
              icon={d.icon}
              color={d.color}
              username={d.username}
              followers={d.followers}
              subscribers={d.subscribers}
              todaySubscribers={d.todaySubscribers}
              todayFollowers={d.todayFollowers}
              socialMediaName={d.socialMediaName}
            />
          ))}
        </section>

        {/* Overview Today  */}
        <section>
          <section className="gap mb-12 grid  grid-cols-1  place-items-center gap-4  transition-all md:grid-cols-2  md:gap-y-10  xl:grid-cols-4 ">
            <h2 className="mb-8 text-2xl font-semibold text-dark-grayish-blue-text dark:text-white ">
              Overview - Today{" "}
            </h2>
          </section>
          <div className="gap mb-12 grid  grid-cols-1  place-items-center justify-center gap-4  transition-all md:grid-cols-2  md:gap-y-10  xl:grid-cols-4  ">
            <OverviewCard />
          </div>
        </section>
      </main>
    </div>
  );
}

function Background() {
  return (
    <div className="fixed left-0  top-0 -z-50  min-h-screen w-full  bg-white dark:bg-very-dark-blue-bg ">
      <section className="h-[250px]   bg-very-pale-blue-top-bg-pattern dark:bg-very-dark-blue-top-bg-pattern " />
      <section className=" h-full" />
    </div>
  );
}
