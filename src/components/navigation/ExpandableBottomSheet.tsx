"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
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
  { title: "Jobs", href: "/jobs", icon: Briefcase },
  { title: "Internships", href: "/internships", icon: GraduationCap },
  { title: "Scholarships", href: "/scholarships", icon: GraduationCap },
  { title: "Startups", href: "/startups", icon: Rocket },
  { title: "Companies", href: "/companies", icon: Building2 },
  { title: "Recruiters", href: "/recruiters", icon: Users },
  { title: "CV Builder", href: "/cv-builder", icon: FileText },
  { title: "Letter Builder", href: "/letter-builder", icon: PenSquare },
  { title: "Profile", href: "/profile", icon: User },
  { title: "Settings", href: "/settings", icon: Settings },
];

export default function ExpandableBottomSheet({ open, onClose }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/80"
          />

          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "100%" }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 28,
            }}
            className="fixed bottom-0 left-0 right-0 z-50 max-h-[85vh] overflow-y-auto rounded-t-3xl bg-slate-950 p-5"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-white">Career Liberia</h2>
                <p className="text-xs text-slate-400">Explore Opportunities</p>
              </div>

              <button
                onClick={onClose}
                className="rounded-xl bg-white/5 p-3 active:scale-95"
              >
                <X className="text-white" />
              </button>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 gap-3">
              {menuItems.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className="rounded-2xl bg-white/5 p-4 active:scale-95"
                  >
                    <Icon className="mb-3 text-red-500" />
                    <h3 className="text-sm text-white">{item.title}</h3>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}