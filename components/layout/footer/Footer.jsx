export default function Footer() {
  return (
    <footer className="bg-white text-neutral-800 px-6 md:px-20 py-16 border-t border-neutral-200 text-base">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="md:col-span-2">
          <h6 className="font-bold mb-4 uppercase text-neutral-900 text-sm tracking-wider">
            Disclaimer
          </h6>
          <p className="text-neutral-600 leading-relaxed">
            This website is an unofficial fan-made project created solely for
            educational and non-commercial purposes. It is not affiliated with,
            endorsed, maintained, or authorized by Real Madrid CF or any of its
            affiliates. All club names, logos, and trademarks are the property
            of their respective owners. No copyright infringement is intended.
          </p>
        </div>

        <FooterSection
          title="Club"
          links={["About", "History", "Foundation"]}
        />
        <FooterSection
          title="Tickets"
          links={["Buy tickets", "Membership", "Hospitality"]}
        />
        <FooterSocials />
      </div>

      <div className="max-w-7xl mx-auto border-t border-neutral-200 pt-8 text-sm text-neutral-500 text-center">
        <p>
          © {new Date().getFullYear()} Real Madrid Fan Page | Legal | Privacy
          Policy | Cookie Policy | Accessibility
        </p>
      </div>
    </footer>
  );
}

function FooterSection({ title, links }) {
  return (
    <div>
      <h6 className="font-bold mb-4 uppercase text-neutral-900 text-sm tracking-wider">
        {title}
      </h6>
      <ul className="space-y-3">
        {links.map((text) => (
          <li key={text}>
            <a href="#" className="hover:text-[#0055A4] transition-colors">
              {text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterSocials() {
  const icons = ["Facebook", "Twitter", "Instagram"];

  return (
    <div>
      <h6 className="font-bold mb-4 uppercase text-neutral-900 text-sm tracking-wider">
        Follow Us
      </h6>
      <div className="flex space-x-5">
        {icons.map((name) => (
          <a
            key={name}
            href="#"
            className="text-neutral-600 hover:text-[#0055A4] transition-colors"
            aria-label={name}
          >
            <SocialIcon name={name} />
          </a>
        ))}
      </div>
    </div>
  );
}

function SocialIcon({ name }) {
  const paths = {
    Facebook:
      "M9 8H6v4h3v12h5V12h3.6l.4-4H14V6.3c0-.95.2-1.3 1.1-1.3H19V0h-3.8C11.6 0 10 1.6 10 4.6V8z",
    Twitter:
      "M24 4.6c-.9.4-1.8.6-2.8.8 1-0.6 1.8-1.6 2.2-2.7-1 .6-2 .9-3.1 1.2C19.3 2.7 18 2 16.6 2c-2.7 0-4.7 2.5-4.1 5.1-3.4-.2-6.4-1.8-8.4-4.3-1.1 1.9-.6 4.4 1.3 5.7C4 8.4 3.2 8.2 2.5 7.9c-.1 2.3 1.6 4.5 4 5-.7.2-1.5.2-2.2.1.6 1.9 2.4 3.3 4.6 3.3-2.1 1.6-4.7 2.3-7.3 2 2.2 1.4 4.8 2.2 7.5 2.2 9.1 0 14.3-7.7 14-14.6.9-.7 1.8-1.6 2.5-2.6z",
    Instagram:
      "M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.3.5.6.2 1 .5 1.4.9s.7.8.9 1.4c.2.4.4 1.1.5 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.5 2.3-.2.6-.5 1-.9 1.4s-.8.7-1.4.9c-.4.2-1.1.4-2.3.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.3-.5-.6-.2-1-.5-1.4-.9s-.7-.8-.9-1.4c-.2-.4-.4-1.1-.5-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.5-2.3.2-.6.5-1 .9-1.4s.8-.7 1.4-.9c.4-.2 1.1-.4 2.3-.5C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7 .1 5.6.2 4.5.5 3.7.9c-.9.4-1.7 1-2.5 1.8S.5 4.5.1 5.3C-.2 6.1-.5 7.2-.6 8.6.5 8.9 0 9.3 0 12c0 2.7.1 3.1.1 4.4.1 1.4.4 2.5.9 3.3.4.8 1 1.6 1.8 2.4.8.8 1.6 1.4 2.4 1.8.8.5 1.9.8 3.3.9 1.3.1 1.7.1 4.4.1s3.1 0 4.4-.1c1.4-.1 2.5-.4 3.3-.9.8-.4 1.6-1 2.4-1.8.8-.8 1.4-1.6 1.8-2.4.5-.8.8-1.9.9-3.3.1-1.3.1-1.7.1-4.4s0-3.1-.1-4.4c-.1-1.4-.4-2.5-.9-3.3-.4-.8-1-1.6-1.8-2.4-.8-.8-1.6-1.4-2.4-1.8-.8-.5-1.9-.8-3.3-.9C15.3 0 14.9 0 12 0zM12 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zm0 10.3a4.1 4.1 0 1 1 0-8.2 4.1 4.1 0 0 1 0 8.2zm6.4-11.6a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z",
  };

  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="22" height="22">
      <path d={paths[name]} />
    </svg>
  );
}
