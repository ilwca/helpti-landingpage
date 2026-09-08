import logoHelpTI from "@/assets/logo-helpti.png";

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => (
  <img src={logoHelpTI} alt="HelpTI Logo" className={className} />
);

export default Logo;
