"use client";

import React from "react";
import { FaXTwitter, FaGithub, FaRss } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { metaData, socialLinks } from "@/config";
import Link from "next/link";

const YEAR = new Date().getFullYear();

interface SocialLinkProps {
  href: string;
  icon: React.ComponentType;
  label: string;
}

function SocialLink({ href, icon: Icon, label }: SocialLinkProps) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <Icon />
      <span className="sr-only">{label}</span>
    </Link>
  );
}

function SocialLinks() {
  return (
    <div className="float-right flex gap-3.5 text-lg transition-opacity duration-300 hover:opacity-90">
      <SocialLink
        href={socialLinks.twitter}
        icon={FaXTwitter}
        label="Twitter"
      />
      <SocialLink href={socialLinks.github} icon={FaGithub} label="GitHub" />
      <SocialLink href={socialLinks.email} icon={TbMailFilled} label="Email" />
      <Link href="/rss.xml" target="_self" aria-label="RSS Feed">
        <FaRss />
        <span className="sr-only">RSS Feed</span>
      </Link>
    </div>
  );
}

export default function Footer() {
  return (
    <small className="mt-16 block text-[#1C1C1C] dark:text-[#D4D4D4] lg:mt-24">
      <time>&copy; {YEAR}</time>{" "}
      <Link
        className="no-underline"
        href={socialLinks.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        {metaData.username}
      </Link>
      <span className="mx-1">|</span>
      <Link href="/imprint" className="no-underline">
        Imprint
      </Link>{" "}
      &middot;{" "}
      <Link href="/privacy" className="no-underline">
        Privacy
      </Link>
      <style jsx>{`
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
      <SocialLinks />
    </small>
  );
}
