import { SAMIRR_SOCIALS } from "@/data/social"

export const renderSocials = () =>
    SAMIRR_SOCIALS.map((item) => {
      const { name, href, icon: Icon } = item;
      return (
        <a
          key={name}
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon />
        </a>
      );
    });