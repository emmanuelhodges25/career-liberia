"use client";

import Link from "next/link";

import {
  X,
  Briefcase,
  GraduationCap,
  Rocket,
  Building2,
  Users,
  FileText,
  PenSquare,
  User,
  Settings,
} from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

const menuItems = [
  {
    title: "Jobs",
    href: "/jobs",
    icon: Briefcase,
  },
  {
    title: "Internships",
    href: "/internships",
    icon: GraduationCap,
  },
  {
    title: "Scholarships",
    href: "/scholarships",
    icon: GraduationCap,
  },
  {
    title: "Startups",
    href: "/startups",
    icon: Rocket,
  },
  {
    title: "Companies",
    href: "/companies",
    icon: Building2,
  },
  {
    title: "Recruiters",
    href: "/recruiters",
    icon: Users,
  },
  {
    title: "CV Builder",
    href: "/cv-builder",
    icon: FileText,
  },
  {
    title: "Letter Builder",
    href: "/letter-builder",
    icon: PenSquare,
  },
  {
    title: "Profile",
    href: "/profile",
    icon: User,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function ExpandableBottomSheet({
  open,
  onClose,
}: Props) {
  if (!open) return null;

  return (
    <>
      <div
        onClick={onClose}
        className="
          fixed
          inset-0
          z-50
          bg-black/80
        "
      />

      <div
        className="
          fixed
          bottom-0
          left-0
          right-0
          z-[60]
          max-h-[85vh]
          overflow-auto
          rounded-t-[32px]
          border-t
          border-white/10
          bg-slate-950
          p-6
        "
      >
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2
              className="
                text-2xl
                font-bold
                text-white
              "
            >
              Career Liberia
            </h2>

            <p className="text-slate-400">
              Explore Opportunities
            </p>
          </div>

          <button
            onClick={onClose}
            className="
              rounded-xl
              bg-white/5
              p-3
            "
          >
            <X className="text-white" />
          </button>
        </div>

        <div
          className="
            grid
            grid-cols-2
            gap-4
          "
        >
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.href}
                onClick={onClose}
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  p-5
                  transition
                  hover:bg-white/10
                "
              >
                <Icon
                  className="
                    mb-3
                    text-red-500
                  "
                />

                <h3 className="text-white">
                  {item.title}
                </h3>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}