"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import {
  Home,
  Briefcase,
  MessageCircle,
  Bell,
  Menu,
} from "lucide-react";

import ExpandableBottomSheet from "./ExpandableBottomSheet";

const tabs = [
  {
    href: "/",
    label: "Home",
    icon: Home,
  },
  {
    href: "/jobs",
    label: "Jobs",
    icon: Briefcase,
  },
  {
    href: "/messages",
    label: "Chat",
    icon: MessageCircle,
  },
  {
    href: "/notifications",
    label: "Alerts",
    icon: Bell,
  },
];

export default function MobileBottomNav() {
  const pathname = usePathname();

  const [sheetOpen, setSheetOpen] =
    useState(false);

  const [visible, setVisible] =
    useState(true);

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;

      if (
        currentY > lastY &&
        currentY > 100
      ) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastY = currentY;
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <>
      <div
        className={`
          fixed
          bottom-4
          left-1/2
          z-50
          w-[95%]
          max-w-md
          -translate-x-1/2
          transition-all
          duration-300
          lg:hidden
          ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-24 opacity-0"
          }
        `}
      >
        <div
          className="
            flex
            items-center
            justify-between
            rounded-3xl
            border
            border-white/10
            bg-slate-950
            px-4
            py-3
            shadow-2xl
          "
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;

            const active =
              pathname === tab.href;

            return (
              <Link
                key={tab.href}
                href={tab.href}
                className="
                  flex
                  flex-col
                  items-center
                  gap-1
                "
              >
                <Icon
                  size={22}
                  className={
                    active
                      ? "text-red-500"
                      : "text-slate-400"
                  }
                />

                <span
                  className={`text-xs ${
                    active
                      ? "text-white"
                      : "text-slate-400"
                  }`}
                >
                  {tab.label}
                </span>
              </Link>
            );
          })}

          <button
            onClick={() =>
              setSheetOpen(true)
            }
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-red-600
            "
          >
            <Menu
              size={20}
              className="text-white"
            />
          </button>
        </div>
      </div>

      <ExpandableBottomSheet
        open={sheetOpen}
        onClose={() =>
          setSheetOpen(false)
        }
      />
    </>
  );
}